const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Linux",
      "Ubuntu",
      "CentOS",
      "RHEL",
      "Windows Server",
      "Terraform",
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      "Docker",
      "GitHub Actions",
      "Python",
      "Bash",
      "Cron",
      "Git",
      "CI/CD",
    ],
  },
  {
    title: "Observability & Data",
    skills: [
      "Splunk",
      "Sentry",
      "Azure Data Explorer",
      "MySQL",
      "Log Analytics",
      "Monitoring",
    ],
  },
  {
    title: "Enterprise Engineering",
    skills: [
      "Enterprise Support",
      "Technical Documentation",
      "Incident Resolution",
      "Root Cause Analysis",
      "Stakeholder Alignment",
      "Team Mentoring",
      "Google Workspace",
    ],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-content">
        <p className="section-number">05 / EXPERTISE</p>

        <h2 className="section-heading">
          Technologies built around
          <span> reliability and scale.</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
