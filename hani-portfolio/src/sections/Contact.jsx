import { useState } from "react";
import useLanguage from "../Context/useLanguage";

function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    const subject = `Portfolio Contact - ${name}`;

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    window.location.href = `mailto:ahanieh347@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

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

              <a href="mailto:ahanieh347@gmail.com" className="contact-link">
                <span className="contact-link-label">{t.contact.email}</span>

                <span className="contact-link-value">ahanieh347@gmail.com</span>
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{t.contact.github}</span>

                <span className="contact-link-value">GitHub ↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT - CONTACT FORM */}

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>

              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.form.name}
                required
              />
            </div>

            {/* EMAIL */}

            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>

              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.form.email}
                required
              />
            </div>

            {/* MESSAGE */}

            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>

              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.form.message}
                required
              ></textarea>
            </div>

            {/* SUBMIT */}

            <button type="submit" className="contact-submit">
              {t.contact.form.submit}

              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
