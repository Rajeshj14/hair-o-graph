"use client";

import { useState } from "react";

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
    q: "Do you offer advanced treatments like Hair ,Skin and Dental?",
    a: [
      "Absolutely. We provide advanced and modern treatments including hair, skin and dental treatments, laser skin treatments, aligners, dental implants, and more.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .faq-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px;
          background: linear-gradient(180deg, #ffffff 0%, #eef3ff 48%, #f8fbff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .faq-wrap {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .faq-head {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .faq-head::after {
          content: '';
          display: block;
          width: 74px;
          height: 2px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, transparent, #EF3340, #334E9B, transparent);
        }

        .faq-kicker {
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

        .faq-kicker::before,
        .faq-kicker::after {
          content: '';
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239,51,64,0.8));
        }

        .faq-kicker::after {
          background: linear-gradient(90deg, rgba(51,78,155,0.8), transparent);
        }

        .faq-title {
          margin: 0 0 14px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: 0;
        }

        .faq-title em {
          color: #EF3340;
          font-style: italic;
        }

        .faq-lead {
          max-width: 540px;
          margin: 0 auto;
          color: rgba(51,65,85,0.72);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.74;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .faq-card {
          position: relative;
          padding: 0;
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

        .faq-card:hover .faq-question {
          color: #111827;
        }

        .faq-card:hover .faq-list li {
          color: rgba(31,41,55,0.82);
        }

        .faq-trigger {
          position: relative;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 22px;
          align-items: start;
          padding: 26px;
          border: 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
        }

        .faq-number {
          display: block;
          margin-bottom: 22px;
          color: rgba(239,51,64,0.78);
          font-family: 'Outfit', sans-serif;
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
        }

        .faq-question {
          margin: 0;
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

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.28s ease, opacity 0.24s ease;
        }

        .faq-answer-inner {
          min-height: 0;
          overflow: hidden;
        }

        .faq-card.is-open .faq-answer {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .faq-card.is-open .faq-answer-inner {
          padding: 0 26px 26px;
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
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border: 1px solid rgba(239,51,64,0.32);
          color: #EF3340;
          font-size: 18px;
          font-weight: 900;
          line-height: 1;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .faq-card:hover .faq-mark,
        .faq-card.is-open .faq-mark {
          background: #EF3340;
          color: #fff;
        }

        .faq-card.is-open .faq-mark {
          transform: rotate(45deg);
        }

        @media (max-width: 980px) {
          .faq-section {
            padding: 84px 24px;
          }

          .faq-head {
            max-width: 600px;
          }
        }

        @media (max-width: 760px) {
          .faq-section {
            padding: 16px 16px;
          }

          .faq-head {
            max-width: 360px;
            margin-bottom: 30px;
          }

          .faq-title {
            font-size: 29px;
          }

          .faq-lead {
            font-size: 13.5px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-card {
            min-height: auto;
          }

          .faq-trigger {
            min-height: auto;
            padding: 24px;
          }

          .faq-card.is-open .faq-answer-inner {
            padding: 0 24px 24px;
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
            <article
              className={`faq-card${openIndex === index ? " is-open" : ""}`}
              key={faq.q}
            >
              <button
                className="faq-trigger"
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-question">{faq.q}</span>
                </span>
                <span className="faq-mark" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer" id={`faq-answer-${index}`}>
                <div className="faq-answer-inner">
                  <ul className="faq-list">
                    {faq.a.map((answer) => (
                      <li key={answer}>{answer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
