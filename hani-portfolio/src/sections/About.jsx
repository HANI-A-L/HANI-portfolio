import useLanguage from "../context/useLanguage";

function About() {
  const { t } = useLanguage();

  const details = [
    {
      number: "01",
      title: t.about.details.education.title,
      value: t.about.details.education.value,
    },
    {
      number: "02",
      title: t.about.details.focus.title,
      value: t.about.details.focus.value,
    },
    {
      number: "03",
      title: t.about.details.stack.title,
      value: t.about.details.stack.value,
    },
    {
      number: "04",
      title: t.about.details.goal.title,
      value: t.about.details.goal.value,
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <div>
            <p className="section-eyebrow">{t.about.eyebrow}</p>

            <h2 className="section-title">{t.about.title}</h2>
          </div>

          <p className="about-intro">{t.about.intro}</p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <p>{t.about.description}</p>

            <p>{t.about.descriptionTwo}</p>
          </div>

          <div className="about-details">
            {details.map((item) => (
              <div className="about-detail" key={item.number}>
                <span className="about-detail-number">{item.number}</span>

                <div className="about-detail-content">
                  <span className="about-detail-title">{item.title}</span>

                  <span className="about-detail-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
