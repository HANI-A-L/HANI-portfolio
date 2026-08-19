import useLanguage from "../context/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-eyebrow">{t.hero.greeting}</p>

          <h1 className="hero-title">
            {t.hero.title}
            <span>.</span>
          </h1>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              {t.hero.projects}
            </a>

            <a href="#contact" className="secondary-button">
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-line">
              <span className="code-purple">const</span>{" "}
              <span className="code-white">developer</span>{" "}
              <span className="code-purple">=</span>
            </div>

            <div className="code-line indent">
              <span className="code-purple">{"{"}</span>
            </div>

            <div className="code-line indent">
              <span className="code-blue">name:</span>{" "}
              <span className="code-green">"Hani"</span>
            </div>

            <div className="code-line indent">
              <span className="code-blue">role:</span>{" "}
              <span className="code-green">"Frontend Developer"</span>
            </div>

            <div className="code-line indent">
              <span className="code-blue">stack:</span>{" "}
              <span className="code-green">"React"</span>
            </div>

            <div className="code-line indent">
              <span className="code-purple">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
