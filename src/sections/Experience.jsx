import { motion } from "motion/react";

const experience = [
  {
    role: "Enterprise Support Engineer",
    company: "GitHub Inc.",
    period: "Sept 2023 — Present",
    description:
      "Serve as a technical partner for enterprise customers, resolving complex platform issues, supporting strategic adoption and collaborating with engineering and product teams on escalations and product improvements.",
  },
  {
    role: "Linux Systems Administrator",
    company: "Swifta Systems & Services",
    period: "Oct 2022 — Jan 2024",
    description:
      "Administered and optimised Ubuntu, CentOS and RHEL environments for reliability and security while automating operational tasks with Python and Bash.",
  },
  {
    role: "Technical Support Engineer",
    company: "Teknowledge",
    period: "Oct 2020 — Sept 2022",
    description:
      "Delivered enterprise support across Microsoft 365, Google Workspace, networking and Windows, macOS and Linux environments while maintaining strong resolution and customer satisfaction performance.",
  },
  {
    role: "NOC Technician / Field Support Engineer",
    company: "Teltwine Network Limited",
    period: "Aug 2019 — Sept 2020",
    description:
      "Analysed live network incidents, bandwidth and packet-loss issues while configuring MikroTik, Ubiquiti and Cambium infrastructure and maintaining SLA performance.",
  },
  {
    role: "IT Help Desk Support",
    company: "EasyPlay Africa",
    period: "Aug 2018 — Mar 2019",
    description:
      "Provided IT operations and end-user support, managed user accounts, analysed logs and resolved incidents within defined SLA targets.",
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-content">
        <p className="section-number">03 / EXPERIENCE</p>

        <h2 className="section-heading">
          Engineering experience
          <span> across production environments.</span>
        </h2>

        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.article
              className="experience-item"
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
            >
              <div>
                <span className="experience-period">
                  {job.period}
                </span>
              </div>

              <div>
                <h3>{job.role}</h3>

                <p className="experience-company">
                  {job.company}
                </p>

                <p className="experience-description">
                  {job.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
