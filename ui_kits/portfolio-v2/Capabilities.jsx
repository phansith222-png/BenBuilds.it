/* Capabilities — tech stack list + learning path (replaces Roadmap) */

const SI_SLUGS = {
  "JavaScript": "javascript", "TypeScript": "typescript",
  "React": "react", "Next.js": "nextdotjs", "Tailwind CSS": "tailwindcss",
  "Vite": "vite", "Framer Motion": "framer", "DaisyUI": "daisyui",
  "Node.js": "nodedotjs", "Express.js": "express",
  "Socket.io": "socketdotio", "JWT": "jsonwebtokens", "Passport": "passport",
  "MySQL": "mysql", "PostgreSQL": "postgresql", "Prisma": "prisma", "Supabase": "supabase",
  "Git": "git", "Docker": "docker", "Figma": "figma", "Gemini API": "googlegemini",
};

function CapItem({ skill }) {
  const slug = SI_SLUGS[skill];
  return (
    <a className="cap-item" href="#works" onClick={(e) => e.preventDefault()}>
      {slug ? (
        <img src={`https://cdn.simpleicons.org/${slug}/FFFFFF`} alt="" />
      ) : (
        <span className="fallback">◇</span>
      )}
      <span>{skill}</span>
    </a>
  );
}

const STATUS_LABEL = { mastered: "Mastered", building: "In Progress", next: "Coming Next" };

function Capabilities() {
  const { techStack, learningPath } = window.BB_DATA;
  return (
    <section id="capabilities" className="section" data-screen-label="05 Capabilities">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-num"><span className="slash">/</span><span className="idx">03</span> &nbsp;CAPABILITIES</span>
          <h2 className="section-title upper">
            Every tool <span className="serif">in</span> use<span className="accent">.</span>
          </h2>
        </div>

        <FadeUp className="cap-grid">
          {techStack.map((cat) => (
            <div key={cat.label}>
              <h4 className="cap-cat-label">/ {cat.label}</h4>
              <div className="cap-list">
                {cat.skills.map((s) => <CapItem key={s} skill={s} />)}
              </div>
            </div>
          ))}
        </FadeUp>

        <div className="path-wrap">
          <FadeUp className="path-label">
            <span className="accent">→</span> LEARNING<br/>PATH<br/>2024 — 2027
          </FadeUp>
          <div className="path">
            {learningPath.map((phase, i) => (
              <FadeUp key={phase.index} className="phase" delay={Math.min(i + 1, 3)}>
                <div className="phase-top">
                  <span className="phase-idx">{phase.index}</span>
                  <span className={`phase-status ${phase.status}`}>{STATUS_LABEL[phase.status]}</span>
                </div>
                <h4 className="phase-title">{phase.title}</h4>
                <p className="phase-desc">{phase.description}</p>
                <div className="phase-skills">
                  {phase.skills.map((s) => (
                    <span key={s} className={`skill ${phase.status}`}>{s}</span>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Capabilities = Capabilities;
