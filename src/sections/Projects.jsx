import { motion } from "motion/react";

const projects = [
  {
    title: "AI Cluster Reliability Lab",
    category: "AI INFRASTRUCTURE · SRE · HPC · OBSERVABILITY",
    description:
      "Hands-on AI infrastructure reliability engineering lab covering Kubernetes cluster troubleshooting, Slurm/HPC workload scheduling, Prometheus and Grafana monitoring, Python and Bash diagnostic automation, and simulated incident response across 15 technical labs.",
    technologies: [
      "Kubernetes",
      "Slurm",
      "Prometheus",
      "Grafana",
      "Python",
      "Bash",
      "Linux",
    ],
    image:
      "projects/ai-cluster-reliability-lab/infrastructure-architecture.png",
    github:
      "https://github.com/komolafetemitope14/ai-cluster-reliability-lab",
  },
  {
    title: "IncidentFlow",
    category: "INFRASTRUCTURE · SRE · DEVOPS · OBSERVABILITY",
    description:
      "Containerized incident management application demonstrating infrastructure reliability, REST API development, PostgreSQL persistence, automated testing, continuous integration and application observability. Validated with 18 passing automated tests and a four-service Docker Compose environment.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "pytest",
    ],
    image:
      "projects/incidentflow/incidentflow-architecture.png",
    github:
      "https://github.com/komolafetemitope14/incidentflow",
  },
  {
    title: "OpsPilot MCP",
    category: "MCP · INFRASTRUCTURE · AI · SECURITY",
    description:
      "Secure Model Context Protocol server for AI-assisted infrastructure observability and diagnostics across PostgreSQL, Docker and Kubernetes, with deterministic diagnostics, least-privilege access, secret redaction and audit logging.",
    technologies: [
      "Python",
      "MCP",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    github:
      "https://github.com/komolafetemitope14/opspilot-mcp",
  },
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
  {
    title: "Universal Mail AI",
    category: "AI · FULL STACK · EMAIL AUTOMATION",
    description:
      "AI-first email client designed around a unified inbox, extensible email provider adapters, intelligent email summarization, smart reply generation and inbox prioritization using a modular application architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Prisma",
      "Tailwind CSS",
      "Anthropic AI",
      "Vercel",
    ],
    github:
      "https://github.com/komolafetemitope14/Universal-mail-ai",
  },
  {
    title: "E-Bookstore",
    category: "FULL STACK · E-COMMERCE · CI/CD",
    description:
      "Responsive e-commerce application featuring digital and physical product editions, customer authentication, PostgreSQL database integration, row-level security and automated CI/CD deployment. Currently undergoing user acceptance testing (UAT).",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "GitHub Pages",
    ],
    website:
      "https://komolafetemitope14.github.io/e-bookstore/",
    websiteLabel: "View Live Website",
    github:
      "https://github.com/komolafetemitope14/e-bookstore",
  },
];

function Projects() {
  return (
    <section
      className="section projects"
      id="projects"
    >
      <div className="section-content">
        <p className="section-number">
          04 / PROJECTS
        </p>

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

              {project.image && (
                <a
                  href={`${import.meta.env.BASE_URL}${project.image}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} system architecture`}
                    className="project-image"
                    loading="lazy"
                  />
                </a>
              )}

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

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.websiteLabel || "View Website"}
                    <span>↗</span>
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
