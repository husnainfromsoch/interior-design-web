"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          background: "#F7F3EC",
          color: "#2E2A25",
          textAlign: "center",
          padding: "1.5rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", margin: 0 }}>Something went wrong</h1>
        <p style={{ maxWidth: 420, color: "#8B857A" }}>
          Please try again — your connection and place in the site are unaffected.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            borderRadius: 999,
            border: "1px solid #7C5A3A",
            background: "#7C5A3A",
            color: "#F7F3EC",
            padding: "14px 28px",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
