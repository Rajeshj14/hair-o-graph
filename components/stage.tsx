"use client";

import { useRef, useState } from "react";

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
    image: "/AdvancedTreatment.png",
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
  const [activeStage, setActiveStage] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goToStage = (index: number) => {
    const nextIndex = (index + stages.length) % stages.length;
    setActiveStage(nextIndex);
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleStageScroll = () => {
    if (!trackRef.current) return;

    const trackLeft = trackRef.current.getBoundingClientRect().left;
    const closestIndex = cardRefs.current.reduce((closest, card, index) => {
      if (!cardRefs.current[closest] || !card) return closest;
      const currentDistance = Math.abs(
        card.getBoundingClientRect().left - trackLeft
      );
      const closestDistance = Math.abs(
        cardRefs.current[closest]!.getBoundingClientRect().left - trackLeft
      );
      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveStage(closestIndex);
  };

  return (
    <div
      id="our-team"
      className="consultation-section font-sans min-h-screen flex flex-col items-center justify-center py-10 px-6"
      style={{ background: "#f7f9ff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-playfair { font-family: 'Outfit', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }

        .consultation-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f7f9ff 58%, #eef3ff 100%) !important;
        }

        .stage-header {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .stage-header::after {
          content: '';
          display: block;
          width: 74px;
          height: 2px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, transparent, #EF3340, #334E9B, transparent);
        }

        .stage-kicker {
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

        .stage-kicker::before,
        .stage-kicker::after {
          content: '';
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239,51,64,0.8));
        }

        .stage-kicker::after {
          background: linear-gradient(90deg, rgba(51,78,155,0.8), transparent);
        }

        .stage-heading {
          margin: 0 0 14px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 900;
          color: #111827;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .stage-heading span {
          color: #EF3340;
          font-style: italic;
        }

        .stage-lead {
          max-width: 540px;
          margin: 0 auto;
          color: rgba(51,65,85,0.72);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.74;
        }

        .stage-track {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .stage-carousel-controls {
          display: none;
        }

        .stage-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: 1px;
          clip-path: polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);
          background: linear-gradient(135deg, #EF3340 0%, rgba(51,78,155,0.72) 55%, rgba(239,51,64,0.18) 100%);
          isolation: isolate;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .stage-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          clip-path: inherit;
          background:
            linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          z-index: 0;
          transition: background 0.25s ease;
        }

        .stage-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #EF3340, #334E9B, rgba(239,51,64,0.42));
        }

        .stage-card:hover::before {
          background: #ffffff;
        }

        .stage-card::after {
          content: '';
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 0;
          z-index: 1;
          height: 3px;
          background: linear-gradient(90deg, #EF3340, #334E9B);
          transform: scaleX(0.38);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .stage-card:hover::after {
          transform: scaleX(1);
        }

        .stage-image {
          position: relative;
          z-index: 1;
          aspect-ratio: 1.1 / 1;
          overflow: hidden;
          background: #0b1020;
          margin: 12px 12px 0;
          clip-path: polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%);
        }

        .stage-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.96) contrast(1.03);
          transition: transform 0.55s ease;
        }

        .stage-card:hover .stage-image img {
          transform: scale(1.05);
        }

        .stage-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(3,7,18,0.62), rgba(3,7,18,0.04) 62%),
            linear-gradient(135deg, rgba(239,51,64,0.16), transparent 45%);
          pointer-events: none;
        }

        .step-num {
          position: absolute;
          left: 16px;
          bottom: 14px;
          z-index: 1;
          font-family: 'Outfit', sans-serif;
          color: #ffffff;
          font-size: 52px;
          font-weight: 900;
          line-height: 0.8;
        }

        .card-content {
          position: relative;
          z-index: 1;
          min-height: 214px;
          padding: 24px 24px 30px;
        }

        .card-emoji {
          display: none;
        }

        .card-title {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          color: #111827;
          font-size: 27px;
          font-weight: 900;
          line-height: 1.05;
        }

        .brand-line {
          display: block;
          width: 58px;
          height: 2px;
          margin: 16px 0 14px;
          background: linear-gradient(90deg, #EF3340, #334E9B);
        }

        .card-desc {
          margin: 0;
          color: rgba(51,65,85,0.74);
          font-family: 'DM Sans', sans-serif;
          font-size: 15.5px;
          font-weight: 400;
          line-height: 1.72;
        }

        .connector {
          position: absolute;
          top: 50%;
          right: -10px;
          z-index: 3;
          width: 20px;
          height: 20px;
          border-top: 1px solid rgba(51,78,155,0.42);
          border-right: 1px solid rgba(239,51,64,0.55);
          transform: translateY(-50%) rotate(45deg);
          background: #f7f9ff;
        }

        @media (max-width: 1024px) {
          .consultation-section {
            min-height: auto !important;
            padding: 76px 24px !important;
          }

          .stage-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .consultation-section {
            padding: 16px 16px !important;
          }

          .stage-header {
            max-width: 360px;
            margin-bottom: 30px;
          }

          .stage-heading {
            font-size: 29px;
          }

          .stage-lead {
            font-size: 13.5px;
          }

          .stage-track {
            display: flex;
            width: calc(100% + 32px);
            max-width: none;
            margin: 0 -16px;
            gap: 14px;
            overflow-x: auto;
            padding: 2px 16px 14px;
            scroll-snap-type: x mandatory;
            scroll-padding-inline: 16px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .stage-track::-webkit-scrollbar {
            display: none;
          }

          .stage-card {
            flex: 0 0 min(86vw, 340px);
            scroll-snap-align: center;
            clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          }

          .stage-image {
            aspect-ratio: 1.38 / 1;
            margin: 10px 10px 0;
            clip-path: polygon(13px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
          }

          .card-content {
            min-height: auto;
            padding: 22px 20px 25px;
          }

          .card-title {
            font-size: 25px;
          }

          .stage-carousel-controls {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            width: 100%;
            margin-top: 8px;
          }

          .stage-carousel-btn {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(51,78,155,0.18);
            border-radius: 999px;
            background: #ffffff;
            color: #334E9B;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            box-shadow: 0 10px 24px rgba(31,45,83,0.08);
          }

          .stage-carousel-dots {
            display: inline-flex;
            align-items: center;
            gap: 7px;
          }

          .stage-carousel-dot {
            width: 8px;
            height: 8px;
            border: 0;
            padding: 0;
            border-radius: 999px;
            background: rgba(51,78,155,0.25);
            cursor: pointer;
            transition: width 0.2s ease, background 0.2s ease;
          }

          .stage-carousel-dot.is-active {
            width: 22px;
            background: #EF3340;
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

      <div id="process"  className="stage-header">
        <div className="stage-kicker">Stages of Consultation</div>

        <h2 className="stage-heading">
          Treatments <span>Journey</span>
        </h2>

        <p className="stage-lead">
          From your first appointment to your final results - we walk with you
          every step of the way.
        </p>
      </div>

      <div
        className="stage-track"
        ref={trackRef}
        onScroll={handleStageScroll}
      >
        {stages.map((stage, idx) => (
          <div
            key={stage.id}
            className="stage-card"
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
          >
            <div className="stage-image">
              <img src={stage.image} alt={stage.title} />
              <div className="step-num">{stage.number}</div>
            </div>

            {idx < stages.length - 1 && <div className="connector" />}

            <div className="card-content">
              <span className="card-emoji">{stage.emoji}</span>
              <h3 className="card-title">{stage.title}</h3>
              <span className="brand-line" />
              <p className="card-desc">{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="stage-carousel-controls" aria-label="Consultation stages carousel controls">
        <button
          type="button"
          className="stage-carousel-btn"
          aria-label="Previous consultation stage"
          onClick={() => goToStage(activeStage - 1)}
        >
          ‹
        </button>
        <div className="stage-carousel-dots">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              type="button"
              className={`stage-carousel-dot ${
                activeStage === index ? "is-active" : ""
              }`}
              aria-label={`Show ${stage.title}`}
              onClick={() => goToStage(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="stage-carousel-btn"
          aria-label="Next consultation stage"
          onClick={() => goToStage(activeStage + 1)}
        >
          ›
        </button>
      </div>

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
         Book your Free Consultation
        </button>
        <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(51,78,155,0.4))" }} />
      </div>
    </div>
  );
}

