import { motion } from "motion/react";

const achievements = [
  {
    number: "3×",
    title: "Consecutive Promotions",
    company: "Teltwine Network Limited",
    description:
      "Earned three consecutive promotions within one year through strong performance, rapid growth and increasing technical responsibility.",
  },
  {
    number: "2×",
    title: "Quality Hero Award",
    company: "Teknowledge",
    description:
      "Recognised twice for consistent quality delivery, process adherence and attention to operational standards.",
  },
  {
    number: "01",
    title: "LinkPlanner Adoption",
    company: "Teltwine Network Limited",
    description:
      "Researched and introduced Cambium LinkPlanner, improving network survey forecasting while reducing planning time and cost.",
  },
];

function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="section-content">
        <motion.p
          className="section-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          02 / IMPACT
        </motion.p>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recognition backed
          <span> by results.</span>
        </motion.h2>

        <div className="achievement-grid">
          {achievements.map((achievement, index) => (
            <motion.article
              className="achievement-card"
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <span className="achievement-number">
                {achievement.number}
              </span>

              <h3>{achievement.title}</h3>

              <p className="achievement-company">
                {achievement.company}
              </p>

              <p>{achievement.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
