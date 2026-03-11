import { RED, CREAM } from "../data/theme";
import { portfolioData } from "../data/portfolioData";
import { SectionLabel, Divider, PhotoPlaceholder } from "./UI";
import { images } from "../assets/images";

const INFO_ROWS  = [
  ["📍", "Mantang k.23, Batam"],
  ["🎓", "Polibatam – Teknologi Rekayasa Perangkat Lunak"],
  ["🏫", "SMA Negeri 19 Batam (2020–2023)"],
];
const SOFT_SKILLS = ["Komunikasi", "Adaptif", "Team Work", "Leadership", "Manajemen Waktu"];

export function About() {
  const { about, tools, skills } = portfolioData;

  return (
    <section id="about" style={{ padding: "8rem 5vw", position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

        {/* ── Left ── */}
        <div>
          <SectionLabel>About Me</SectionLabel>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: CREAM, lineHeight: 0.95, marginBottom: "2rem" }}>
            DEVELOPER<br /><span style={{ color: RED }}>& CREATOR.</span>
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "rgba(245,237,214,0.55)", lineHeight: 1.9, marginBottom: "1.5rem" }}>{about}</p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "rgba(245,237,214,0.4)", lineHeight: 1.9 }}>
            Selain coding, aktif di dunia fotografi dan dokumentasi kreatif — merekam momen penting kampus sebagai kepala subdivisi dokumentasi berbagai event besar.
          </p>

          {/* Info */}
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {INFO_ROWS.map(([icon, text]) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span>{icon}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "rgba(245,237,214,0.5)", lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "1rem" }}>Tools</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tools.map((t) => (
                <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", padding: "0.3rem 0.8rem", border: "1px solid rgba(245,237,214,0.1)", borderRadius: 2, color: "rgba(245,237,214,0.45)" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Foto About */}
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Foto</p>
            {images.about ? (
              <img src={images.about} alt="About Rahel" style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 6 }} />
            ) : (
              <PhotoPlaceholder width="100%" height={200} label="foto-about.jpg" />
            )}
          </div>
        </div>

        {/* ── Right: skills ── */}
        <div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "2rem" }}>Skills & Stack</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
            {skills.map((s, i) => (
              <div key={s.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.7rem" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: CREAM }}>{s.name}</span>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: "0.9rem", color: RED }}>{s.level}%</span>
                </div>
                <div style={{ height: 2, background: "rgba(245,237,214,0.07)", borderRadius: 1, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${s.level}%`, background: `linear-gradient(to right, ${RED}, #e05050)`, borderRadius: 1, animation: `growBar 1.5s ${i * 0.1}s ease both` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "1rem" }}>Soft Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SOFT_SKILLS.map((s) => (
                <span key={s} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", padding: "0.35rem 0.9rem", borderRadius: 2, background: "rgba(196,30,30,0.1)", border: "1px solid rgba(196,30,30,0.2)", color: "rgba(245,237,214,0.6)" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
