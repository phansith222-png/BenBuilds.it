/* Trilingual — languages reframed as one strip */

function Trilingual() {
  const { languages } = window.BB_DATA;
  return (
    <section className="tri" data-screen-label="06 Trilingual">
      <div className="container">
        <div className="tri-grid">
          <span className="tri-label">/ TRILINGUAL<br/><span style={{ opacity: 0.5 }}>(NATIVE → FLUENT → CONV.)</span></span>
          {languages.map((lang) => (
            <FadeUp key={lang.name} className="tri-lang">
              <span className="tri-flag">{lang.flag}</span>
              <div className="tri-body">
                <span className="tri-name">{lang.name}</span>
                <div className="tri-dots">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className={`tri-dot ${idx < lang.dots ? "on" : ""}`}></span>
                  ))}
                </div>
                <span className="tri-level">{lang.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Trilingual = Trilingual;
