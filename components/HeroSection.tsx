'use client'

import { useState, useEffect, useRef } from "react";

// ─── Replace with your actual video files ────────────────────────────────────
const videos = [
  { id: 0, src: "  https://ik.imagekit.io/sa0fw9cfy/videos.mp4" },
  // { id: 1, src: "/videos/skin-treatment.mp4" },
  // { id: 2, src: "/videos/dental-treatment.mp4" },
  // { id: 3, src: "/videos/clinic-tour.mp4" },
];

// ─── Replace with your actual banner images ───────────────────────────────────
const bgImages = [
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
];

// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { num: "1000+", label: "Happy Patients" },
  { num: "4.7 ★",  label: "Google Rating" },
  { num: "100%",   label: "Certified Doctors & Advanced Technology" },
  { num: "Safe",   label: "Effective & Affordable Treatments" },
];

export default function ClinicHero() {
  const [current,   setCurrent]   = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const bgRefs    = useRef<(HTMLDivElement   | null)[]>([]);

  // ── Video auto-advance every 4 s ─────────────────────────────────────────
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % videos.length), 4000);
    return () => clearInterval(t);
  }, []);

  // ── Play / pause videos ───────────────────────────────────────────────────
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) { v.currentTime = 0; v.play().catch(() => {}); }
      else v.pause();
    });
  }, [current]);

  // ── Background image auto-advance every 5 s ───────────────────────────────
  useEffect(() => {
    const t = setInterval(() => setCurrentBg((p) => (p + 1) % bgImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  // ── Restart Ken Burns animation on the newly active bg image ─────────────
  useEffect(() => {
    bgRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === currentBg) {
        el.style.animationName = "none";
        void el.offsetHeight;            // force reflow — resets the animation
        el.style.animationName = i % 2 === 0 ? "bgKenBurns" : "bgKenBurnsAlt";
      }
    });
  }, [currentBg]);

  return (
    <div className="font-sans min-h-screen bg-[#f7f9ff] flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        .grid-lines {
          background-image:
            linear-gradient(rgba(51,78,155,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51,78,155,0.045) 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .cta-clip {
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeInUp 0.55s ease 0.08s both; }
        .anim-2 { animation: fadeInUp 0.55s ease 0.22s both; }
        .anim-3 { animation: fadeInUp 0.55s ease 0.36s both; }
        .anim-4 { animation: fadeInUp 0.55s ease 0.50s both; }

        /* Ken Burns: slow zoom-in + subtle drift over exactly 5 s */
        @keyframes bgKenBurns {
          0%   { transform: scale(1)    translate(0%,    0%);    }
          50%  { transform: scale(1.12) translate(-0.8%, -0.5%); }
          100% { transform: scale(1)    translate(0%,    0%);    }
        }

        /* Alternate direction every other image (applied via JS class toggle) */
        @keyframes bgKenBurnsAlt {
          0%   { transform: scale(1)    translate(0%,   0%);   }
          50%  { transform: scale(1.12) translate(0.8%, 0.5%); }
          100% { transform: scale(1)    translate(0%,   0%);   }
        }

        .stat-card { position: relative; overflow: hidden; }
        .stat-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.22s;
        }
        .stat-card:hover::before { opacity: 1; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }
        .blink { animation: blink 1.2s ease-in-out infinite; }

        @media (max-width: 1024px) {
          .clinic-hero-shell {
            max-width: calc(100% - 32px) !important;
          }

          .clinic-hero-row {
            flex-direction: column;
            min-height: auto !important;
          }

          .clinic-hero-copy,
          .clinic-hero-video {
            width: 100% !important;
          }

          .clinic-hero-copy {
            min-height: 540px;
            border-right: 0;
            border-bottom: 1px solid rgba(51,78,155,0.15);
          }

          .clinic-hero-video {
            min-height: 220px;
          }

          .clinic-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          .clinic-hero-shell {
            max-width: 100% !important;
            border-left: 0;
            border-right: 0;
          }

          .clinic-hero-copy {
            min-height: 560px;
          }

          .clinic-hero-content {
            padding: 70px 22px !important;
          }

          .clinic-hero-title {
            font-size: 38px !important;
          }

          .clinic-hero-lead {
            max-width: none !important;
            font-size: 13px !important;
          }

          .clinic-hero-video {
            min-height: 320px;
          }

          .clinic-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ── Outer wrapper ── */}
      <div
        className="clinic-hero-shell w-full relative overflow-hidden bg-[#0a0a0a] border border-[rgba(51,78,155,0.12)]"
        style={{ maxWidth: 1450 }}
      >
        {/* Global BG atmosphere */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 28% 55%, rgba(51,78,155,0.16) 0%, transparent 58%)," +
              "radial-gradient(ellipse at 80% 18%, rgba(239,51,64,0.08) 0%, transparent 48%)," +
              "linear-gradient(135deg,#08090f 0%,#0d1020 45%,#09090b 100%)",
          }}
        />
        <div className="grain-overlay absolute inset-0 z-[1] opacity-[0.06] pointer-events-none" />
        <div className="grid-lines   absolute inset-0 z-[1] pointer-events-none" />

        {/* ════ HERO ROW ════ */}
        <div className="clinic-hero-row relative z-[2] flex" style={{ minHeight: 580 }}>

          {/* ── LEFT 52% — banner with Ken Burns bg images ── */}
          <div
            className="clinic-hero-copy relative overflow-hidden flex flex-col justify-center border-r border-[rgba(51,78,155,0.15)]"
            style={{ width: "52%" }}
          >
            {/* ── Background image stack ── */}
            {bgImages.map((src, i) => (
              <div
                key={i}
                ref={(el) => { bgRefs.current[i] = el; }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${src})`,
                  opacity: i === currentBg ? 1 : 0,
                  transition: "opacity 1400ms ease-in-out",
                  transformOrigin: "center",
                  animationDuration: "4s",
                  animationTimingFunction: "ease-in-out",
                  animationFillMode: "forwards",
                  /* animationName set dynamically via JS to enable restart */
                }}
              />
            ))}

            {/* Multi-layer dark overlay for text contrast */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, rgba(6,4,2,0.58) 0%, rgba(10,7,3,0.42) 55%, rgba(4,3,1,0.52) 100%)",
              }}
            />
            {/* Gold-tinted grain on top of images */}
            <div className="grain-overlay absolute inset-0 z-[2] opacity-[0.05] pointer-events-none" />
            {/* Bottom-edge vignette */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 z-[3] pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(5,7,15,0.38), transparent)" }}
            />

            {/* ── Text content ── */}
            <div className="clinic-hero-content relative z-[4] px-12 py-10">
              {/* Badge */}
              <div
                className="anim-1 self-start mb-5 px-3 py-[5px] inline-flex items-center gap-2
                            text-[10px] font-semibold tracking-[0.14em] uppercase
                            text-[#EF3340] bg-[rgba(51,78,155,0.09)]
                            border border-[rgba(51,78,155,0.28)] rounded-[2px]"
              >
                🏆&nbsp; Trusted Clinic in Chennai
              </div>

              {/* Headline */}
              <h1
                className="clinic-hero-title font-playfair anim-2 font-black text-[#f5f0e8] leading-[1.18] tracking-[-0.01em] mb-4"
                style={{ fontSize: 50 }}
              >
                Advanced Care for<br />
                <span className="text-[#EF3340] italic">Hair, Skin &amp;</span><br />
                Dental Treatments
              </h1>

              {/* Sub-headline */}
              <p
                className="clinic-hero-lead font-dm anim-3 font-light leading-[1.72] text-[#fff] mb-8"
                style={{ fontSize: 16, maxWidth: 340 }}
              >
                Personalized, technology-driven treatments designed to restore hair,
                enhance skin, and improve your smile with long-lasting results.
              </p>

              {/* CTA */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                className="cta-clip anim-4 self-start inline-flex items-center gap-2
                           font-bold tracking-[0.06em] text-white
                           bg-gradient-to-br from-[#EF3340] to-[#334E9B]
                           border-0 cursor-pointer
                           transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{ fontSize: 13, padding: "13px 28px" }}
              >
                Book Your Consultation
              </button>

              {/* Image dot indicators */}
              <div className="flex items-center gap-[6px] mt-8">
                {bgImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentBg(i)}
                    aria-label={`Image ${i + 1}`}
                    className="h-[2px] rounded-[1px] border-0 cursor-pointer p-0 transition-all duration-400"
                    style={{
                      width: i === currentBg ? 32 : 16,
                      background:
                        i === currentBg ? "#EF3340" : "rgba(239,51,64,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT 48% — video carousel ── */}
          <div
            className="clinic-hero-video relative bg-black overflow-hidden"
            style={{ width: "48%" }}
          >
            {videos.map((vid, i) => (
              <video
                key={vid.id}
                ref={(el) => { videoRefs.current[i] = el; }}
                src={vid.src}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 900ms ease-in-out",
                }}
              />
            ))}

            {/* Left-edge blend */}
            <div
              className="absolute inset-y-0 left-0 w-14 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right,rgba(10,10,10,0.6),transparent)" }}
            />

            {/* REC badge */}
            <div
              className="absolute top-4 right-4 z-20
                         flex items-center gap-[6px]
                         bg-[rgba(0,0,0,0.6)] border border-[rgba(51,78,155,0.22)]
                         px-3 py-[5px]
                         text-[9px] font-bold tracking-[0.15em] uppercase text-[#EF3340]"
            >
              <span className="blink inline-block w-[6px] h-[6px] rounded-full bg-red-500" />
              Live Treatments
            </div>

            {/* Video dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-[7px]">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Video ${i + 1}`}
                  className="block h-[2px] rounded-[1px] border-0 cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === current ? 36 : 24,
                    background: i === current ? "#EF3340" : "rgba(239,51,64,0.28)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="relative z-[2] h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent 0%,rgba(51,78,155,0.2) 30%,rgba(51,78,155,0.08) 70%,transparent 100%)",
          }}
        />

        {/* ════ STATS ROW ════ */}
        <div
          className="clinic-stats relative z-[2] grid grid-cols-4 bg-[rgba(7,6,4,0.92)]
                     border-t border-[rgba(51,78,155,0.1)]"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`stat-card flex flex-col justify-center px-7 py-5
                          cursor-default transition-colors duration-200
                          hover:bg-[rgba(51,78,155,0.04)]
                          ${i < 3 ? "border-r border-[rgba(51,78,155,0.07)]" : ""}`}
            >
              <div
                className="font-playfair font-black text-[#EF3340] leading-none mb-[6px]"
                style={{ fontSize: 22 }}
              >
                {s.num}
              </div>
              <div
                className="font-dm font-normal text-[#fff]
                           uppercase tracking-[0.09em] leading-[1.45]"
                style={{ fontSize: 10 }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
