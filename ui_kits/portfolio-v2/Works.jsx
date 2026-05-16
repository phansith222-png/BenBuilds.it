/* Works — type-first list with cursor-follows image preview */

function Work({ project, index, onOpen }) {
  const idx = String(index + 1).padStart(2, "0");
  const total = String(window.BB_DATA.projects.length).padStart(2, "0");
  return (
    <li
      className="work-row fade-up"
      data-cover={project.coverImage}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
    >
      <span className="work-num">{idx} / {total}</span>
      <div className="work-content">
        <span className="work-cat">{project.category}</span>
        <h3 className="work-title">{project.title}</h3>
      </div>
      <div className="work-aside">
        <p className="work-sub">{project.subtitle}.</p>
        <div className="work-tech-row">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.tech.length > 4 && <span className="tag">+{project.tech.length - 4}</span>}
        </div>
        <span className="work-role">{project.role}</span>
      </div>
      <span className="work-arrow">↗</span>
      {/* Touch fallback */}
      <div className="work-thumb"><img src={project.coverImage} alt={project.title} /></div>
    </li>
  );
}

function Works({ onOpen }) {
  const { projects } = window.BB_DATA;
  return (
    <section id="works" className="section" data-screen-label="04 Works">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-num"><span className="slash">/</span><span className="idx">02</span> &nbsp;SELECTED WORKS</span>
          <h2 className="section-title upper">
            Selected <span className="serif">works,</span><br/>
            built with <span className="accent">intent.</span>
          </h2>
        </div>
        <ol className="works-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {projects.map((p, i) => (
            <Work key={p.slug} project={p} index={i} onOpen={onOpen} />
          ))}
        </ol>
        <p className="meta-mono" style={{ marginTop: 56, color: "rgba(255,255,255,0.4)" }}>
          <b>HOVER</b> &nbsp;TO PREVIEW &nbsp;·&nbsp; <b>CLICK</b> &nbsp;TO OPEN CASE
        </p>
      </div>
    </section>
  );
}

function WorkDetail({ project, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="overlay-back" onClick={onClose}>← Back to portfolio</button>
        <p className="overlay-eyebrow">{project.subtitle}</p>
        <h1 className="overlay-title">{project.title}</h1>
        <span className="overlay-role">◈ {project.role}</span>
        <div className="overlay-cover">
          <img src={project.coverImage} alt={project.title} />
        </div>
        <div className="overlay-grid">
          <div>
            <p className="overlay-section-eyebrow">/ The Problem</p>
            <p className="overlay-text">{project.problem}</p>
          </div>
          <div>
            <p className="overlay-section-eyebrow">/ The Solution</p>
            <p className="overlay-text">{project.solution}</p>
          </div>
        </div>
        <div>
          <p className="overlay-section-eyebrow">/ Key Features</p>
          <ul className="overlay-features">
            {project.features.map((f, i) => (
              <li key={i}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="overlay-actions">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">GitHub <IconArrow /></a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Live Demo <IconArrow /></a>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Works, WorkDetail });
