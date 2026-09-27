import { revalidateTag } from "next/cache";
import type { GlobalAfterChangeHook } from "payload";

// After a publish, mark the cached CMS data behind these tags as stale so every page that
// uses it is regenerated on its next request. `expire: 0` makes that next request wait for
// fresh content, so an editor who reloads right after publishing sees the change.
// Drafts never revalidate. Scripts (seed, CLI) run outside Next.js and skip this.

export const revalidateOnPublish =
  (tags: string[]): GlobalAfterChangeHook =>
  ({ doc, context, req }) => {
    // A version restore passes the version record, whose status sits under `version`.
    const status = doc?._status ?? doc?.version?._status;
    if (context?.skipRevalidate || status !== "published") return doc;
    for (const tag of tags) {
      try {
        revalidateTag(tag, { expire: 0 });
      } catch (error) {
        req.payload.logger.warn({ msg: `Could not revalidate "${tag}"`, err: error });
      }
    }
    return doc;
  };
