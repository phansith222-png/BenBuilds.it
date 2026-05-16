/* Hero v2 — editorial split with motion-blur portrait */

function Hero() {
  const { hero } = window.BB_DATA;
  return (
    <section className="hero" data-screen-label="01 Hero">
      {/* Top corner metadata */}
      <div className="hero-top">
        <span className="meta-mono">
          <b>BEN PHANSIT</b><br/>
          <span className="dim">PORTFOLIO · MMXXVI</span>
        </span>
        <span className="mid">
          <b>(N°01)</b> &nbsp;THE OPENING<br/>
          <span style={{ opacity: 0.5 }}>FULL-STACK · FREELANCE-READY</span>
        </span>
        <span className="meta-mono right">
          <BangkokClock /><br/>
          <span className="dim">BKK · TH</span>
        </span>
      </div>

      {/* Main stage */}
      <div className="hero-stage">
        <div className="hero-name-block">
          <FadeUp as="span" className="role">{hero.hi} &nbsp;·&nbsp; Ben Phansit</FadeUp>
          <FadeUp as="span" className="hero-line" delay={1}>Full</FadeUp>
          <FadeUp as="span" className="hero-line outline lead-in" delay={2}>Stack<span className="serif">,</span></FadeUp>
          <FadeUp as="span" className="hero-line" delay={3}>Develop<span className="serif">er.</span></FadeUp>
          <FadeUp as="p" className="hero-blurb" delay={4}>
            Trained in payroll-grade precision. Now architecting scalable, opinionated software in TypeScript and Next.js — from Bangkok.
          </FadeUp>
          <FadeUp className="hero-ctas" delay={5}>
            <a href="#contact" className="btn-primary">Get in touch <IconArrow /></a>
            <a href="#works" className="btn-ghost">View Selected Works</a>
          </FadeUp>
        </div>

        <FadeUp className="portrait-frame" delay={3}>
          <div className="blur-bed"></div>
          <div className="sharp"></div>
          <div className="portrait-vignette"></div>
          <span className="portrait-corner-tl"><b>•</b> 01<br/>SUBJECT</span>
          <span className="portrait-corner-tr">2026 / 03<br/><span style={{ opacity: 0.6 }}>BKK CAPTURE</span></span>
          <span className="portrait-corner-bl">PHANSIT H.<br/><span style={{ opacity: 0.6 }}>(BEN)</span></span>
          <span className="portrait-corner-br"><span style={{ opacity: 0.6 }}>ROLE</span><br/><b>FULL · STACK</b></span>
        </FadeUp>
      </div>

      {/* Bottom row */}
      <div className="hero-bottom">
        <span className="left">[ AVAILABLE Q2 · 2026 ]</span>
        <span className="scroll-cue">
          Scroll
          <span className="bar"></span>
        </span>
        <span className="right">Reel · <b>02 works</b> &nbsp;/&nbsp; <b>EN · TH · 中文</b></span>
      </div>
    </section>
  );
}

window.Hero = Hero;
