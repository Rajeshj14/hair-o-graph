"use client"

import { useState, useEffect, useRef } from "react";

const differentiators = [
  { text: "Root Cause-Based Treatment Approach" },
  { text: "Combination of Medical Expertise + Advanced Technology" },
  { text: "Evidence-Based Treatment Protocols" },
  { text: "Personalized Care for Every Patient" },
  { text: "Safe, Effective & Minimally Invasive Treatments" },
];

const usps = [
  {
    icon: "/icons.png",
    title: "High Capacity",
    desc: "Built to handle high patient flow efficiently without compromising quality of care.",
    num: "500+",
    numLabel: "Patients / Month",
  },
  {
    icon: "/icons-1.png",
    title: "Medical-Grade Equipment",
    desc: "Advanced technology and medical-grade equipment trusted by professionals.",
    num: "20+",
    numLabel: "Advanced Machines",
  },
  {
    icon: "/iconss.png",
    title: "Specialized Experts",
    desc: "Dedicated specialists in hair restoration, skin care, and dental solutions.",
    num: "10+",
    numLabel: "Expert Doctors",
  },
];

type Usp = (typeof usps)[number];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function UspCard({ usp, delay }: { usp: Usp; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const num = parseInt(usp.num);
  const suffix = usp.num.replace(/[0-9]/g, "");
  const count = useCountUp(num, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="usp-card"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner accent */}
      <div className="usp-corner-tl" />
      <div className="usp-corner-br" />

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="usp-icon-wrap">
          <img className="usp-icon-img" src={usp.icon} alt="" />
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="usp-num">
            {visible ? count : 0}{suffix}
          </div>
          <div className="usp-num-label">{usp.numLabel}</div>
        </div>
      </div>

      <h3 className="usp-title">{usp.title}</h3>
      <div className="usp-divider" />
      <p className="usp-desc">{usp.desc}</p>
    </div>
  );
}

