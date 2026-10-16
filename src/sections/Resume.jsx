const RESUME_VIEW_URL =
  "https://drive.google.com/file/d/1VLZ_QDgYp64VKYfmJ4CkWIwgO0XyQen1/view?usp=sharing";

const RESUME_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1VLZ_QDgYp64VKYfmJ4CkWIwgO0XyQen1";

function Resume() {
  return (
    <section className="section resume" id="resume">
      <div className="section-content">
        <p className="section-number">07 / RESUME</p>

        <div className="resume-layout">
          <div>
            <h2 className="resume-title">
              Want the full
              <span> picture?</span>
            </h2>

            <p className="resume-description">
              Download my resume for a detailed overview of my
              infrastructure, cloud, enterprise support and automation
              experience, along with my certifications and technical
              background.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              View Resume
              <span>↗</span>
            </a>

            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Download Resume
              <span>↓</span>
            </a>

            <p className="resume-note">
              PDF · Resume available via Google Drive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
