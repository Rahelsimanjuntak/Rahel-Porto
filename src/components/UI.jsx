import { useState } from "react";
import { RED, CREAM } from "../data/theme";

export function Noise() {
  return (
    <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 99, opacity: 0.035 }}>
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  );
}

export function SectionLabel({ children, center }) {
  return (
    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.3em", color: RED, textTransform: "uppercase", marginBottom: "1rem", textAlign: center ? "center" : "left" }}>
      ✦ {children}
    </p>
  );
}

export function Divider() {
  return <div style={{ position: "absolute", top: 0, left: "5vw", right: "5vw", height: 1, background: "linear-gradient(to right, transparent, rgba(196,30,30,0.2), transparent)" }} />;
}

export function Btn({ children, onClick, filled }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: filled ? (hov ? "#a01818" : RED) : "transparent", color: CREAM, border: filled ? "none" : "1px solid rgba(245,237,214,0.15)", padding: "0.9rem 2.2rem", borderRadius: 3, fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s", transform: hov ? "translateY(-2px)" : "none", boxShadow: hov && filled ? "0 8px 24px rgba(196,30,30,0.4)" : "none" }}
    >
      {children}
    </button>
  );
}

/* ── Foto placeholder kalau gambar belum diisi ── */
export function PhotoPlaceholder({ width = "100%", height = 200, label = "Tambahkan foto di src/assets/images.js", shape = "rect" }) {
  const isCircle = shape === "circle";
  return (
    <div style={{
      width, height: isCircle ? width : height,
      borderRadius: isCircle ? "50%" : 6,
      border: "1.5px dashed rgba(245,237,214,0.1)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 8,
      background: "rgba(245,237,214,0.02)",
      flexShrink: 0,
    }}>
      <span style={{ fontSize: "1.5rem", opacity: 0.2 }}>🖼</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.08em", color: "rgba(245,237,214,0.2)", textAlign: "center", padding: "0 1rem", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
