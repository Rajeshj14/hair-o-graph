"use client";

const reasons = [
  {
    id: "01",
    title: "Advanced technology with expert care",
    text: "Modern equipment guided by experienced specialists for precise, confident treatment decisions.",
  },
  {
    id: "02",
    title: "Safe, effective, and result-driven procedures",
    text: "Every procedure is selected with patient comfort, clinical safety, and visible outcomes in mind.",
  },
  {
    id: "03",
    title: "Personalized treatment plans",
    text: "Care plans are shaped around your concern, condition, timeline, and long-term goals.",
  },
  {
    id: "04",
    title: "Focus on long-term results",
    text: "We look beyond temporary fixes with treatment paths designed for lasting improvement.",
  },
];

export default function WhyChooseTreatments() {
  return (
    <section id="treatments" className="why-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .why-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px;
          background:
            radial-gradient(circle at 18% 26%, rgba(239,51,64,0.08), transparent 30%),
            radial-gradient(circle at 84% 18%, rgba(51,78,155,0.12), transparent 34%),
            linear-gradient(180deg, #ffffff 0%, #eef3ff 52%, #f8fbff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .why-section::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(51,78,155,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,51,64,0.032) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, transparent, black 14%, black 86%, transparent);
        }

        .why-wrap {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(300px, 0.48fr) minmax(0, 1fr);
          gap: 40px;
          align-items: stretch;
        }

        .why-intro {
          position: sticky;
          top: 96px;
          align-self: start;
          min-height: 420px;
          padding: 34px;
          border: 1px solid rgba(239,51,64,0.18);
          background:
            linear-gradient(145deg, rgba(255,255,255,0.96), rgba(242,246,255,0.94));
          overflow: hidden;
        }

        .why-intro::after {
          content: '';
          position: absolute;
          inset: auto -20% -28% -20%;
          height: 220px;
          background: radial-gradient(circle, rgba(51,78,155,0.34), transparent 66%);
          pointer-events: none;
        }

        .why-kicker {
          width: fit-content;
          margin-bottom: 18px;
          padding: 7px 14px;
          border: 1px solid rgba(239,51,64,0.32);
          background: rgba(239,51,64,0.08);
          color: #EF3340;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .why-title {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 900;
          line-height: 0.96;
          letter-spacing: 0;
        }

        .why-title em {
          color: #EF3340;
          font-style: italic;
        }

        .why-copy {
          position: relative;
          z-index: 1;
          margin: 24px 0 0;
          max-width: 360px;
          color: rgba(51,65,85,0.72);
          font-size: 14px;
          line-height: 1.8;
        }

        .why-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .why-card {
          position: relative;
          min-height: 230px;
          padding: 26px;
          border: 1px solid rgba(51,78,155,0.14);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,248,255,0.9));
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340, #334E9B, transparent);
          opacity: 0.85;
        }

        .why-card:hover {
          transform: translateY(-5px);
          border-color: rgba(239,51,64,0.42);
          background:
            linear-gradient(180deg, rgba(255,255,255,1), rgba(242,246,255,0.98));
          box-shadow: 0 18px 46px rgba(51,78,155,0.14);
        }

        .why-card:hover h3 {
          color: #111827;
        }

        .why-card:hover p {
          color: rgba(31,41,55,0.82);
        }

        .why-id {
          display: block;
          margin-bottom: 34px;
          color: rgba(239,51,64,0.78);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
        }

        .why-card h3 {
          margin: 0 0 12px;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.28;
        }

        .why-card p {
          margin: 0;
          color: rgba(51,65,85,0.68);
          font-size: 13px;
          line-height: 1.68;
        }

        .why-mark {
          position: absolute;
          right: 22px;
          bottom: 22px;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(239,51,64,0.35);
          color: #EF3340;
          font-size: 20px;
          font-weight: 800;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .why-card:hover .why-mark {
          background: #EF3340;
          color: #fff;
        }

        @media (max-width: 980px) {
          .why-section {
            padding: 82px 24px;
          }

          .why-wrap {
            grid-template-columns: 1fr;
                gap:20px;
          }

          .why-intro {
            position: relative;
            top: auto;
            min-height: auto;
          }

          .why-copy {
            max-width: 720px;
            margin: 15px 0 0;
          }
        }

        @media (max-width: 680px) {
          .why-section {
            padding: 12px 16px;
          }
          .why-id {
            margin-bottom: 20px;
          }

          .why-list {
            grid-template-columns: 1fr;
          }

          .why-intro,
          .why-card {
            padding: 24px;
          }
        }
      `}</style>

      <div className="why-wrap">
        <div className="why-intro">
          <div className="why-kicker">Why Choose Our Treatments?</div>
          <h2 className="why-title">
            Built for <em>Trust</em>, Planned for Results
          </h2>
          <p className="why-copy">
            Our treatment approach combines careful diagnosis, advanced systems,
            and patient-specific planning so every step feels clear and purposeful.
          </p>
        </div>

        <div className="why-list">
          {reasons.map((reason) => (
            <article className="why-card" key={reason.id}>
              <span className="why-id">{reason.id}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <span className="why-mark">+</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
