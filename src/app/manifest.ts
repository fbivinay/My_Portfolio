import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.shortName,
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c43b2f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
