import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#18181b",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#71717a" }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 58, lineHeight: 1.2, maxWidth: 900 }}>
          Turning raw data into clear answers.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#71717a" }}>
          <span>Data Science · AI / ML</span>
          <span>Bengaluru</span>
        </div>
      </div>
    ),
    size
  );
}
