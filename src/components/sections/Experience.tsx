import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="mx-auto max-w-column px-6 py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-faint">
        Experience
      </h2>

      <div className="mt-10 space-y-12">
        {experience.map((job) => (
          <article key={job.company} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="text-sm tabular-nums text-faint">
              {job.start} — {job.end}
            </p>
            <div>
              <h3 className="text-[15px] font-medium text-ink">
                {job.title}
                <span className="text-gray"> · {job.company}</span>
              </h3>
              <p className="mt-0.5 text-sm text-faint">{job.location}</p>
              <ul className="mt-3 space-y-2">
                {job.points.map((pt, i) => (
                  <li key={i} className="text-[15px] leading-relaxed text-gray">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
