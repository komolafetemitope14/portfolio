import { motion } from "motion/react";

const projects = [
  {
    title: "Full-Stack Todo App",
    category: "QA · CI/CD · FULL STACK",
    description:
      "Full-stack application with automated Cypress UI testing and Postman/Newman API tests integrated into a GitHub Actions CI/CD pipeline.",
    technologies: [
      "React",
      "Node.js",
      "Cypress",
      "GitHub Actions",
    ],
    github:
      "https://github.com/komolafetemitope14/Todo-app-testing-suite",
  },
  {
    title: "AWS Event Notification System",
    category: "AWS · SERVERLESS · AUTOMATION",
    description:
      "Event-driven AWS notification system designed around serverless architecture and messaging workflows for real-time operational alerts.",
    technologies: [
      "AWS",
      "Serverless",
      "Event Driven",
    ],
    github:
      "https://github.com/komolafetemitope14/Aws-event-notification-system",
  },
  {
    title: "Dockerized WordPress",
    category: "DOCKER · INFRASTRUCTURE",
    description:
      "Containerised WordPress deployment demonstrating service isolation, persistent storage, container networking and reproducible infrastructure.",
    technologies: [
      "Docker",
      "WordPress",
      "Networking",
    ],
    github:
      "https://github.com/komolafetemitope14/docker-wordpress",
  },
  {
    title: "React Dictionary",
    category: "REACT · WEB DEVELOPMENT",
    description:
      "Interactive React dictionary application featuring dynamic search, API-driven results and a responsive user interface.",
    technologies: [
      "React",
      "JavaScript",
      "API",
    ],
    github:
      "https://github.com/komolafetemitope14/React-dictionary-1",
  },
  {
    title: "Note App",
    category: "APPLICATION DEVELOPMENT",
    description:
      "Note management application demonstrating practical application development and a user-focused interface for organising notes.",
    technologies: [
      "Application Development",
    ],
    github:
      "https://github.com/komolafetemitope14/Note-App",
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-content">
        <p className="section-number">04 / PROJECTS</p>

        <h2 className="section-heading">
          Selected engineering
          <span> projects.</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
            >
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
                <span>↗</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
