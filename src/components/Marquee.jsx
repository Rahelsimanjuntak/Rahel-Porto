import { RED, CREAM } from "../data/theme";

const ITEMS = ["Frontend Dev", "UI/UX Design", "Scrum Master", "Photography", "Video Editing", "Next.js", "Figma", "Kotlin"];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ overflow: "hidden", background: RED, padding: "0.75rem 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap", animation: "marquee 20s linear infinite" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ fontFamily: "'Anton', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", color: CREAM, textTransform: "uppercase", flexShrink: 0 }}>
            {t} <span style={{ opacity: 0.5, marginLeft: "1rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
