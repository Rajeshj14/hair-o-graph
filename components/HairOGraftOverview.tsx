"use client";

import { useEffect, useRef } from "react";

const differentiators = [
  { label: "Root Cause-Based Treatment Approach", icon: "🔬" },
  { label: "Combination of Medical Expertise + Advanced Technology", icon: "💡" },
  { label: "Evidence-Based Treatment Protocols", icon: "📋" },
  { label: "Personalized Care for Every Patient", icon: "🤝" },
  { label: "Safe, Effective & Minimally Invasive Treatments", icon: "🛡️" },
];

const missions = [
  "Restore Confidence",
  "Enhance Appearance",
  "Achieve Healthy Hair, Skin & Smile",
];

export default function HairOGraftOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hog2-anim");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("hog2-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="hog2-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Figtree:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --red: #EF3340;
          --red-dark: #b71c28;
          --red-pale: #fff0f1;
          --ink: #0d1117;
          --ink-muted: #4a5568;
          --ink-faint: #94a3b8;
          --surface: #ffffff;
          --surface-2: #f8fafc;
          --surface-3: #f1f5f9;
          --border: rgba(15,23,42,0.10);
          --border-strong: rgba(15,23,42,0.18);
          --sans: 'Figtree', sans-serif;
          --serif: 'Cormorant Garamond', Georgia, serif;
        }

        .hog2-root {
          padding: 0;
          background: var(--surface);
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        /* ── HERO BAND ── */
        .hog2-hero {
          position: relative;
          background: var(--ink);
          padding: 80px 48px 72px;
          overflow: hidden;
        }

        .hog2-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 700px 400px at 80% 50%, rgba(239,51,64,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 400px 600px at 10% 100%, rgba(239,51,64,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .hog2-hero-grid {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
        }

        .hog2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          padding: 6px 16px 6px 8px;
          border: 1px solid rgba(239,51,64,0.4);
          background: rgba(239,51,64,0.10);
        }

        .hog2-eyebrow-dot {
          width: 6px;
          height: 6px;
          background: var(--red);
          border-radius: 50%;
          animation: hog2-pulse 2s ease infinite;
        }

        @keyframes hog2-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .hog2-eyebrow span {
          color: var(--red);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .hog2-h1 {
          margin: 0 0 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(42px, 5.5vw, 56px);
          font-weight: 700;
          line-height: 1.0;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .hog2-h1 em {
          color: var(--red);
          font-style: italic;
        }

        .hog2-hero-copy {
          margin: 0;
          max-width: 560px;
          color: rgba(255,255,255,0.55);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* mission pill stack */
        .hog2-mission-block {
          display: flex;
          flex-direction: column;
          gap: 0;
          min-width: 260px;
        }

        .hog2-mission-label {
          color: rgba(255,255,255,0.35);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hog2-mission-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
        }

        .hog2-mission-item:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .hog2-mission-num {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--red);
          color: #fff;
          font-size: 11px;
          font-weight: 800;
        }

        /* ── BODY SECTION ── */
        .hog2-body {
          max-width: 1160px;
          margin: 0 auto;
          padding: 72px 48px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 48px;
          align-items: start;
        }

        /* differentiator list */
        .hog2-diff-header {
          margin-bottom: 36px;
        }

        .hog2-tag {
          display: inline-block;
          padding: 4px 12px;
          background: var(--red-pale);
          color: var(--red);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hog2-h2 {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(30px, 3.5vw, 34px);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.08;
        }

        .hog2-diff-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hog2-diff-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 0;
          align-items: stretch;
          border-top: 1px solid var(--border);
          transition: background 0.2s ease;
        }

        .hog2-diff-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .hog2-diff-item:hover {
          background: var(--red-pale);
        }

        .hog2-diff-item:hover .hog2-diff-num {
          background: var(--red);
          color: #fff;
        }

        .hog2-diff-num {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: var(--red);
          background: var(--surface-2);
          border-right: 1px solid var(--border);
          letter-spacing: 0.04em;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .hog2-diff-text {
          padding: 20px 22px;
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.45;
        }

        /* USP sidebar image card */
        .hog2-usp-card {
          position: sticky;
          top: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hog2-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--surface-3);
        }

        .hog2-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s cubic-bezier(.22,1,.36,1);
        }

        .hog2-img-wrap:hover img {
          transform: scale(1.04);
        }

        .hog2-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(13,17,23,0.82) 100%
          );
          pointer-events: none;
        }

        .hog2-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 24px 24px;
        }

        .hog2-img-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--red);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 5px 12px;
          margin-bottom: 10px;
        }

        .hog2-img-badge-dot {
          width: 5px;
          height: 5px;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          animation: hog2-pulse 2s ease infinite;
        }

        .hog2-img-title {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }

        .hog2-img-sub {
          margin: 6px 0 0;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
        }



        /* ── ANIMATIONS ── */
        .hog2-anim {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1), transform 0.65s cubic-bezier(.22,1,.36,1);
        }

        .hog2-anim.hog2-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hog2-anim:nth-child(2) { transition-delay: 0.08s; }
        .hog2-anim:nth-child(3) { transition-delay: 0.16s; }
        .hog2-anim:nth-child(4) { transition-delay: 0.22s; }
        .hog2-anim:nth-child(5) { transition-delay: 0.28s; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hog2-hero { padding: 56px 24px 52px; }

          .hog2-hero-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .hog2-mission-block {
            min-width: auto;
            border-top: 1px solid rgba(255,255,255,0.10);
            padding-top: 18px;
          }

          .hog2-body {
            grid-template-columns: 1fr;
            padding: 48px 24px;
            gap: 40px;
          }

          .hog2-usp-card {
            position: static;
          }
        }

        @media (max-width: 540px) {
          .hog2-h1 { font-size: 38px; margin: 0 0 14px;}
          .hog2-hero { padding: 44px 20px 44px; }
          .hog2-body { padding: 40px 20px; }
          .hog2-usp-stats { grid-template-columns: 1fr; }
          .hog2-usp-quote { font-size: 22px; }
          .hog2-h2 { font-size: 28px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="hog2-hero">
        <div className="hog2-hero-grid">
          <div>
            <div className="hog2-eyebrow hog2-anim">
              <span className="hog2-eyebrow-dot" />
              <span>Chennai's Premier Clinic</span>
            </div>

            <h2 className="hog2-h1 hog2-anim">
              Advanced Care for<br />
              <em>Hair, Skin &amp; Dental</em>
            </h2>

            <p className="hog2-hero-copy hog2-anim">
              At Hair O Graft, we deliver advanced, result-driven treatments
              focused on long-term outcomes—not temporary fixes. Expert doctors,
              modern technology, and proven protocols in every visit.
            </p>
          </div>

          <div className="hog2-mission-block hog2-anim">
            <p className="hog2-mission-label">Our Mission</p>
            {missions.map((item, i) => (
              <div key={item} className="hog2-mission-item">
                <span className="hog2-mission-num">0{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="hog2-body">
        {/* Differentiators */}
        <div>
          <div className="hog2-diff-header hog2-anim">
            <span className="hog2-tag">Why Choose Us</span>
            <h3 className="hog2-h2">
              What Makes Hair O Graft<br />Different?
            </h3>
          </div>

          <ul className="hog2-diff-list">
            {differentiators.map((item, i) => (
              <li key={item.label} className="hog2-diff-item hog2-anim">
                <span className="hog2-diff-num">0{i + 1}</span>
                <span className="hog2-diff-text">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Card */}
        <div className="hog2-usp-card hog2-anim">
          <div className="hog2-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=720&q=80&auto=format&fit=crop"
              alt="Hair O Graft — Advanced Hair, Skin & Dental Clinic"
            />
            <div className="hog2-img-overlay" />
            <div className="hog2-img-caption">
              <div className="hog2-img-badge">
                <span className="hog2-img-badge-dot" />
                Chennai's Leading Clinic
              </div>
              <h4 className="hog2-img-title">
                Hair, Skin &amp; Dental — All Under One Roof
              </h4>
              <p className="hog2-img-sub">
                Expert doctors · Modern technology · Lasting results
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
