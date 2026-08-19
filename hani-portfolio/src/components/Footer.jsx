function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          Hani<span>.</span>
        </div>

        <p className="footer-copyright">
          © {currentYear} Hani. All rights reserved.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your@email.com">Email</a>
        </div>

        <a href="#home" className="footer-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
