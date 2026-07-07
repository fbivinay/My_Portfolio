import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="mx-auto max-w-column px-6 pb-24 pt-20 sm:pt-28">
      <div className="flex items-start justify-between gap-8">
        <div>
          <p className="rise text-sm font-medium text-ink" style={{ "--i": 0 } as React.CSSProperties}>
            {profile.name}
          </p>
          <p className="rise mt-1 flex items-center gap-2 text-sm text-gray" style={{ "--i": 1 } as React.CSSProperties}>
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Data science & ML · {profile.location.split(",")[0]}
          </p>
        </div>
        <div className="rise relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20" style={{ "--i": 1 } as React.CSSProperties}>
          <Image src="/profile.jpg" alt={profile.name} fill priority sizes="80px" className="object-cover" />
        </div>
      </div>

      <h1
        className="rise mt-12 font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-[2.75rem]"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        I build systems that turn raw data into{" "}
        <em className="text-gray">clear answers</em> — ML pipelines, real-time
        analytics, and the dashboards that make them useful.
      </h1>

      <p className="rise mt-8 max-w-lg text-[15px] leading-relaxed text-gray" style={{ "--i": 3 } as React.CSSProperties}>
        Currently pursuing an MSc in Big Data Analytics at St. Joseph&rsquo;s
        University, Bengaluru. Recently: an award-winning RFID inventory
        platform, a Strava-powered training planner with a 94%-accurate model,
        and a retrieval-based university chatbot — all deployed and live.
      </p>

      <div className="rise mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ "--i": 4 } as React.CSSProperties}>
        <a href={`mailto:${profile.email}`} className="u-link text-ink">Email</a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="u-link text-ink">GitHub</a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="u-link text-ink">LinkedIn</a>
        <a href={profile.resumeFile} download className="u-link text-ink">Resume</a>
      </div>
    </section>
  );
}
