import type { Access, FieldAccess, PayloadRequest, Where } from "payload";

// CMS roles. The two client roles come from main spec §22 rule 10: the Website
// Administrator publishes and manages settings and users; the Content Manager edits and
// saves drafts. `developer` is internal: it has every administrator right plus the
// developer-controlled fields and technical configuration, and is invisible to clients.

export const ROLES = [
  { label: "Website Administrator", value: "admin" },
  { label: "Content Manager", value: "editor" },
  { label: "Developer (internal)", value: "developer" },
] as const;

export type Role = (typeof ROLES)[number]["value"];

type WithRole = { role?: Role | null } | null | undefined;
export const roleOf = (user: unknown) => (user as WithRole)?.role ?? null;

export const isDeveloperUser = (req: PayloadRequest) => roleOf(req.user) === "developer";
/** Website Administrator or developer: may publish, manage users and settings. */
export const isAdminUser = (req: PayloadRequest) => {
  const role = roleOf(req.user);
  return role === "admin" || role === "developer";
};

export const isAdmin: Access = ({ req }) => isAdminUser(req);
export const isAdminField: FieldAccess = ({ req }) => isAdminUser(req);
export const isDeveloper: Access = ({ req }) => isDeveloperUser(req);
export const isDeveloperField: FieldAccess = ({ req }) => isDeveloperUser(req);
export const isLoggedIn: Access = ({ req }) => Boolean(req.user);

/**
 * Save access for drafts-enabled content: every signed-in role may save a draft, but only
 * administrators and developers may publish (a Content Manager's publish is refused).
 */
export const canSaveOrPublish: Access = ({ req, data }) => {
  if (!req.user) return false;
  if (isAdminUser(req)) return true;
  return (data as { _status?: string } | undefined)?._status !== "published";
};

// Users: administrators never see or change developer accounts; editors only themselves.
const notDeveloper: Where = { role: { not_equals: "developer" } };

export const readUsers: Access = ({ req }) => {
  if (!req.user) return false;
  if (isDeveloperUser(req)) return true;
  const self: Where = { id: { equals: req.user.id } };
  if (roleOf(req.user) === "admin") return { or: [notDeveloper, self] };
  return self;
};

export const updateUsers: Access = readUsers;

export const deleteUsers: Access = ({ req }) => {
  if (isDeveloperUser(req)) return true;
  if (roleOf(req.user) === "admin") return notDeveloper;
  return false;
};
