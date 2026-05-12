"use client"

import { useState } from "react";

const stages = [
  {
    id: 1,
    number: "01",
    emoji: "",
    title: "Make an Appointment",
    desc: "Take the first step towards better hair, skin, and dental health by booking your consultation.",
    image: "/make-consalt.png",
  },
  {
    id: 2,
    number: "02",
    emoji: "",
    title: "Consultation",
    desc: "Get a personalized analysis and expert guidance from our certified specialists.",
    image: "/consultation.png",
  },
  {
    id: 3,
    number: "03",
    emoji: "",
    title: "Advanced Treatment",
    desc: "Experience safe and effective treatments using modern technology and proven methods.",
    image: "/Advanced-Treatment.png",
  },
  {
    id: 4,
    number: "04",
    emoji: "",
    title: "See Results & Share",
    desc: "Enjoy visible results and become one of our happy, confident clients.",
    image: "/see-results.png",
  },
];

export default function ConsultationStages() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div id="our-team"
      className="consultation-section font-sans min-h-screen flex flex-col items-center justify-center py-10 px-6"
      style={{ background: "#f7f9ff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        /* subtle page grain */
        .page-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }
        .page-grid {
          background-image:
            linear-gradient(rgba(51,78,155,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51,78,155,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── CARD ── */
        .stage-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          flex: 1;
          border: 1px solid rgba(51,78,155,0.16);
          transition: border-color 0.3s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .stage-card:hover {
          border-color: rgba(239,51,64,0.6);
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          z-index: 10;
        }

        /* Image — ALWAYS visible, slightly dims on hover for text pop */
        .card-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center top;
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: brightness(0.75) saturate(0.8);
        }
        .stage-card:hover .card-img {
          transform: scale(1.04);
          filter: brightness(0.55) saturate(0.7);
        }

        /* ── PERMANENT bottom gradient — always guarantees readability ── */
        .card-scrim {
          position: absolute;
          inset: 0;
          /* Heavy at bottom where text lives, clears at top */
          background: linear-gradient(
            to bottom,
            rgba(5,5,3,0.08)  0%,
            rgba(5,5,3,0.10) 30%,
            rgba(5,5,3,0.50) 55%,
            rgba(5,5,3,0.88) 72%,
            rgba(5,5,3,0.97) 100%
          );
          transition: background 0.4s ease;
          z-index: 1;
        }
        .stage-card:hover .card-scrim {
          background: linear-gradient(
            to bottom,
            rgba(5,5,3,0.18)  0%,
            rgba(5,5,3,0.20) 25%,
            rgba(5,5,3,0.62) 50%,
            rgba(5,5,3,0.92) 68%,
            rgba(5,5,3,0.98) 100%
          );
        }

        /* Gold top accent bar */
        .top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340 0%, rgba(239,51,64,0.15) 100%);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .stage-card:hover .top-bar { opacity: 1; }

        /* Step number — top left */
        .step-num {
          position: absolute;
          top: 18px; left: 20px;
          z-index: 3;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: rgba(239,51,64,0.6);
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          transition: color 0.3s;
        }
        .stage-card:hover .step-num { color: rgba(239,51,64,0.95); }

        /* ── CONTENT at bottom — always visible, always readable ── */
        .card-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 0 22px 24px;
          z-index: 2;
          display: flex;
          flex-direction: column;
        }

        /* Emoji */
        .card-emoji {
          font-size: 26px;
          margin-bottom: 10px;
          display: block;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.9));
          transition: transform 0.35s ease;
          line-height: 1;
        }
        .stage-card:hover .card-emoji { transform: translateY(-3px) scale(1.08); }

        /* Title — always clearly visible */
        .card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 17px;
          font-weight: 900;
          line-height: 1.22;
          color: #f8f4ea;
          text-shadow: 0 2px 12px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,1);
          margin: 0;
          transition: color 0.25s;
        }
        .stage-card:hover .card-title { color: #fff; }

        /* Gold divider line — slides in on hover */
        .brand-line {
          display: block;
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, #EF3340, transparent);
          margin-top: 10px;
          margin-bottom: 0;
          transition: width 0.38s ease 0.08s, margin-bottom 0.38s ease;
        }
        .stage-card:hover .brand-line {
          width: 40px;
          margin-bottom: 10px;
        }

        /* Description — always rendered in DOM, slides up on hover */
        .card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(245,238,215,0.82);
          text-shadow: 0 1px 6px rgba(0,0,0,0.9);
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.42s ease, opacity 0.38s ease 0.1s;
        }
        .stage-card:hover .card-desc {
          max-height: 120px;
          opacity: 1;
        }

        /* Connector line between cards */
        .connector {
          position: absolute;
          top: 50%; right: 0;
          width: 1px; height: 36%;
          transform: translateY(-50%);
          background: linear-gradient(to bottom, transparent, rgba(51,78,155,0.3), transparent);
          z-index: 4;
        }

        /* Section header anims */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a1 { animation: fadeUp 0.55s ease 0.05s both; }
        .a2 { animation: fadeUp 0.55s ease 0.18s both; }
        .a3 { animation: fadeUp 0.55s ease 0.3s both; }

        @media (max-width: 1024px) {
          .consultation-section {
            min-height: auto !important;
            padding: 76px 24px !important;
          }

          .stage-track {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            height: auto !important;
            gap: 16px !important;
          }

          .stage-card {
            min-height: 360px;
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .consultation-section {
            padding: 16px 16px !important;
          }

          .stage-heading {
            font-size: 30px !important;
          }

          .stage-track {
            display: flex !important;
            grid-template-columns: none;
            gap: 14px !important;
            margin: 0 -16px;
            padding: 0 16px 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 16px;
            -webkit-overflow-scrolling: touch;
          }

          .stage-card {
            flex: 0 0 84%;
            min-height: 330px;
            scroll-snap-align: start;
          }

          .stage-card:hover {
            transform: none;
          }

          .stage-track::-webkit-scrollbar {
            height: 4px;
          }

          .stage-track::-webkit-scrollbar-track {
            background: rgba(51,78,155,0.08);
          }

          .stage-track::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #EF3340, #334E9B);
          }

          .card-desc {
            max-height: 140px;
            opacity: 1;
          }

          .brand-line {
            width: 40px;
            margin-bottom: 10px;
          }

          .stage-cta-strip {
            width: 100%;
            justify-content: center;
          }

          .stage-cta-strip > div {
            display: none;
          }
        }
      `}</style>

      {/* page bg grain + grid */}
      <div className="fixed inset-0 z-0 pointer-events-none page-grain page-grid" style={{ opacity: 0.55 }} />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(51,78,155,0.1) 0%, transparent 55%)" }}
      />

      {/* ── Section header ── */}
      <div className="relative z-10 text-center mb-12 max-sm:mb-4" style={{ maxWidth: 560 }}>
        <div className="a1 inline-flex items-center gap-2 max-sm:mb-2 mb-5 px-3 py-[5px]
                        text-[10px] font-semibold tracking-[0.18em] uppercase
                        text-[#EF3340] bg-[rgba(51,78,155,0.08)]
                        border border-[rgba(51,78,155,0.25)] rounded-[2px]">
       Stages of Consultation
        </div>

        <h2
          className="stage-heading font-playfair a2 font-black text-[#111827] leading-[1.18] tracking-[-0.01em] mb-4"
          style={{ fontSize: 34 }}
        >
          Your Journey to{" "}
          <span className="text-[#EF3340] italic">Confidence</span>
        </h2>

        <p
          className="font-dm a3 font-light text-[rgba(51,65,85,0.72)] leading-relaxed"
          style={{ fontSize: 13.5, maxWidth: 400, margin: "0 auto" }}
        >
          From your first appointment to your final results — we walk with you every step of the way.
        </p>
      </div>

      {/* ── Cards ── */}
      <div
        className="stage-track relative z-10 flex w-full"
        style={{ maxWidth: 1280, height: 460, gap: 0 }}
      >
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className="stage-card"
            onMouseEnter={() => setHovered(stage.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Always-on brand top bar */}
            <div className="top-bar" />

            {/* Image — ALWAYS shown */}
            <div
              className="card-img"
              style={{ backgroundImage: `url(${stage.image})` }}
            />

            {/* Permanent dark-to-bottom scrim — guarantees text readability */}
            <div className="card-scrim" />

            {/* Step number top-left */}
            <div className="step-num">{stage.number}</div>

            {/* Connector between cards */}
            {idx < stages.length - 1 && <div className="connector" />}

            {/* Content block */}
            <div className="card-content">
              <span className="card-emoji">{stage.emoji}</span>
              <h3 className="card-title">{stage.title}</h3>
              <span className="brand-line" />
              <p className="card-desc">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA strip ── */}
      <div className="stage-cta-strip relative z-10 max-sm:mt-5 mt-10 flex items-center gap-4">
        <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(51,78,155,0.4))" }} />
        <button
          onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          className="font-dm inline-flex items-center gap-2
                     px-7 py-3 text-[12px] font-bold tracking-[0.1em] uppercase
                     text-white border-0 cursor-pointer
                     transition-all hover:brightness-110 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #EF3340, #334E9B)",
            clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
          }}
        >
         Book Your Consultation
        </button>
        <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(51,78,155,0.4))" }} />
      </div>
    </div>
  );
}
