import { useState } from "react";
import { RED, CREAM } from "../data/theme";
import { portfolioData } from "../data/portfolioData";
import { SectionLabel, Divider } from "./UI";

const { contact } = portfolioData;

const SOCIAL_LINKS = [
  { label: "WA", value: contact.phone,      href: `https://wa.me/62${contact.phone.replace(/^0/, "")}` },
  { label: "IG", value: contact.instagram,  href: "https://instagram.com/rahelsimanjuntak_"            },
  { label: "IN", value: "rahelsimanjuntak", href: "https://linkedin.com/in/rahelsimanjuntak22"          },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "8rem 5vw 5rem", position: "relative", overflow: "hidden" }}>
      <Divider />
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", fontFamily: "'Anton', sans-serif", fontSize: "clamp(5rem, 20vw, 18rem)", color: "transparent", WebkitTextStroke: "1px rgba(196,30,30,0.07)", userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>CONTACT</div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
        <SectionLabel center>Let's Connect</SectionLabel>
        <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)", color: CREAM, lineHeight: 0.95, marginBottom: "1.5rem" }}>
          MARI<br /><span style={{ color: RED }}>BERKOLABORASI.</span>
        </h2>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "rgba(245,237,214,0.4)", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 3.5rem" }}>
          Terbuka untuk internship, proyek freelance, atau kolaborasi kreatif. Jangan ragu untuk menghubungi!
        </p>

        <button onClick={copyEmail} style={{ background: copied ? "rgba(74,222,128,0.1)" : "rgba(196,30,30,0.12)", border: `1px solid ${copied ? "rgba(74,222,128,0.3)" : "rgba(196,30,30,0.3)"}`, color: CREAM, padding: "1.1rem 2.5rem", borderRadius: 4, fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.08em", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.75rem", margin: "0 auto 3rem", transition: "all 0.3s" }}>
          <span>{copied ? "✓" : "✉"}</span>
          {copied ? "Email Disalin!" : contact.email}
        </button>

        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {SOCIAL_LINKS.map(({ label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: "0.9rem", color: RED, letterSpacing: "0.1em" }}>{label}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "rgba(245,237,214,0.4)" }}>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(245,237,214,0.05)", padding: "1.5rem 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(245,237,214,0.2)" }}>© 2026 Rahel Simanjuntak. All rights reserved.</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(245,237,214,0.15)" }}>Polibatam · TRPL · Batam</span>
    </footer>
  );
}
