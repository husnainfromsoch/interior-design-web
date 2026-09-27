import { APIError, type CollectionConfig } from "payload";
import { ROLES, deleteUsers, isAdmin, isAdminField, isDeveloperUser, readUsers, updateUsers } from "../access";

// Admin accounts. Email + password login with lockout; the session cookie is httpOnly and
// secure in production. MFA (main spec §27) is added in the hardening step.
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "User", plural: "Users" },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "name", "role"],
  },
  auth: {
    tokenExpiration: 60 * 60 * 8, // 8 hours
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000, // 15 minutes
    cookies: {
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    },
  },
  access: {
    admin: ({ req }) => Boolean(req.user),
    create: isAdmin,
    read: readUsers,
    update: updateUsers,
    delete: deleteUsers,
  },
  hooks: {
    beforeChange: [
      // The very first account (created on the /admin first-user screen) becomes the
      // administrator; otherwise nobody could manage users or roles.
      async ({ data, operation, req }) => {
        if (operation !== "create") return data;
        const { totalDocs } = await req.payload.count({ collection: "users", overrideAccess: true, req });
        if (totalDocs === 0) return { ...data, role: "admin" };
        return data;
      },
    ],
  },
  fields: [
    { name: "name", type: "text" },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      options: ROLES.map((r) => ({ ...r })),
      saveToJWT: true,
      // Only an administrator (or developer) can grant or change a role.
      access: { create: isAdminField, update: isAdminField },
      // The internal developer role is offered to developers only. Payload also applies this
      // list when validating on the server; trusted server-side scripts (no signed-in user)
      // keep the full list so the first developer account can be created.
      filterOptions: ({ options, req }) =>
        !req.user || isDeveloperUser(req)
          ? options
          : options.filter((o) => (typeof o === "string" ? o : o.value) !== "developer"),
      hooks: {
        beforeChange: [
          ({ value, originalDoc, req }) => {
            // Server-side guard behind filterOptions: granting or removing the developer
            // role is reserved for developers (and trusted scripts running without a user).
            const touchesDeveloper = value === "developer" || originalDoc?.role === "developer";
            if (touchesDeveloper && value !== originalDoc?.role && req.user && !isDeveloperUser(req)) {
              throw new APIError("Only a developer can assign or remove the developer role.", 403);
            }
            return value;
          },
        ],
      },
      admin: { position: "sidebar" },
    },
  ],
};
