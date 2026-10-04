import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { hitRateLimit } from "@/lib/enquiry/store";

// Upload tokens for the enquiry form's "Plan or photos" field (Changes Sheet G5). The
// browser uploads each file straight to Vercel Blob, because a request body is limited
// to 4.5 MB; this route only issues a short-lived token restricted to PDF, JPG and PNG
// up to 10 MB. Needs BLOB_READ_WRITE_TOKEN (set by the Vercel Blob integration).

const MAX_FILE_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("[enquiry] file storage not configured (BLOB_READ_WRITE_TOKEN)");
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
  const body = (await request.json()) as HandleUploadBody;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // 5 files per enquiry; allow a few retries per ten minutes.
        if (await hitRateLimit(`upload:${ip}`, 20, 600)) throw new Error("rate_limited");
        if (!pathname.startsWith("enquiries/")) throw new Error("invalid_path");
        return {
          allowedContentTypes: ["application/pdf", "image/jpeg", "image/png"],
          maximumSizeInBytes: MAX_FILE_BYTES,
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async () => {},
    });
    return NextResponse.json(json);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });
  }
}
