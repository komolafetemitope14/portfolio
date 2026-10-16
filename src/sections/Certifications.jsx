const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "LPIC-1",
  "Google Workspace Deployment Services",
  "GitHub Foundations Certification",
];

function Certifications() {
  return (
    <section className="section certifications">
      <div className="section-content">
        <p className="section-number">
          06 / CREDENTIALS
        </p>

        <div className="credentials-grid">
          <div>
            <h2 className="credentials-title">
              Certifications
              <span> & education.</span>
            </h2>
          </div>

          <div>
            <div className="certification-list">
              {certifications.map((certification) => (
                <div
                  className="certification-item"
                  key={certification}
                >
                  <span>✓</span>
                  <p>{certification}</p>
                </div>
              ))}
            </div>

            <div className="education">
              <p className="education-label">
                EDUCATION
              </p>

              <h3>B.Sc. Computer Science</h3>

              <p>
                Adekunle Ajasin University, Ondo State
              </p>

              <span>2011 — 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
