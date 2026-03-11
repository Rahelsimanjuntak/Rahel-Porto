import { useState, useEffect } from "react";
import { RED } from "../data/theme";

const NAV_LINKS = [
  { id: "hero",     label: "Home"       },
  { id: "about",    label: "About"      },
  { id: "projects", label: "Projects"   },
  { id: "org",      label: "Experience" },
  { id: "contact",  label: "Contact"    },
];

export function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 5vw", background: scrolled ? "rgba(14,10,7,0.92)" : "transparent", backdropFilter: scrolled ? "blur(18px)" : "none", borderBottom: scrolled ? "1px solid rgba(196,30,30,0.2)" : "none", transition: "all 0.4s" }}>
      <button onClick={() => go("hero")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.5rem", color: RED }}>RS</span>
        <span style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Portfolio 2026</span>
      </button>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {NAV_LINKS.map((l) => (
          <li key={l.id}>
            <button onClick={() => go(l.id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: active === l.id ? RED : "rgba(255,255,255,0.5)", transition: "color 0.3s" }}>
              {active === l.id && <span style={{ marginRight: 4 }}>▸</span>}{l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
