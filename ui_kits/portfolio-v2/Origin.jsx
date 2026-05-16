/* Origin — career story (replaces old QuoteBanner + About) */

function Origin() {
  const { quote, about } = window.BB_DATA;
  return (
    <section id="origin" className="section" data-screen-label="03 Origin">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-num"><span className="slash">/</span><span className="idx">01</span> &nbsp;THE ORIGIN</span>
          <span className="meta-mono" style={{ alignSelf: "end", justifySelf: "end" }}>
            <b>EST.</b> 2020 — PAYROLL OUTSOURCING<br/>
            <b>PIVOT</b> 2023 — JAVASCRIPT
          </span>
        </div>

        <div className="origin-grid">
          <FadeUp className="origin-portrait">
            <img src="../../assets/photos/portrait-about.jpg" alt="About Ben" />
          </FadeUp>
          <div>
            <FadeUp as="h2" className="origin-headline">
              From <span className="serif">payroll logic</span> to architecting <span className="serif">software.</span>
            </FadeUp>
            <FadeUp as="p" className="origin-text" delay={1}>
              {about.body}
            </FadeUp>
            <FadeUp as="p" className="origin-text" delay={2} style={{ fontStyle: "italic", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.45 }}>
              &ldquo;{quote.text}&rdquo; <span style={{ opacity: 0.5, fontStyle: "normal", fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {quote.meta}</span>
            </FadeUp>

            <FadeUp className="origin-meta" delay={3}>
              <div className="kv"><span className="k">Now based</span><span className="v">Bangkok, Thailand</span></div>
              <div className="kv"><span className="k">Working in</span><span className="v">TypeScript · Next.js · Node</span></div>
              <div className="kv"><span className="k">Previous</span><span className="v">Payroll Outsourcing, 3 yrs</span></div>
              <div className="kv"><span className="k">Languages</span><span className="v">🇹🇭 🇺🇸 🇨🇳</span></div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Origin = Origin;
