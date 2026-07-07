import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-column px-6 py-20">
        <p className="text-sm text-gray">Get in touch</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-block font-serif text-3xl italic tracking-tight text-ink transition-colors hover:text-accent sm:text-4xl"
        >
          {profile.email}
        </a>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-gray">
          Open to data science and ML engineering roles, internships, and
          interesting collaborations.
        </p>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-line pt-6 text-sm text-gray sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location.split(",")[0]}
          </p>
          <div className="flex gap-5">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="u-link hover:text-ink">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="u-link hover:text-ink">LinkedIn</a>
            <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="u-link hover:text-ink">X</a>
            <a href={profile.resumeFile} download className="u-link hover:text-ink">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
