"use client";

const differentiators = [
  "Root Cause-Based Treatment Approach",
  "Combination of Medical Expertise + Advanced Technology",
  "Evidence-Based Treatment Protocols",
  "Personalized Care for Every Patient",
  "Safe, Effective & Minimally Invasive Treatments",
];


const missions = [
  "Restore Confidence",
  "Enhance Appearance",
  "Achieve Healthy Hair, Skin & Smile",
];

export default function HairOGraftOverview() {
  return (
    <section className="hog-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .hog-section {
          padding: 76px 24px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .hog-wrap {
          width: min(100%, 1160px);
          margin: 0 auto;
        }

        .hog-hero {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.52fr);
          gap: 34px;
          align-items: end;
          padding-bottom: 34px;
          border-bottom: 1px solid rgba(51,78,155,0.14);
        }

        .hog-title {
          margin: 0;
          max-width: 820px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(36px, 4.7vw, 62px);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: 0;
        }

        .hog-title em {
          color: #EF3340;
          font-style: italic;
        }

        .hog-intro {
          display: grid;
          gap: 14px;
          margin-top: 24px;
          max-width: 760px;
        }

        .hog-copy {
          margin: 0;
          color: rgba(51,65,85,0.74);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.82;
        }

        .hog-mission {
          border-left: 3px solid #EF3340;
          padding: 24px 0 24px 24px;
        }

        .hog-label {
          margin: 0 0 14px;
          color: #EF3340;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hog-mission-title {
          margin: 0 0 12px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 900;
          line-height: 1.08;
        }

        .hog-mission-lead {
          margin: 0 0 16px;
          color: rgba(51,65,85,0.74);
          font-size: 15px;
          line-height: 1.65;
        }

        .hog-mission-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .hog-mission-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.35;
        }

        .hog-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.38fr);
          gap: 20px;
          margin-top: 28px;
        }

        .hog-different {
          padding: 30px;
          border: 1px solid rgba(51,78,155,0.14);
          background: rgba(255,255,255,0.9);
        }

        .hog-section-title {
          margin: 0 0 22px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 30px;
          font-weight: 900;
          line-height: 1.12;
        }

        .hog-diff-list {
          display: grid;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(51,78,155,0.12);
        }

        .hog-diff-list li {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 14px;
          align-items: center;
          padding: 17px 0;
          border-bottom: 1px solid rgba(51,78,155,0.12);
          color: rgba(17,24,39,0.78);
          font-size: 16px;
          font-weight: 700;
          line-height: 1.42;
        }

        .hog-check {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #EF3340;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
        }

        .hog-usp {
          display: grid;
          gap: 12px;
          align-content: start;
        }

        .hog-usp-title {
          margin: 0 0 4px;
          color: #EF3340;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hog-usp-card {
          min-height: 118px;
          padding: 22px;
          border: 1px solid rgba(51,78,155,0.14);
          background: #ffffff;
          box-shadow: 0 16px 36px rgba(31,45,83,0.07);
        }

        .hog-usp-card p {
          margin: 0;
          color: rgba(17,24,39,0.78);
          font-size: 15px;
          font-weight: 800;
          line-height: 1.48;
        }

        @media (max-width: 960px) {
          .hog-hero,
          .hog-content {
            grid-template-columns: 1fr;
          }

          .hog-mission {
            border-left: 0;
            border-top: 3px solid #EF3340;
            padding: 24px 0 0;
          }
        }

        @media (max-width: 640px) {
          .hog-section {
            padding: 46px 16px;
          }

          .hog-title {
            font-size: 34px;
          }

          .hog-copy,
          .hog-diff-list li {
            font-size: 14px;
          }

          .hog-different {
            padding: 24px;
          }

          .hog-section-title,
          .hog-mission-title {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="hog-wrap">
        <div className="hog-hero">
          <div>
            <h2 className="hog-title">
              Chennai’s Leading <em>Hair, Skin & Dental</em> Clinic
            </h2>

            <div className="hog-intro">
              <p className="hog-copy">
                At Hair O Graft, we are committed to delivering advanced,
                result-driven treatments that focus on long-term results—not
                just temporary fixes.With expert doctors and modern technology.
              </p>
            </div>
          </div>

          <div className="hog-mission">
            <p className="hog-label">Our Mission</p>
            <h3 className="hog-mission-title">To help every patient:</h3>
            <ul className="hog-mission-list">
              {missions.map((item) => (
                <li key={item}>
                  <span className="text-[#EF3340]">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hog-content">
          <div className="hog-different">
            <h3 className="hog-section-title">
              What Makes Hair O Graft Different?
            </h3>
            <ul className="hog-diff-list">
              {differentiators.map((item) => (
                <li key={item}>
                  <span className="hog-check">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
