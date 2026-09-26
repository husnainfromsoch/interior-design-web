import type { Access, FieldAccess } from "payload";

// CMS roles (main spec §22 rule 10). Website Administrator publishes and manages settings
// and users; Content Manager edits and submits. Collections added in later steps reuse
// these checks so permissions live in one place.

export const ROLES = [
  { label: "Website Administrator", value: "admin" },
  { label: "Content Manager", value: "editor" },
] as const;

export type Role = (typeof ROLES)[number]["value"];

type WithRole = { role?: Role | null } | null | undefined;
const roleOf = (user: unknown) => (user as WithRole)?.role;

export const isAdmin: Access = ({ req }) => roleOf(req.user) === "admin";

export const isAdminField: FieldAccess = ({ req }) => roleOf(req.user) === "admin";

/** Administrators see every record; anyone else only their own. */
export const isAdminOrSelf: Access = ({ req }) => {
  if (!req.user) return false;
  if (roleOf(req.user) === "admin") return true;
  return { id: { equals: req.user.id } };
};
