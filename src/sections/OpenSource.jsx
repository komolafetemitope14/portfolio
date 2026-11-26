
import { motion } from "motion/react";

const contributions = [];

function OpenSource() {
  return (
    <section
      className="section open-source"
      id="open-source"
    >
      <div className="section-content">
        <p className="section-number">
          OPEN SOURCE
        </p>

        <h2 className="section-heading">
          Contributing to the
          <span> open-source community.</span>
        </h2>

        <p
          className="project-description"
          style={{
            maxWidth: "850px",
            marginBottom: "32px",
            lineHeight: 1.8,
          }}
        >
          Documenting my open-source journey through
          engineering, infrastructure automation, software
          development, documentation and collaborative
          problem-solving.
        </p>

        <div className="projects-grid">
          {contributions.length === 0 ? (
            <motion.article
              className="project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="project-category">
                COMMUNITY · ENGINEERING · COLLABORATION
              </p>

              <h3>Open Source Journey</h3>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  gap: "8px",
                  padding: "6px 12px",
                  marginBottom: "16px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 158, 11, 0.35)",
                  background: "rgba(245, 158, 11, 0.08)",
                  color: "#f59e0b",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                Contribution journey in progress
              </div>

              <p className="project-description">
                This section will document my contributions
                to open-source projects, including pull
                requests, bug fixes, documentation
                improvements, testing and infrastructure
                enhancements.
              </p>

              <p className="project-category">
                AREAS OF INTEREST
              </p>

              <div className="project-technologies">
                {[
                  "DevOps",
                  "SRE",
                  "AI Infrastructure",
                  "Kubernetes",
                  "Observability",
                  "Middleware",
                  "Documentation",
                  "Testing",
                ].map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/komolafetemitope14"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub Profile
                <span>↗</span>
              </a>
            </motion.article>
          ) : (
            contributions.map((contribution, index) => (
              <motion.article
                className="project-card"
                key={contribution.url}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                viewport={{ once: true }}
              >
                <p className="project-category">
                  {contribution.repository}
                </p>

                <h3>{contribution.title}</h3>

                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {contribution.type} · {contribution.status}
                  {" · "}
                  {contribution.date}
                </p>

                <p className="project-description">
                  {contribution.description}
                </p>

                {contribution.impact && (
                  <p className="project-description">
                    <strong>Impact: </strong>
                    {contribution.impact}
                  </p>
                )}

                <div className="project-technologies">
                  {contribution.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

                <a
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Contribution
                  <span>↗</span>
                </a>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default OpenSource;

