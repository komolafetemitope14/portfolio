function Hero() {
  const technologies = [
    "AWS",
    "Linux",
    "Docker",
    "Terraform",
    "Python",
    "GitHub Actions",
    "Splunk",
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">
            INFRASTRUCTURE · CLOUD · AUTOMATION · AI
          </p>

          <h1>
            Komolafe
            <br />
            <span>Temitope Olumide.</span>
          </h1>

          <h2>
            Infrastructure & Enterprise Support Engineer
          </h2>

          <p className="hero-description">
            I build, support and automate reliable production
            infrastructure across cloud, hybrid and on-premises
            environments — combining enterprise engineering,
            cloud infrastructure, automation and emerging AI
            technologies.
          </p>

          <p className="hero-location">
            Lagos, Nigeria
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work
              <span>→</span>
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div className="hero-portrait-wrapper">
          <div className="portrait-decoration"></div>

          <img
            src={`${import.meta.env.BASE_URL}Portrait.png`}
            alt="Komolafe Temitope Olumide"
            className="hero-portrait"
          />

          <div className="portrait-info">
            <span className="status-dot"></span>

            <div>
              <small>CURRENT FOCUS</small>
              <p>AI-Assisted Infrastructure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
