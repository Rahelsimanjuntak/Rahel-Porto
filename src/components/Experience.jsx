import { useState } from "react";
import { RED, CREAM } from "../data/theme";
import { portfolioData } from "../data/portfolioData";
import { SectionLabel, Divider } from "./UI";
import { images } from "../assets/images";

export function Experience() {
  const { organizations, certificates } = portfolioData;

  // filter gallery yang bukan null
  const galleryPhotos = images.gallery.filter(Boolean);

  return (
    <section id="org" style={{ padding: "8rem 5vw", position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: CREAM, lineHeight: 0.95, marginBottom: "4rem" }}>
          ORGANISASI<br /><span style={{ color: RED }}>& KEPEMIMPINAN.</span>
        </h2>

        {/* Org cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {organizations.map((o, i) => <OrgCard key={i} org={o} index={i} />)}
        </div>

        {/* Freelance */}
        <div style={{ marginTop: "3rem", padding: "2rem 2.5rem", border: "1px solid rgba(245,237,214,0.06)", borderRadius: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: RED, textTransform: "uppercase", marginBottom: "0.4rem" }}>Pengalaman Kerja</div>
              <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1.4rem", color: CREAM }}>Freelance Marketing Rumah</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "rgba(245,237,214,0.4)", lineHeight: 1.7, marginTop: "0.75rem", maxWidth: 500 }}>
                Merancang strategi promosi, komunikasi antar pembeli & penjual, berhasil menjual 2 unit rumah.
              </p>
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(245,237,214,0.2)", letterSpacing: "0.1em" }}>Mar – Sept 2024</span>
          </div>
        </div>

        {/* Galeri Dokumentasi */}
        <div style={{ marginTop: "3rem" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Galeri Dokumentasi
          </p>
          {galleryPhotos.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "0.75rem" }}>
              {galleryPhotos.map((src, i) => (
                <div key={i} style={{ aspectRatio: "1", borderRadius: 4, overflow: "hidden" }}>
                  <img src={src} alt={`gallery-${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "rgba(245,237,214,0.2)", letterSpacing: "0.05em" }}>
              Tambahkan foto di <code style={{ color: "rgba(196,30,30,0.6)" }}>src/assets/images.js</code> → array gallery[ ]
            </p>
          )}
        </div>

        {/* Certificates */}
        <div style={{ marginTop: "3rem" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(245,237,214,0.25)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Certificates & Recognition
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {certificates.map((c) => (
              <span key={c} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", padding: "0.4rem 1rem", borderRadius: 2, background: "rgba(196,30,30,0.08)", border: "1px solid rgba(196,30,30,0.18)", color: "rgba(245,237,214,0.55)" }}>✦ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrgCard({ org: o, index: i }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? "rgba(196,30,30,0.06)" : "rgba(245,237,214,0.02)", border: `1px solid ${hov ? "rgba(196,30,30,0.3)" : "rgba(245,237,214,0.06)"}`, borderRadius: 6, padding: "2rem", transition: "all 0.3s", animation: `fadeUp 0.6s ${i * 0.08}s ease both` }}
    >
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: RED, textTransform: "uppercase", marginBottom: "0.5rem" }}>{o.period}</div>
      <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "1rem", color: CREAM, marginBottom: "0.3rem", lineHeight: 1.3 }}>{o.role}</h3>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "rgba(245,237,214,0.35)", marginBottom: "1.2rem" }}>{o.org}</p>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {o.points.map((pt, j) => (
          <li key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "rgba(245,237,214,0.45)", lineHeight: 1.6, paddingLeft: "1rem", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: RED }}>›</span>{pt}
          </li>
        ))}
      </ul>
    </div>
  );
}
