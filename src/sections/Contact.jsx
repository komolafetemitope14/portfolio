function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-content">
        <p className="section-number">
          07 / CONTACT
        </p>

        <div className="contact-layout">
          <div>
            <h2>
              Let's build reliable
              <span> infrastructure.</span>
            </h2>

            <p className="contact-description">
              I'm interested in enterprise infrastructure,
              cloud engineering, automation and opportunities
              exploring the integration of AI into infrastructure
              and software development workflows.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:komolafetemitope14@gmail.com"
              className="primary-button"
            >
              Send Me an Email
              <span>→</span>
            </a>

            <a
              href="https://github.com/komolafetemitope14"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub Profile
              <span>↗</span>
            </a>

            <p className="contact-location">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Komolafe Temitope Olumide
          </p>

          <a href="#home">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
