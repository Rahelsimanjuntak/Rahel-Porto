import { useState, useEffect } from "react";

// Styles
import "./styles/global.css";

// Components
import { Noise }            from "./components/UI";
import { Navbar }           from "./components/Navbar";
import { Marquee }          from "./components/Marquee";
import { Hero }             from "./components/Hero";
import { About }            from "./components/About";
import { Projects }         from "./components/Projects";
import { Experience }       from "./components/Experience";
import { Contact, Footer }  from "./components/Contact";

const SECTIONS = ["hero", "about", "projects", "org", "contact"];

export default function App() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.3) setActive(e.target.id);
        }),
      { threshold: 0.3 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Noise />
      <Navbar active={active} setActive={setActive} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
