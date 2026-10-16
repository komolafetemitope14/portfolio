import { motion } from "motion/react";

function About() {
  return (
    <section className="section about" id="about">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="section-number">01 / ABOUT</p>

        <div className="about-grid">
          <h2>
            Infrastructure that
            <span> works when it matters.</span>
          </h2>

          <div className="about-text">
            <p>
              I'm an Infrastructure and Enterprise Support Engineer
              with 6+ years of experience working across production
              systems, enterprise support, networking and cloud
              infrastructure.
            </p>

            <p>
              My experience spans Linux, AWS, Docker, Terraform,
              Python, MySQL, GitHub and observability technologies
              including Splunk, Sentry and Azure Data Explorer.
            </p>

            <p>
              I'm currently expanding that foundation into AI-assisted
              infrastructure and development workflows through
              hands-on experimentation with technologies including
              Ollama and local AI models.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;