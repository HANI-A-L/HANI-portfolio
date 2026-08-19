import useLanguage from "../Context/useLanguage";

function Experience() {
  const { t } = useLanguage();

  const journey = [
    {
      id: 1,
      date: t.experience.items.university.date,
      title: t.experience.items.university.title,
      company: t.experience.items.university.company,
      description: t.experience.items.university.description,
      type: "education",
    },

    {
      id: 2,
      date: t.experience.items.frontend.date,
      title: t.experience.items.frontend.title,
      company: t.experience.items.frontend.company,
      description: t.experience.items.frontend.description,
      type: "experience",
    },

    {
      id: 3,
      date: t.experience.items.ecommerce.date,
      title: t.experience.items.ecommerce.title,
      company: t.experience.items.ecommerce.company,
      description: t.experience.items.ecommerce.description,
      type: "experience",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Heading */}

        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-eyebrow">{t.experience.eyebrow}</p>

            <h2 className="section-title">{t.experience.title}</h2>

            <p className="experience-description">{t.experience.description}</p>
          </div>
        </div>

        {/* Timeline */}

        <div className="timeline">
          {journey.map((item) => (
            <article className="timeline-item" key={item.id}>
              {/* Date */}

              <div className="timeline-date">{item.date}</div>

              {/* Line */}

              <div className="timeline-marker">
                <span></span>
              </div>

              {/* Content */}

              <div className="timeline-content">
                <span className="timeline-type">
                  {item.type === "education"
                    ? t.experience.education
                    : t.experience.experienceTitle}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
