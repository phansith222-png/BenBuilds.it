/* Contact + Footer v2 */

function Contact() {
  const { channels } = window.BB_DATA;
  return (
    <section id="contact" className="section" data-screen-label="07 Contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-num"><span className="slash">/</span><span className="idx">04</span> &nbsp;CONTACT</span>
          <span className="meta-mono" style={{ alignSelf: "end", justifySelf: "end" }}>
            <b>REPLY</b> WITHIN 24H<br/>
            <span className="dim">OPEN TO FULL-TIME &amp; FREELANCE</span>
          </span>
        </div>

        <div className="contact-stage">
          <div>
            <FadeUp as="h2" className="contact-headline">
              Let&rsquo;s <span className="serif">build</span><br/>
              <span style={{ color: "var(--orange-accent)" }}>something.</span>
            </FadeUp>
            <FadeUp as="p" className="contact-sub" delay={1}>
              Available for full-time roles and freelance projects starting Q2 · 2026. Pick a channel — I reply within 24 hours.
            </FadeUp>
            <FadeUp delay={2}>
              <a href="mailto:phansit.h222@gmail.com" className="btn-orange">
                phansit.h222@gmail.com &nbsp;<IconArrow />
              </a>
            </FadeUp>
          </div>

          <FadeUp className="contact-channels">
            {channels.map((c) => {
              const Icon = channelIcons[c.iconKey];
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="channel"
                >
                  <div className="channel-l">
                    <span className="channel-icon"><Icon width="22" height="22" /></span>
                    <div>
                      <div className="channel-name">{c.label}.</div>
                      <div className="channel-detail">{c.detail}</div>
                    </div>
                  </div>
                  <span className="channel-arrow"><IconArrow /></span>
                </a>
              );
            })}
          </FadeUp>
        </div>

        <footer className="footer-final">
          <span>© 2026 — Phansit H.</span>
          <span className="mid">benbuilds<span style={{ color: "var(--orange-accent)" }}>.</span>it</span>
          <span className="right">BKK · TH &nbsp;·&nbsp; <BangkokClock /></span>
        </footer>
      </div>
    </section>
  );
}

window.Contact = Contact;
