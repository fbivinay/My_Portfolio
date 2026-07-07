import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" aria-label="Selected work" className="mx-auto max-w-column px-6 py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-faint">
        Selected work
      </h2>

      <div className="mt-10">
        {projects.map((p) => (
          <article key={p.id} className="group border-t border-line py-10 first:border-t-0 first:pt-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-tight text-ink">
                <a
                  href={p.live ?? p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors group-hover:text-accent"
                >
                  {p.title}
                </a>
              </h3>
              <span className="shrink-0 text-sm tabular-nums text-faint">{p.year}</span>
            </div>

            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray">
              {p.description[0]}
            </p>
            {p.id === "smart-rfid" && (
              <p className="mt-2 text-sm text-gray">
                2nd place, Project Showcase Day 2026 · field-tested at a live
                retail store · research paper under review.
              </p>
            )}
            {p.id === "endurance-intelligence" && (
              <p className="mt-2 text-sm text-gray">
                Random Forest plan classifier at 94% accuracy, trained on real
                Strava history.
              </p>
            )}

            <p className="mt-4 text-sm text-faint">{p.tech.join(" · ")}</p>

            <div className="mt-5 flex gap-6 text-sm">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-link inline-flex items-center gap-1 text-ink"
                >
                  Live site <ArrowUpRight size={13} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="u-link text-gray hover:text-ink"
              >
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
