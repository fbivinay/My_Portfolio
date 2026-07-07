"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-base/90 backdrop-blur-sm transition-shadow ${
        scrolled ? "border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-column items-center justify-between px-6">
        <a href="#top" className="text-sm font-medium tracking-tight text-ink">
          Vinay Kumar
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="u-link hidden text-sm text-gray hover:text-ink sm:block">
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="grid h-8 w-8 place-items-center rounded-full text-gray transition-colors hover:bg-wash hover:text-ink"
          >
            {dark ? <Sun size={15} aria-hidden /> : <Moon size={15} aria-hidden />}
          </button>
        </nav>
      </div>
    </header>
  );
}
