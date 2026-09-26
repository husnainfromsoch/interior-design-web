import type { CollectionConfig } from "payload";
import { ROLES, isAdmin, isAdminField, isAdminOrSelf } from "../access";

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
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
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
      // Only an administrator can grant or change a role.
      access: { create: isAdminField, update: isAdminField },
      admin: { position: "sidebar" },
    },
  ],
};
