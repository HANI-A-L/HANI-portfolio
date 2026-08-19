import useLanguage from "../Context/useLanguage";
function Skills() {
  const { t } = useLanguage();

  const frontendSkills = [
    {
      name: t.skills.items.html,
      level: 90,
    },
    {
      name: t.skills.items.css,
      level: 85,
    },
    {
      name: t.skills.items.javascript,
      level: 80,
    },
    {
      name: t.skills.items.react,
      level: 75,
    },
  ];

  const tools = [
    t.skills.items.git,
    t.skills.items.github,
    t.skills.items.vscode,
    t.skills.items.responsive,
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Heading */}

        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-eyebrow">{t.skills.eyebrow}</p>

            <h2 className="section-title">{t.skills.title}</h2>

            <p className="skills-description">{t.skills.description}</p>
          </div>
        </div>

        {/* Skills Grid */}

        <div className="skills-grid">
          {/* Frontend */}

          <div className="skills-card">
            <div className="skills-card-header">
              <span className="skills-card-number">01</span>

              <h3>{t.skills.categories.frontend}</h3>
            </div>

            <div className="skill-list">
              {frontendSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <span>{skill.name}</span>

                    <span>{skill.level}%</span>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}

          <div className="skills-card">
            <div className="skills-card-header">
              <span className="skills-card-number">02</span>

              <h3>{t.skills.categories.tools}</h3>
            </div>

            <div className="tools-grid">
              {tools.map((tool) => (
                <div className="tool-item" key={tool}>
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}

          <div className="skills-card learning-card">
            <div className="skills-card-header">
              <span className="skills-card-number">03</span>

              <h3>{t.skills.categories.learning}</h3>
            </div>

            <div className="learning-content">
              <span className="learning-badge">{t.skills.learningBadge}</span>

              <h4>{t.skills.items.advancedReact}</h4>

              <p>{t.skills.learningDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
