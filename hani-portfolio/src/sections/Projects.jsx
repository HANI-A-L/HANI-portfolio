import useLanguage from "../Context/useLanguage";

function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      number: "01",

      title: "E-Commerce Store",

      description:
        "A complete e-commerce application built with React, featuring product management, cart, variants, inventory and an admin panel.",

      technologies: ["React", "JavaScript", "React Router", "CSS"],

      demo: "http://localhost:5173/",
      admin: "http://localhost:5173/admin",
      github: "#",
    },

    {
      number: "02",

      title: "Personal Portfolio",

      description:
        "A modern responsive portfolio website designed to showcase my skills, projects and experience.",

      technologies: ["React", "Vite", "CSS"],

      demo: "#",
      github: "#",
    },

    {
      number: "03",

      title: "JavaScript Projects",

      description:
        "A collection of practical JavaScript projects focused on DOM manipulation, APIs, state management and modern JavaScript.",

      technologies: ["JavaScript", "HTML", "CSS"],

      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* ================================
            PROJECTS HEADER
        ================================= */}

        <div className="projects-header">
          <div>
            <p className="section-eyebrow">{t.projects.eyebrow}</p>

            <h2 className="section-title">{t.projects.title}</h2>
          </div>

          <p className="projects-description">{t.projects.description}</p>
        </div>

        {/* ================================
            PROJECTS LIST
        ================================= */}

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.number}>
              {/* PROJECT NUMBER */}

              <div className="project-number">{project.number}</div>

              {/* PROJECT CONTENT */}

              <div className="project-main">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* TECHNOLOGIES */}

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="project-tech">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECT LINKS */}

              <div className="project-links">
                {/* LIVE STORE */}

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.projects.demo}

                    <span>↗</span>
                  </a>
                )}

                {/* ADMIN PANEL */}

                {project.admin && (
                  <a
                    href={project.admin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.projects.admin}

                    <span>↗</span>
                  </a>
                )}

                {/* GITHUB */}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.projects.github}

                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
