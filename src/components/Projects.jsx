import { useState } from "react";
import { RED, CREAM } from "../data/theme";
import { portfolioData } from "../data/portfolioData";
import { SectionLabel, Divider, PhotoPlaceholder } from "./UI";
import { images } from "../assets/images";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" style={{ padding: "8rem 5vw", position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <SectionLabel>College Projects</SectionLabel>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: CREAM, lineHeight: 0.95 }}>
              KARYA<br /><span style={{ color: RED }}>PILIHAN.</span>
            </h2>
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "rgba(245,237,214,0.2)", letterSpacing: "0.1em" }}>{projects.length} Projects</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index: i }) {
  const [hov, setHov] = useState(false);
  const projectImg    = images.projects[p.id]; // ambil dari images.js

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? "rgba(196,30,30,0.25)" : "rgba(245,237,214,0.06)"}`, borderRadius: 6, background: hov ? "rgba(245,237,214,0.03)" : "transparent", transition: "all 0.3s", animation: `fadeUp 0.6s ${i * 0.1}s ease both`, position: "relative", overflow: "hidden" }}
    >
      {hov && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: p.color }} />}

      {/* Banner gambar project */}
      {projectImg ? (
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          <img src={projectImg} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(14,10,7,0.97))" }} />
        </div>
      ) : (
        /* Placeholder kalau belum ada foto */
        <div style={{ height: 140, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(245,237,214,0.04)", background: "rgba(245,237,214,0.01)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "rgba(245,237,214,0.15)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Tambahkan foto di images.projects["{p.id}"]
          </span>
        </div>
      )}

      {/* Content */}
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: "2rem", alignItems: "start", padding: "2rem 2.5rem" }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontSize: "3.5rem", lineHeight: 1, color: hov ? p.color : "rgba(245,237,214,0.1)", transition: "color 0.3s" }}>{p.id}</div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.8rem", color: CREAM }}>{p.title}</h3>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "rgba(245,237,214,0.35)" }}>— {p.subtitle}</span>
          </div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "rgba(245,237,214,0.4)", lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: 600 }}>{p.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {p.tags.map((t) => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.25rem 0.7rem", borderRadius: 2, background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right", minWidth: 120 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(245,237,214,0.2)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{p.period}</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: p.color, marginBottom: "1rem" }}>{p.role}</div>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(245,237,214,0.3)", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = CREAM)}
            onMouseLeave={(e) => (e.target.style.color = "rgba(245,237,214,0.3)")}>
            Github →
          </a>
        </div>
      </div>
    </div>
  );
}
