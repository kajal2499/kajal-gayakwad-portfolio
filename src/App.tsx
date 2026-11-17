import { useState } from "react";

const skills = [
  { title: "Frontend", items: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: "Libraries & State", items: ["React Hooks", "Redux", "Context API", "RxJS"] },
  { title: "UI & Styling", items: ["Tailwind CSS", "Responsive Design", "Reusable Components"] },
  { title: "Development", items: ["REST API Integration", "Git", "Agile / Scrum", "Debugging"] },
];

const projects = [
  {
    number: "01",
    name: "Wedding Invitation Management Platform",
    type: "Professional project",
    stack: ["React.js", "TypeScript", "REST APIs"],
    description: "A responsive platform for creating and customizing digital and printed wedding invitations, with guest and RSVP management experiences.",
    details: ["Customizable invitation templates", "Guest and RSVP management API integration", "Search, filtering and responsive UI"],
    accent: "violet",
    visual: "WEDDING / STUDIO",
  },
  {
    number: "02",
    name: "Campaign Management Platform",
    type: "Professional project",
    stack: ["JavaScript", "HTML", "CSS", "REST APIs"],
    description: "A campaign workflow interface that helps users create, schedule and track marketing campaigns.",
    details: ["Campaign creation and tracking screens", "Scheduling and user segmentation", "Reusable responsive UI components"],
    accent: "blue",
    visual: "CAMPAIGN / FLOW",
  },
  {
    number: "03",
    name: "Ogmen Robotics — Pet Care App",
    type: "Professional project",
    stack: ["Flutter", "Dart", "API Integration"],
    description: "Mobile application UI work for pet-care workflows, including scheduling and interactive form controls.",
    details: ["OTP and navigation flows", "Scheduling and time-picker UI", "Sliders, switches and API integration"],
    accent: "mint",
    visual: "PETCARE / MOBILE",
  },
  {
    number: "04",
    name: "AI Analytics Dashboard",
    type: "Personal project",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description: "A modern dashboard concept combining analytics, a compact AI chat experience and a clean dark interface.",
    details: ["Analytics cards and chart area", "Mini AI chat interface", "Dark mode and protected routes"],
    accent: "amber",
    visual: "AI / INSIGHTS",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Kajal Gayakwad home">
          <span className="brand-mark">K</span><span>kajal<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <p className="intro-label">Hello, I'm</p>
            <h1>Kajal<br /><span>Gayakwad.</span></h1>
            <h2>Frontend Developer crafting thoughtful digital experiences.</h2>
            <p className="hero-description">
              I build responsive, accessible and user-friendly web interfaces with a focus on clean code,
              reusable components and great user experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-meta">
              <span><strong>4</strong> years experience</span>
              <i />
              <span>React · Angular · TypeScript</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative developer profile graphic">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="card-top"><span>PROFILE / 2026</span><span className="tiny-live">● ONLINE</span></div>
              <div className="avatar-monogram">KG</div>
              <div className="hero-card-name">Kajal Gayakwad</div>
              <div className="hero-card-role">Frontend Developer</div>
              <div className="card-divider" />
              <div className="mini-stats">
                <div><strong>04<span>+</span></strong><small>Years</small></div>
                <div><strong>2.5</strong><small>React years</small></div>
                <div><strong>1.5</strong><small>Angular years</small></div>
              </div>
              <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
              <div className="floating-chip chip-ts"><span>TS</span> TypeScript</div>
              <div className="floating-chip chip-code"><span>⌘</span> Clean code</div>
            </div>
            <div className="hero-glow" />
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Turning ideas into<br /><span>useful experiences.</span></h2>
          </div>
          <div className="about-content">
            <p className="lead">I'm a Frontend Developer with <em>4 years of experience</em> building modern web applications and intuitive user interfaces.</p>
            <p>My experience includes 2.5 years working with React.js and 1.5 years with Angular. I enjoy translating product requirements into clean, maintainable interfaces, integrating APIs and collaborating with teams to deliver reliable features.</p>
            <div className="about-facts">
              <div><span className="fact-icon">⌘</span><strong>Component-driven</strong><small>Reusable, maintainable UI</small></div>
              <div><span className="fact-icon">◈</span><strong>User-focused</strong><small>Responsive and intuitive design</small></div>
              <div><span className="fact-icon">↗</span><strong>Team-minded</strong><small>Agile collaboration and delivery</small></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>Skills I bring<br /><span>to the table.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects with<br /><span>purpose.</span></h2></div>
            <p className="heading-note">A selection of professional and personal work across web and mobile experiences.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent}`} key={project.name}>
                <div className="project-visual">
                  <div className="visual-top"><span>CASE STUDY / {project.number}</span><span>↗</span></div>
                  <div className="visual-window">
                    <div className="window-bar"><i /><i /><i /><span>{project.visual}</span></div>
                    <div className="window-content">
                      <div className="window-sidebar"><b /><b /><b /><b /></div>
                      <div className="window-main">
                        <div className="window-title-line" /><div className="window-sub-line" />
                        <div className="window-panels"><i /><i /><i /></div>
                        <div className="window-chart"><span /><span /><span /><span /><span /><span /><span /></div>
                      </div>
                    </div>
                  </div>
                  <div className="visual-index">{project.number}</div>
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <button className="details-button" onClick={() => setActiveProject(activeProject === index ? null : index)}>
                    {activeProject === index ? "Hide details" : "View highlights"} <span>{activeProject === index ? "−" : "+"}</span>
                  </button>
                  {activeProject === index && <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Project descriptions are summarized for portfolio presentation. Add approved screenshots and public demo/repository links before sharing with recruiters.</p>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>Where I've<br /><span>grown.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">JUL 2022 — PRESENT</div>
              <div className="timeline-main">
                <div className="timeline-title"><div><h3>Software Engineer</h3><p>WebContentor India Pvt. Ltd.</p></div><span className="current-pill">CURRENT</span></div>
                <p>Contributing to frontend development across web application projects, building responsive interfaces, reusable components and API-connected user experiences.</p>
                <div className="timeline-tags"><span>React.js</span><span>Angular</span><span>TypeScript</span><span>JavaScript</span><span>REST APIs</span></div>
              </div>
            </article>
          </div>
          <div className="experience-summary">
            <div><strong>2.5 years</strong><span>React.js experience</span></div>
            <div><strong>1.5 years</strong><span>Angular experience</span></div>
            <div><strong>4 years</strong><span>Frontend development</span></div>
          </div>
        </section>

        <section className="education-strip section-wrap">
          <div><p className="eyebrow">EDUCATION</p><h3>B.Tech — Computer Science</h3><p>Completed in 2022</p></div>
          <div className="education-symbol">✳</div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">05 / LET'S CONNECT</p>
          <h2>Have a project<br />in <span>mind?</span></h2>
          <p className="contact-copy">I'm open to discussing frontend opportunities, interesting products and meaningful collaborations.</p>
          <a className="button button-primary contact-button" href="mailto:YOUR_EMAIL@example.com?subject=Let's%20connect%20-%20Frontend%20Developer">Email me <Arrow /></a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="#home">Back to top ↑</a>
          </div>
          <div className="contact-footer"><span>© 2026 Kajal Gayakwad</span><span>Designed & built with care.</span></div>
        </section>
      </main>
    </div>
  );
}
