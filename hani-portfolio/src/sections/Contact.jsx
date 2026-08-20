import useLanguage from "../Context/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* LEFT - CONTACT INFORMATION */}

          <div className="contact-content">
            <p className="section-eyebrow">{t.contact.eyebrow}</p>

            <h2 className="contact-title">{t.contact.title}</h2>

            <p className="contact-description">{t.contact.description}</p>

            <div className="contact-links">
              {/* EMAIL */}

              <a href="mailto:your@email.com" className="contact-link">
                <span className="contact-link-label">{t.contact.email}</span>

                <span className="contact-link-value">ahanieh347@email.com</span>
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/HANI-A-L"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{t.contact.github}</span>

                <span className="contact-link-value">GitHub ↗</span>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{t.contact.linkedin}</span>

                <span className="contact-link-value">LinkedIn ↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT - CONTACT INFO */}

          <div className="contact-side">
            <div className="contact-side-content">
              <span className="contact-side-number">01</span>

              <p>{t.contact.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
