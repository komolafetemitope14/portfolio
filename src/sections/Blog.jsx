
import "./Blog.css";

const topics = [
  "Technology",
  "Artificial Intelligence",
  "Engineering",
  "Cybersecurity",
  "Society",
  "Innovation",
  "Career & Leadership",
  "General Perspectives",
];

const articles = [
  {
    title:
      "Social Engineering for AI: When the Security Guard Becomes the Vulnerability",
    description:
      "Exploring how social engineering and prompt injection can exploit AI agents, and why strong security boundaries matter when building trustworthy AI systems.",
    category: "AI Security",
    platform: "Medium",
    discussion:
      "Can AI agents ever be fully trusted to make security-sensitive decisions without human oversight?",
    url:
      "https://medium.com/@komolafetemitope14/social-engineering-for-ai-when-the-security-guard-becomes-the-vulnerability-54a4e2cf0a41",
  },
];

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-heading">
          <span className="blog-eyebrow">
            INSIGHTS · IDEAS · CONVERSATIONS
          </span>

          <h2>Blog Posts</h2>

          <p>
            A space for exploring diverse topics, sharing
            knowledge, challenging perspectives and
            encouraging meaningful conversations. From
            technology and engineering to society,
            innovation, career development and beyond,
            let's learn, debate and grow together.
          </p>

          <div
            className="project-technologies"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "24px",
              marginBottom: "24px",
            }}
          >
            {topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.url}>
              <div className="blog-card-top">
                <span className="blog-category">
                  {article.category}
                </span>

                <span className="blog-platform">
                  {article.platform}
                </span>
              </div>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              {article.discussion && (
                <div
                  style={{
                    borderTop: "1px solid #293544",
                    paddingTop: "16px",
                    marginTop: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      color: "#59d7ff",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    DISCUSSION QUESTION
                  </span>

                  <p
                    style={{
                      marginTop: "10px",
                      lineHeight: 1.7,
                    }}
                  >
                    {article.discussion}
                  </p>
                </div>
              )}

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                Read Article <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

