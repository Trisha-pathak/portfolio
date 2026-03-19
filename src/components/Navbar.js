import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [rippling, setRippling] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setRippling(true);
    setDark(!dark);
    setTimeout(() => setRippling(false), 600);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-bg/80 backdrop-blur-xl border-b border-secondary/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-xl font-bold tracking-wide text-accent"
          >
            Trisha<span className="text-secondary">.</span>
          </h1>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-10 text-sm font-medium">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative group text-text
                  transition-colors duration-300
                "
              >
                {item.label}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-accent
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </button>
            ))}
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              relative w-12 h-12 rounded-full
              flex items-center justify-center
              transition-transform duration-500
              hover:scale-110 active:scale-95
            "
          >
            {/* Ripple burst */}
            {rippling && (
              <span className="absolute inset-0 rounded-full bg-soft opacity-40 animate-ping" />
            )}

            {/* Ambient glow */}
            <span className="absolute inset-0 rounded-full blur-xl bg-soft opacity-40" />

            {/* Icons */}
            <span className="relative z-10">
              <FiSun
                className={`
                  absolute text-lg text-primary
                  transition-all duration-500 ease-in-out
                  ${dark
                    ? "opacity-0 scale-50 rotate-90"
                    : "opacity-100 scale-100 rotate-0"}
                `}
              />
              <FiMoon
                className={`
                  absolute text-lg text-primary
                  transition-all duration-500 ease-in-out
                  ${dark
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 -rotate-90"}
                `}
              />
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
}