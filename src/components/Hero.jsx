import { RED, CREAM } from "../data/theme";
import { Btn, PhotoPlaceholder } from "./UI";
import { images } from "../assets/images";

const STATS     = [["3+", "Projects"], ["5+", "Org Roles"], ["2026", "Angkatan"]];
const TECH_CHIPS = ["Next.js", "Tailwind CSS", "Figma", "Laravel", "Kotlin"];

export function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 5vw", position: "relative", overflow: "hidden" }}>

      {/* Background ghost text */}
      <div style={{ position: "absolute", right: "-2vw", top: "50%", transform: "translateY(-50%)", fontFamily: "'Anton', sans-serif", fontSize: "clamp(8rem, 20vw, 22rem)", color: "transparent", WebkitTextStroke: "1px rgba(196,30,30,0.12)", userSelect: "none", pointerEvents: "none", lineHeight: 1 }}>RS</div>

      {/* Left accent line */}
      <div style={{ position: "absolute", left: "5vw", top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${RED}, transparent)` }} />

      <div style={{ paddingLeft: "3vw", position: "relative", zIndex: 10, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>

        {/* ── Text ── */}
        <div style={{ maxWidth: 660 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(196,30,30,0.12)", border: "1px solid rgba(196,30,30,0.3)", borderRadius: 100, padding: "0.4rem 1rem", marginBottom: "2rem", animation: "fadeUp 0.6s ease both" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: CREAM, textTransform: "uppercase" }}>Available for Internship</span>
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.95, letterSpacing: "-0.01em", marginBottom: "1.5rem", animation: "fadeUp 0.6s 0.1s ease both" }}>
            <span style={{ display: "block", color: CREAM }}>RAHEL</span>
            <span style={{ display: "block", color: RED }}>SIMANJUNTAK</span>
          </h1>

          {/* Tagline */}
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.8rem, 1.5vw, 1rem)", color: "rgba(245,237,214,0.5)", lineHeight: 1.7, maxWidth: 540, marginBottom: "2.5rem", animation: "fadeUp 0.6s 0.2s ease both" }}>
            Building digital products that are functional, beautiful, and impactful.
          </p>

          {/* Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "3rem", animation: "fadeUp 0.6s 0.25s ease both" }}>
            {TECH_CHIPS.map((t) => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.35rem 0.9rem", borderRadius: 2, background: "rgba(196,30,30,0.1)", border: "1px solid rgba(196,30,30,0.25)", color: "rgba(245,237,214,0.7)" }}>{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.3s ease both" }}>
            <Btn filled onClick={() => scrollTo("projects")}>Lihat Proyek</Btn>
            <Btn onClick={() => scrollTo("contact")}>Hubungi Saya</Btn>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", animation: "fadeUp 0.6s 0.4s ease both", flexWrap: "wrap" }}>
            {STATS.map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "2rem", color: RED, lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.35)", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Foto Profil ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", animation: "fadeUp 0.6s 0.2s ease both", flexShrink: 0 }}>
          {images.profile ? (
            <img
              src={images.profile}
              alt="Rahel Simanjuntak"
              style={{ width: 220, height: 220, borderRadius: "50%", objectFit: "contain", border: `2px solid rgba(196,30,30,0.3)` }}
            />
          ) : (
            <PhotoPlaceholder width="220px" height={220} shape="circle" label="foto-profil.jpg" />
          )}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(245,237,214,0.2)", textTransform: "uppercase" }}>Foto Profil</span>
        </div>

      </div>
    </section>
  );
}
