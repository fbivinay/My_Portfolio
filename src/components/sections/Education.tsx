import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="mx-auto max-w-column px-6 py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-faint">
        Education
      </h2>

      <div className="mt-10 space-y-10">
        {education.map((ed) => (
          <article key={ed.school} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <p className="text-sm tabular-nums text-faint">{ed.period}</p>
            <div>
              <h3 className="text-[15px] font-medium text-ink">{ed.degree}</h3>
              <p className="mt-0.5 text-sm text-gray">
                {ed.school} · {ed.score}
              </p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-20 text-sm font-medium uppercase tracking-[0.14em] text-faint">
        Certifications
      </h2>
      <ul className="mt-8 space-y-3">
        {certifications.map((c) => (
          <li key={c.name} className="flex items-baseline justify-between gap-4 text-[15px]">
            <span className="text-ink">{c.name}</span>
            <span className="shrink-0 text-sm text-faint">{c.issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
