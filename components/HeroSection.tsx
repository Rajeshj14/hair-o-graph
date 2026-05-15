"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
];

const stats = [
  { num: "1000+", label: "Happy Patients" },
  { num: "Top", label: " Rated Clinic" },
  { num: "100%", label: "Effective Treatments " },
  // { num: "Safe", label: "Effective Treatments" },
];

export default function ClinicHero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [heroAppointmentDateTime, setHeroAppointmentDateTime] = useState("");
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentBg((prev) => (prev + 1) % bgImages.length),
      4200
    );

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    bgRefs.current.forEach((el, index) => {
      if (!el) return;
      if (index === currentBg) {
        el.style.animationName = "none";
        void el.offsetHeight;
        el.style.animationName =
          index % 2 === 0 ? "heroKenBurns" : "heroKenBurnsAlt";
      }
    });
  }, [currentBg]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState({ status: "submitting", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const appointmentDateTime = String(formData.get("appointmentDateTime") ?? "").trim();
    const concern = String(formData.get("treatment") ?? "").trim() || "Not specified";
    const pageUrl = window.location.href;
    const source = "Hero Form";

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          phone,
          email,
          appointmentDateTime,
          concern,
          condition: concern,
          pageUrl,
          url: pageUrl,
        }),
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok || !responseData?.success) {
        throw new Error(responseData?.error || responseData?.excelError || "Submission failed");
      }

      setSubmissionState({
        status: "success",
        message: "Your appointment request was submitted successfully.",
      });
      form.reset();
      setHeroAppointmentDateTime("");
      window.location.assign("/thank-you");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmissionState({ status: "error", message: message || "Submission failed." });
    }
  };

  return (
    <section className="hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #08090f;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          padding: 112px 24px 32px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform-origin: center;
          transition: opacity 1400ms ease-in-out;
          animation-duration: 4200ms;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }

        .hero-bg.is-active {
          opacity: 1;
        }

        @keyframes heroKenBurns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-0.8%, -0.5%); }
          100% { transform: scale(1) translate(0, 0); }
        }

        @keyframes heroKenBurnsAlt {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(0.8%, 0.5%); }
          100% { transform: scale(1) translate(0, 0); }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.64) 47%, rgba(3,7,18,0.5) 100%),
            linear-gradient(to top, rgba(3,7,18,0.84), rgba(3,7,18,0.12) 58%);
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          width: min(100%, 1240px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(360px, 0.74fr);
          gap: 58px;
          align-items: center;
        }

        .hero-kicker {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 20px;
          padding: 7px 14px;
          border: 1px solid rgba(239,51,64,0.35);
          background: rgba(239,51,64,0.1);
          color: #EF3340;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 0;
          max-width: 680px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: 0;
          color: #fffaf0;
        }

        .hero-title-line {
          display: inline-flex;
          align-items: baseline;
          flex-wrap: wrap;
          column-gap: 0;
          row-gap: 0;
        }

        .hero-title em {
          color: #EF3340;
          font-style: italic;
        }

        .hero-title span {
          color: #b7c7ff;
        }

        .hero-title-rotator {
          display: inline-block;
          position: relative;
          width: 8.35em;
          height: 1.16em;
          margin: 0;
          overflow: hidden;
          vertical-align: -0.16em;
          line-height: 1.08;
        }

        .hero-title-rotator .hero-word {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          display: block;
          font-style: italic;
          white-space: nowrap;
          text-align: left;
          opacity: 0;
          transform: translateY(110%);
          animation-duration: 7.2s;
          animation-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .hero-word-hair {
          color: #EF3340;
          animation-name: heroHairLoop;
        }

        .hero-word-skin {
          color: #b7c7ff;
          animation-name: heroSkinLoop;
        }

        .hero-word-dental {
          color: #fffaf0;
          animation-name: heroDentalLoop;
        }

        .hero-title-static {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes heroHairLoop {
          0%, 24% {
            opacity: 1;
            transform: translateY(0);
          }
          31%, 98% {
            opacity: 0;
            transform: translateY(-115%);
          }
          99% {
            opacity: 0;
            transform: translateY(115%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroSkinLoop {
          0%, 31% {
            opacity: 0;
            transform: translateY(115%);
          }
          38%, 57% {
            opacity: 1;
            transform: translateY(0);
          }
          64%, 100% {
            opacity: 0;
            transform: translateY(115%);
          }
        }

        @keyframes heroDentalLoop {
          0%, 64% {
            opacity: 0;
            transform: translateY(115%);
          }
          71%, 91% {
            opacity: 1;
            transform: translateY(0);
          }
          98%, 100% {
            opacity: 0;
            transform: translateY(-115%);
          }
        }

        .hero-lead {
          max-width: 520px;
          margin: 10px 0 0;
          color: rgba(255,255,255,0.78);
          font-size: 16px;
          line-height: 1.82;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-top: 24px;
        }

        .hero-cta {
          border: 0;
          cursor: pointer;
          padding: 14px 30px;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          background: linear-gradient(135deg, #EF3340, #334E9B);
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: filter 0.2s ease, transform 0.16s ease;
        }

        .hero-cta:hover {
          filter: brightness(1.1);
        }

        .hero-cta:active {
          transform: scale(0.98);
        }

        .hero-note {
          color: rgba(255,255,255,0.64);
          font-size: 12px;
          line-height: 1.5;
        }

        .hero-form-wrap {
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(14px);
        }

        .hero-form {
          padding: 30px;
          color: #111827;
        }

        .form-kicker {
          display: inline-flex;
          margin-bottom: 12px;
          padding: 6px 11px;
          border: 1px solid rgba(239,51,64,0.24);
          background: rgba(239,51,64,0.08);
          color: #EF3340;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .form-title {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          color: #111827;
          font-size: 34px;
          font-weight: 900;
          line-height: 1.05;
        }

        .form-copy {
          margin: 10px 0 22px;
          color: rgba(51,65,85,0.72);
          font-size: 13.5px;
          line-height: 1.7;
        }

        .hero-field {
          width: 100%;
          min-height: 48px;
          border: 1px solid rgba(51,78,155,0.18);
          background: #f8fbff;
          padding: 13px 14px;
          color: #111827;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-field::placeholder {
          color: rgba(51,65,85,0.52);
        }

        .hero-field:focus {
          border-color: rgba(239,51,64,0.55);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(239,51,64,0.1);
        }

        .hero-date-wrap {
          position: relative;
        }

        .hero-date-placeholder {
          pointer-events: none;
          position: absolute;
          left: 14px;
          top: 50%;
          z-index: 1;
          transform: translateY(-50%);
          color: rgba(51,65,85,0.52);
          font-size: 14px;
        }

        .hero-date-field.is-empty {
          color: transparent;
        }

        .hero-date-field:focus {
          color: #111827;
        }

        .hero-date-wrap:focus-within .hero-date-placeholder {
          display: none;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .form-wide {
          grid-column: 1 / -1;
        }

        .form-submit {
          width: 100%;
          margin-top: 18px;
          border: 0;
          cursor: pointer;
          padding: 15px 22px;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          background: linear-gradient(135deg, #EF3340, #334E9B);
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          transition: filter 0.2s ease, transform 0.16s ease;
        }

        .form-submit:hover {
          filter: brightness(1.08);
        }

        .form-submit:active {
          transform: scale(0.98);
        }

        .hero-stats {
          width: min(100%, 650px);
          margin: 28px 0 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border: 1px solid rgba(255,255,255,0.13);
          background: rgba(4,6,15,0.58);
          backdrop-filter: blur(12px);
        }

        .hero-stat {
          padding: 18px 22px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }

        .hero-stat:last-child {
          border-right: 0;
        }

        .hero-stat strong {
          display: block;
          color: #EF3340;
          font-family: 'Outfit', sans-serif;
          font-size: 25px;
          line-height: 1;
        }

        .hero-stat span {
          display: block;
          margin-top: 7px;
          color: rgba(255,255,255,0.72);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.45;
        }

        .hero-dots {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 30px;
        }

        .hero-dot {
          height: 2px;
          border: 0;
          padding: 0;
          cursor: pointer;
          background: rgba(239,51,64,0.32);
          transition: width 0.25s ease, background 0.25s ease;
        }

        .hero-dot.is-active {
          background: #EF3340;
        }

        @media (max-width: 1080px) {
          .hero-section {
            padding-top: 104px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .hero-form-wrap {
            max-width: 640px;
          }
        }

        @media (max-width: 680px) {
          .hero-section {
            padding: 92px 16px 24px;
          }

          .hero-overlay {
            background:
              linear-gradient(180deg, rgba(3,7,18,0.9) 0%, rgba(3,7,18,0.65) 52%, rgba(3,7,18,0.92) 100%);
          }

          .hero-lead {
            margin: 5px 0 0;
            font-size: 14px;
            line-height: 1.75;
          }

          .hero-form {
            padding: 22px;
          }
          .hero-actions{
           margin-top: 12px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 18px;
          }

          .hero-stat:nth-child(2) {
            border-right: 0;
          }

          .hero-stat {
            padding: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .hero-stat:nth-child(n + 3) {
            border-bottom: 0;
          }
        }
      `}</style>

      {bgImages.map((src, index) => (
        <div
          key={src}
          ref={(el) => {
            bgRefs.current[index] = el;
          }}
          className={`hero-bg ${index === currentBg ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-overlay" />

      <div className="w-full">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">1# Trusted Clinic in Chennai</div>
            <h1 className="hero-title">
              Advanced Care for
              <span className="hero-title-static">
                Hair, Skin and Dental
              </span>
              <span className="hero-title-line" aria-hidden="true">
                <span className="hero-title-rotator">
                  <em className="hero-word hero-word-hair">Hair Treatments</em>
                  <span className="hero-word hero-word-skin">
                    Skin Treatments
                  </span>
                  <span className="hero-word hero-word-dental">
                    Dental Treatments
                  </span>
                </span>
              </span>
            </h1>
            <p className="hero-lead">
              Personalized, technology-driven treatments designed to restore
              hair, enhance skin, and improve your smile with long-lasting
              results.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="hero-cta"
                onClick={() =>
                  window.dispatchEvent(new Event("open-booking-modal"))
                }
              >
                Book your Free Consultation
              </button>
              <span className="hero-note">
                Hair, skin, and dental care under one roof.
              </span>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.num}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-dots" aria-label="Hero banner images">
              {bgImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show banner ${index + 1}`}
                  className={`hero-dot ${
                    index === currentBg ? "is-active" : ""
                  }`}
                  style={{ width: index === currentBg ? 36 : 18 }}
                  onClick={() => setCurrentBg(index)}
                />
              ))}
            </div>
          </div>

          <div className="hero-form-wrap">
            <form className="hero-form" onSubmit={handleSubmit}>
              <div className="form-kicker">Appointment Form</div>
              <h2 className="form-title">Book an Appointment Now</h2>
              <p className="form-copy">
                 Restore Your Confidence. Enhance Your Look. Feel Your Best.
              </p>

              {submissionState.status !== "idle" && (
                <div
                  className={
                    submissionState.status === "success"
                      ? "mb-3 text-sm text-green-700"
                      : "mb-3 text-sm text-red-700"
                  }
                >
                  {submissionState.message}
                </div>
              )}

              <div className="form-grid">
                <input
                  className="hero-field"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="hero-field"
                  name="phone"
                  placeholder="Phone"
                  type="tel"
                  required
                />
                <input
                  className="hero-field form-wide"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <select className="hero-field" name="treatment" defaultValue="">
                  <option value="" disabled>
                    Treatment
                  </option>
                  <option>Hair Fall / Hair Loss</option>
                  <option>Hair Transplant</option>
                  <option>Acne / Skin Treatment</option>
                  <option>Pigmentation / Glow Treatment</option>
                  <option>Laser Hair Reduction</option>
                  <option>Dental Pain / RCT</option>
                  <option>Aligners / Smile Correction</option>
                  <option>Kids Dentistry</option>
                </select>
                <div className="hero-date-wrap">
                  {!heroAppointmentDateTime && (
                    <span className="hero-date-placeholder">Appointment Date</span>
                  )}
                  <input
                    className={`hero-field hero-date-field ${
                      heroAppointmentDateTime ? "" : "is-empty"
                    }`}
                    name="appointmentDateTime"
                    type="datetime-local"
                    aria-label="Appointment Date and Time"
                    value={heroAppointmentDateTime}
                    onChange={(event) => setHeroAppointmentDateTime(event.target.value)}
                  />
                </div>
              </div>

              <button
                className="form-submit"
                type="submit"
                disabled={submissionState.status === "submitting"}
              >
                {submissionState.status === "submitting" ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
