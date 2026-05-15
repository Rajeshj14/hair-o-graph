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
          background: linear-gradient(180deg, #ffffff 0%, #eef3ff 52%, #f8fbff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }
        .why-wrap {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .why-intro {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .why-intro::after {
          content: '';
          display: block;
          width: 74px;
          height: 2px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, transparent, #EF3340, #334E9B, transparent);
        }

        .why-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #EF3340;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .why-kicker::before,
        .why-kicker::after {
          content: '';
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239,51,64,0.8));
        }

        .why-kicker::after {
          background: linear-gradient(90deg, rgba(51,78,155,0.8), transparent);
        }

        .why-title {
          margin: 0 0 14px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .why-title em {
          color: #EF3340;
          font-style: italic;
        }

        .why-copy {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          max-width: 540px;
          color: rgba(51,65,85,0.72);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.74;
        }

        .why-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .why-card-clone {
          display: none;
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
          font-family: 'Outfit', sans-serif;
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
            max-width: 760px;
          }

          .why-copy {
            max-width: 540px;
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
            display: flex;
            width: max-content;
            gap: 14px;
            animation: whyMobileMarquee 34s linear infinite;
            will-change: transform;
          }

          .why-card {
            flex: 0 0 min(82vw, 320px);
            padding: 24px;
          }

          .why-card:hover {
            transform: none;
          }

          .why-card-clone {
            display: block;
          }

          .why-list:hover {
            animation-play-state: paused;
          }

          .why-intro {
            max-width: 360px;
            margin-bottom: 30px;
          }

          .why-title {
            font-size: 29px;
          }

          .why-copy {
            font-size: 13.5px;
          }

          @keyframes whyMobileMarquee {
            from {
              transform: translateX(calc(-50% - 7px));
            }
            to {
              transform: translateX(0);
            }
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
          {reasons.map((reason) => (
            <article
              className="why-card why-card-clone"
              key={`${reason.id}-clone`}
              aria-hidden="true"
            >
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