export default function ClinicSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="clinic-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .clinic-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8fbff;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 40px 0 40px;
          background-color: #f8fbff;
        }

        /* ── Page atmosphere ── */
        .clinic-section::before {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(51,78,155,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51,78,155,0.028) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .clinic-section::after {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse at 15% 30%, rgba(239,51,64,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 70%, rgba(51,78,155,0.08) 0%, transparent 45%);
        }

        /* ── Container ── */
        .clinic-inner {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .clinic-intro {
          max-width: 920px;
          margin: 0 auto 44px;
          text-align: center;
          animation: fadeUp 0.6s ease 0.08s both;
        }

        /* ── Section badge ── */
        .section-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 14px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #EF3340;
          background: rgba(239,51,64,0.08);
          border: 1px solid rgba(239,51,64,0.25);
          border-radius: 2px;
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease 0.05s both;
        }

        /* ── Two-column hero layout ── */
        .clinic-hero {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 0;
          min-height: 380px;
          border: 1px solid rgba(239,51,64,0.1);
          margin-bottom: 2px;
          overflow: hidden;
        }

        /* LEFT TEXT PANEL */
        .hero-left {
          padding: 52px 48px 52px 52px;
          border-right: 1px solid rgba(239,51,64,0.1);
          display: flex; flex-direction: column; justify-content: center;
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(242,246,255,0.94) 100%);
          animation: fadeUp 0.6s ease 0.15s both;
        }

        .hero-left::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 2px; height: 60%;
          background: linear-gradient(to bottom, #EF3340, transparent);
        }

        .clinic-headline {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          color: #111827;
          line-height: 1.14;
          letter-spacing: -0.01em;
          margin-bottom: 20px;
        }

        .clinic-headline em {
          color: #EF3340;
          font-style: italic;
        }

        .clinic-body {
          font-size: 16px;
          font-weight: 300;
          color: rgba(51,65,85,0.72);
          line-height: 1.78;
          max-width: 760px;
          margin: 0 auto;
        }

        /* Differentiators list */
        .diff-list {
          display: flex; flex-direction: column; gap: 9px;
        }

        .diff-item {
          display: flex; align-items: center; gap: 10px;
          cursor: default;
          padding: 8px 12px;
          border: 1px solid rgba(239,51,64,0.0);
          border-radius: 2px;
          transition: background 0.22s, border-color 0.22s;
          position: relative;
        }

        .diff-item:hover {
          background: rgba(239,51,64,0.05);
          border-color: rgba(239,51,64,0.18);
        }

        .diff-check {
          width: 18px; height: 18px;
          border: 1px solid rgba(239,51,64,0.4);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 10px;
          color: #EF3340;
          transition: background 0.2s, border-color 0.2s;
        }

        .diff-item:hover .diff-check {
          background: rgba(239,51,64,0.12);
          border-color: #EF3340;
        }

        .diff-text {
          font-size: 15.5px;
          font-weight: 400;
          color: rgba(51,65,85,0.72);
          transition: color 0.2s;
          line-height: 1.4;
        }

        .diff-item:hover .diff-text { color: #111827; }

        /* RIGHT IMAGE PANEL */
        .hero-right {
          position: relative;
          overflow: hidden;
          background: #0a0906;
          animation: fadeUp 0.6s ease 0.28s both;
        }

        .hero-right-img {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&fit=crop');
          background-size: cover;
          background-position: center;
          filter: brightness(0.45) saturate(0.7);
          transition: transform 0.6s ease, filter 0.4s ease;
        }

        .hero-right:hover .hero-right-img {
          transform: scale(1.04);
          filter: brightness(0.35) saturate(0.6);
        }

        /* Scrim over image */
        .hero-right-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(7,6,10,0.2) 0%,
            rgba(7,6,10,0.1) 40%,
            rgba(7,6,10,0.7) 75%,
            rgba(7,6,10,0.95) 100%
          );
          z-index: 1;
        }

        /* Overlay content on right image */
        .hero-right-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 28px 28px;
          z-index: 2;
        }

        .clinic-name-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(239,51,64,0.1);
          border: 1px solid rgba(239,51,64,0.3);
          color: #EF3340;
          font-size: 13px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 5px 12px; border-radius: 2px;
          margin-bottom: 12px;
        }

        .clinic-name-big {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px; font-weight: 900;
          color: #f5f0e8;
          line-height: 1.2;
          text-shadow: 0 2px 16px rgba(0,0,0,0.8);
        }

        .clinic-name-big span { color: #EF3340; font-style: italic; }

        /* ── USP SECTION ── */
        .usp-section {
          margin-top: 2px;
        }

        .usp-header {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 28px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(239,51,64,0.1);
          border-bottom: none;
        }

        .usp-header-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(239,51,64,0.3), transparent);
        }

        .usp-header-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(239,51,64,0.7);
        }

        .usp-header-line-r {
          flex: 1; height: 1px;
          background: linear-gradient(to left, rgba(239,51,64,0.3), transparent);
        }

        /* USP cards row */
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(239,51,64,0.1);
          background: rgba(255,255,255,0.94);
        }

        /* Individual USP card */
        .usp-card {
          position: relative;
          padding: 32px 28px;
          border-right: 1px solid rgba(239,51,64,0.07);
          cursor: default;
          overflow: hidden;
          transition: background 0.3s;
          animation: fadeUp 0.6s ease both;
        }

        .usp-card:last-child { border-right: none; }

        .usp-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .usp-card:hover::before { opacity: 1; }
        .usp-card:hover { background: rgba(239,51,64,0.03); }

        /* Corner marks */
        .usp-corner-tl {
          position: absolute; top: 10px; left: 10px;
          width: 12px; height: 12px;
          border-top: 1px solid rgba(239,51,64,0.25);
          border-left: 1px solid rgba(239,51,64,0.25);
        }
        .usp-corner-br {
          position: absolute; bottom: 10px; right: 10px;
          width: 12px; height: 12px;
          border-bottom: 1px solid rgba(239,51,64,0.25);
          border-right: 1px solid rgba(239,51,64,0.25);
        }

        .usp-icon-wrap {
          width: 44px; height: 44px;
          border: 1px solid rgba(239,51,64,0.22);
          border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(239,51,64,0.06);
          transition: background 0.25s, border-color 0.25s;
        }
        .usp-card:hover .usp-icon-wrap {
          background: rgba(239,51,64,0.12);
          border-color: rgba(239,51,64,0.45);
        }

        .usp-icon-img {
          width: 34px;
          height: 34px;
          object-fit: contain;
          display: block;
          filter: brightness(0) saturate(100%) invert(28%) sepia(40%) saturate(1467%) hue-rotate(203deg) brightness(92%) contrast(91%);
        }

        .usp-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px; font-weight: 900;
          color: #EF3340; line-height: 1;
        }

        .usp-num-label {
          font-size: 9px; font-weight: 400;
          color: #0a0a0a;
          text-transform: uppercase; letter-spacing: 0.1em;
          margin-top: 2px;
        }

        .usp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 17px; font-weight: 900;
          color: #111827; line-height: 1.22;
          margin: 0 0 10px;
        }

        .usp-divider {
          width: 28px; height: 1px;
          background: linear-gradient(90deg, #EF3340, transparent);
          margin-bottom: 12px;
        }

        .usp-desc {
          font-size: 12.5px; font-weight: 300;
          color: rgba(51,65,85,0.68);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Bottom CTA bar ── */
        .cta-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 32px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(239,51,64,0.1);
          border-top: none;
          margin-top: 0;
          animation: fadeUp 0.6s ease 0.6s both;
        }

        .cta-left {
          font-size: 12px; font-weight: 300;
          color: rgba(51,65,85,0.58);
          letter-spacing: 0.06em;
        }

        .cta-left strong {
          font-weight: 600; color: rgba(17,24,39,0.78);
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #EF3340 0%, #334E9B 100%);
          border: none; cursor: pointer;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: filter 0.2s, transform 0.15s;
        }
        .cta-btn:hover { filter: brightness(1.1); }
        .cta-btn:active { transform: scale(0.97); }

        .cta-rating {
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; color: rgba(180,190,220,0.45);
        }
        .rating-stars { color: #EF3340; font-size: 13px; letter-spacing: 1px; }
        .rating-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px; font-weight: 700; color: #EF3340;
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .clinic-section {
            padding: 78px 0 68px;
          }

          .clinic-inner {
            padding: 0 24px;
          }

          .clinic-headline {
            font-size: clamp(40px, 5vw, 64px);
          }

          .clinic-hero {
            grid-template-columns: 1fr;
          }

          .hero-left {
            border-right: 0;
            border-bottom: 1px solid rgba(239,51,64,0.1);
          }

          .hero-right {
            min-height: 360px;
          }

          .usp-grid {
            grid-template-columns: 1fr;
          }

          .usp-card {
            border-right: 0;
            border-bottom: 1px solid rgba(239,51,64,0.08);
          }

          .usp-card:last-child {
            border-bottom: 0;
          }

          .cta-bar {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .clinic-section {
            padding: 30px 0 30px;
          }
          .cta-btn {
            padding: 12px 0px;
          }

          .clinic-inner {
            padding: 0 16px;
          }

          .clinic-intro {
            margin-bottom: 20px;
          }

          .clinic-headline {
            font-size: clamp(40px, 5vw, 64px);
            margin-bottom: 15px;
          }
          .diff-list {
            gap: 0px;
          }

          .clinic-body {
            font-size: 14px;
          }

          .hero-left {
            padding: 18px 22px;
          }

          .hero-right {
            min-height: 300px;
          }

          .usp-header {
            padding: 18px 16px;
          }

          .usp-header-title {
            font-size: 14px;
            letter-spacing: 0.14em;
          }

          .usp-card {
            padding: 28px 22px;
          }

          .cta-bar {
            padding: 20px;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div id="about" className="clinic-inner">
        <div className="clinic-intro">
          <h2 className="clinic-headline">
              Chennai's Leading<br />
              <em>Hair, Skin &amp; Dental</em> &nbsp;
              Clinic
            </h2>

            <p className="clinic-body">
              At <strong style={{ color: "#334E9B", fontWeight: 700 }}>Hair O Graft</strong>, we are committed to delivering
              advanced, result-driven treatments that focus on long-term results—not
              just temporary fixes. With expert doctors and modern technology, our
              clinic is a trusted destination for patients seeking effective hair
              restoration, skin care, and dental solutions.
            </p>
        </div>

        {/* ══════════════════════════════════════
            HERO: left text | right image
        ══════════════════════════════════════ */}
        <div className="clinic-hero">

          {/* LEFT */}
          <div className="hero-left">

            {/* What makes us different */}
            <div style={{ marginBottom: 6 }}>
              <div style={{
                fontSize: 19    , fontWeight: 600, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "rgba(239,51,64,0.55)",
                marginBottom: 12,
              }}>
                💡 What Makes Hair O Graft Different?
              </div>
              <div className="diff-list">
                {differentiators.map((d, i) => (
                  <div
                    key={i}
                    className="diff-item"
                    onMouseEnter={() => setActiveIdx(i)}
                    onMouseLeave={() => setActiveIdx(null)}
                  >
                    <div className="diff-check">✓</div>
                    <span className="diff-text">{d.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — image panel */}
          <div className="hero-right">
            <div className="hero-right-img" />
            <div className="hero-right-scrim" />
            <div className="hero-right-content">
              <div className="clinic-name-tag">🌟 &nbsp;Trusted Since Day One</div>
              <div className="clinic-name-big">
                Hair O <span>Graft</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            USP CARDS
        ══════════════════════════════════════ */}
        <div className="usp-section">
          <div className="usp-header">
            <div className="usp-header-line" />
            <div className="usp-header-title">🌟 Why Choose Us</div>
            <div className="usp-header-line-r" />
          </div>

          <div className="usp-grid">
            {usps.map((usp, i) => (
              <UspCard key={i} usp={usp} delay={i * 100 + 300} />
            ))}
          </div>

          {/* CTA bar */}
          <div className="cta-bar">
            <div className="cta-left">
              Trusted by <strong>1000+ patients</strong> across Chennai
            </div>

            <button
              className="cta-btn"
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
               Book Your Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
