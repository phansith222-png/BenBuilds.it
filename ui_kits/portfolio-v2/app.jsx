/* App — composes editorial portfolio v2 */

const MARQUEE_ITEMS = [
  "FULL STACK DEVELOPER",
  "AVAILABLE Q2 · 2026",
  "TYPESCRIPT",
  "NEXT.JS",
  "REACT",
  "NODE",
  "AI INTEGRATION",
  "BASED IN BANGKOK",
  "FREELANCE-READY",
];

function App() {
  const [activeProject, setActiveProject] = React.useState(null);
  return (
    <main>
      <div className="grain-fixed" aria-hidden="true"></div>

      <div className="util-bar">
        <div className="util-left">
          <span className="util-name">BENBUILDS<span style={{ color: "var(--orange-accent)" }}>.</span>IT</span>
          <span className="util-status"><span className="util-dot"></span> Available Q2 · 2026</span>
        </div>
        <div className="util-right" style={{ display: "flex", gap: 24 }}>
          <a href="#works" className="util-link">Works</a>
          <a href="#capabilities" className="util-link">Capabilities</a>
          <a href="#origin" className="util-link">Origin</a>
          <a href="#contact" className="util-link">Contact</a>
        </div>
      </div>

      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Origin />
      <Trilingual />
      <Works onOpen={setActiveProject} />
      <Marquee items={["LET'S BUILD", "SAY HI", "PHANSIT.H222@GMAIL.COM", "LINKEDIN / BEN-PHANSIT", "GITHUB / PHANSITH222-PNG"]} dark={false} />
      <Capabilities />
      <Contact />
      {activeProject && (
        <WorkDetail project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
