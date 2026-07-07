import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="mx-auto max-w-column px-6 py-20">
      <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-faint">
        Skills
      </h2>

      <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <h3 className="text-sm font-medium text-ink">{g.label}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-gray">
              {g.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
