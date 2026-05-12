"use client";

const faqs = [
  {
    q: "What conditions do you treat?",
    a: [
      "Hair fall, hair thinning, baldness",
      "Dandruff and scalp issues",
      "Acne, acne scars, pigmentation, dull skin",
      "Unwanted hair and aging concerns",
      "Tooth pain, cavities, misaligned teeth",
      "Missing teeth and smile correction",
    ],
  },
  {
    q: "Are the treatments painful?",
    a: [
      "Most treatments are safe, minimally invasive, and comfortable.",
      "Some procedures may cause slight discomfort, but our doctors ensure a smooth and pain-free experience.",
    ],
  },
  {
    q: "How many sessions will I need?",
    a: [
      "The number of sessions depends on your condition and treatment type.",
      "After consultation, our experts will create a personalized treatment plan for best results.",
    ],
  },
  {
    q: "Do you have experienced doctors?",
    a: [
      "Yes. Our team includes qualified and experienced specialists in hair restoration, dermatology, and dental care.",
      "This helps ensure safe, effective, and carefully planned treatments.",
    ],
  },
  {
    q: "Do you offer advanced treatments like PRP, GFC, Aligners, and Implants?",
    a: [
      "Absolutely. We provide advanced and modern treatments including PRP, GFC, hair transplant, laser skin treatments, aligners, dental implants, and more.",
    ],
  },
  {
    q: "What makes your clinic different?",
    a: [
      "Root cause-based treatment approach",
      "Advanced medical-grade technology",
      "Personalized care for every patient",
      "Safe, effective, and long-lasting results",
      "Trusted by hundreds of satisfied patients",
    ],
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .faq-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px;
          background:
            radial-gradient(circle at 18% 18%, rgba(51,78,155,0.12), transparent 34%),
            radial-gradient(circle at 86% 26%, rgba(239,51,64,0.08), transparent 32%),
            linear-gradient(180deg, #ffffff 0%, #eef3ff 48%, #f8fbff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(51,78,155,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239,51,64,0.03) 1px, transparent 1px);
          background-size: 68px 68px;
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
        }

        .faq-wrap {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .faq-head {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(320px, 0.55fr);
          gap: 42px;
          align-items: end;
          margin-bottom: 46px;
        }

        .faq-kicker {
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

        .faq-title {
          margin: 0;
          max-width: 760px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 0.94;
          font-weight: 900;
          letter-spacing: 0;
        }

        .faq-title em {
          color: #EF3340;
          font-style: italic;
        }

        .faq-lead {
          margin: 0;
          color: rgba(51,65,85,0.72);
          font-size: 14px;
          line-height: 1.85;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .faq-card {
          position: relative;
          min-height: 250px;
          padding: 26px;
          border: 1px solid rgba(51,78,155,0.16);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,248,255,0.9));
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .faq-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340, #334E9B, transparent);
        }

        .faq-card:hover {
          transform: translateY(-5px);
          border-color: rgba(239,51,64,0.42);
          background:
            linear-gradient(180deg, rgba(255,255,255,1), rgba(242,246,255,0.98));
          box-shadow: 0 18px 46px rgba(51,78,155,0.14);
        }

        .faq-card:hover h3 {
          color: #111827;
        }

        .faq-card:hover .faq-list li {
          color: rgba(31,41,55,0.82);
        }

        .faq-number {
          display: block;
          margin-bottom: 22px;
          color: rgba(239,51,64,0.78);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
        }

        .faq-card h3 {
          margin: 0 0 18px;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.32;
        }

        .faq-list {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .faq-list li {
          position: relative;
          padding-left: 22px;
          color: rgba(51,65,85,0.72);
          font-size: 13px;
          line-height: 1.62;
        }

        .faq-list li::before {
          content: '+';
          position: absolute;
          left: 0;
          top: 0;
          color: #EF3340;
          font-weight: 900;
        }

        .faq-mark {
          position: absolute;
          right: 24px;
          top: 24px;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(239,51,64,0.32);
          color: #EF3340;
          font-size: 18px;
          font-weight: 900;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .faq-card:hover .faq-mark {
          background: #EF3340;
          color: #fff;
        }

        @media (max-width: 980px) {
          .faq-section {
            padding: 84px 24px;
          }

          .faq-head {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 10px;
          }
        }

        @media (max-width: 760px) {
          .faq-section {
            padding: 16px 16px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-card {
            min-height: auto;
            padding: 24px;
          }
        }
      `}</style>

      <div className="faq-wrap">
        <div className="faq-head">
          <div>
            <div className="faq-kicker">FAQ</div>
            <h2 className="faq-title">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <p className="faq-lead">
            Quick answers about treatments, comfort, sessions, doctors, and what
            makes Hair O Graft different.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <article className="faq-card" key={faq.q}>
              <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="faq-mark">?</span>
              <h3>{faq.q}</h3>
              <ul className="faq-list">
                {faq.a.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
