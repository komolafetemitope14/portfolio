import "./Blog.css";

const articles = [
  {
    title:
      "Social Engineering for AI: When the Security Guard Becomes the Vulnerability",
    description:
      "Exploring how social engineering and prompt injection can exploit AI agents, and why strong security boundaries matter when building trustworthy AI systems.",
    category: "AI Security",
    platform: "Medium",
    url:
      "https://medium.com/@komolafetemitope14/social-engineering-for-ai-when-the-security-guard-becomes-the-vulnerability-54a4e2cf0a41",
  },
];

function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-heading">
          <span className="blog-eyebrow">INSIGHTS & IDEAS</span>
          <h2>Technical Writing</h2>
          <p>
            Sharing what I learn about AI engineering, security,
            infrastructure, and building reliable systems.
          </p>
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
