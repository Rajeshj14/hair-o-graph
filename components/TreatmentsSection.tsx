"use client";

const treatmentGroups = [
  {
    title: "Hair",
    subtitle: "Follicle-focused restoration",
    number: "01",
    metric: "6 protocols",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Advanced solutions to control hair fall, restore growth, and improve scalp health.",
    items: [
      ["PRP (Platelet-Rich Plasma)", "Stimulates natural hair growth using your own blood plasma."],
      ["GFC (Growth Factor Concentrate)", "Advanced therapy that boosts hair strength and density."],
      ["Hair Transplant", "Permanent solution to restore hair in bald or thinning areas."],
      ["Hair Regrowth Treatments", "Non-surgical treatments to reduce hair fall and improve thickness."],
      ["Dandruff & Scalp Treatment", "Treats scalp infections, itching, and flaking issues."],
      ["Hair Patch / Cosmetic Hair System", "Instant solution for visible hair loss without surgery."],
    ],
  },
  {
    title: "Skin",
    subtitle: "Glow, clarity, texture",
    number: "02",
    metric: "8 solutions",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Personalized treatments to enhance skin glow, clarity, and overall appearance.",
    items: [
      ["Hydrafacial / Glow Facial", "Deep cleansing facial for instant glow and hydration."],
      ["Acne & Acne Scar Treatment", "Reduces pimples and improves skin texture."],
      ["Pigmentation & Tan Removal", "Evens skin tone and reduces dark patches."],
      ["Chemical Peel", "Removes dead skin and improves brightness and texture."],
      ["Laser Hair Reduction", "Long-term solution for unwanted body hair."],
      ["Carbon Peel", "Advanced facial for oil control, pores, and skin brightness."],
      ["Botox & Fillers", "Reduces wrinkles and enhances facial features."],
      ["Glutathione IV Therapy", "Improves skin tone and overall radiance."],
    ],
  },
  {
    title: "Dental",
    subtitle: "Smile architecture",
    number: "03",
    metric: "7 services",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    summary:
      "Comprehensive care for healthy teeth, strong gums, and confident smiles.",
    items: [
      ["Root Canal Treatment (RCT)", "Removes infection and saves the natural tooth."],
      ["Tooth Aligners / Invisalign", "Straightens teeth with invisible and comfortable aligners."],
      ["Dental Implants", "Permanent replacement for missing teeth."],
      ["Teeth Whitening", "Enhances smile by removing stains and discoloration."],
      ["Dental Crown", "Protects and restores damaged or weak teeth."],
      ["Kids Dentistry", "Gentle and safe dental care for children."],
      ["General Dental Check-up", "Early detection and prevention of dental issues."],
    ],
  },
];

export default function TreatmentsSection() {
  return (
    <section className="tx-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .tx-section {
          position: relative;
          overflow: hidden;
          padding: 110px 24px 116px;
          color: #f6f0e5;
          background: linear-gradient(180deg, #050504 0%, #0b0b08 42%, #050504 100%);
          font-family: 'DM Sans', sans-serif;
        }

        .tx-shell {
          position: relative;
          z-index: 1;
          max-width: 1340px;
          margin: 0 auto;
        }

        .tx-top {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.62fr);
          gap: 46px;
          align-items: center;
          margin-bottom: 46px;
        }

        .tx-kicker {
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

        .tx-title {
          margin: 0;
          max-width: 760px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: 0;
        }

        .tx-title em {
          color: #EF3340;
          font-style: italic;
        }

        .tx-copy {
          margin: 0;
          max-width: 470px;
          color: rgba(240,235,220,0.55);
          font-size: 14px;
          line-height: 1.85;
        }

        .tx-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .tx-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 36px;
          padding: 0 13px;
          border: 1px solid rgba(239,51,64,0.16);
          background: rgba(255,255,255,0.035);
          color: rgba(240,235,220,0.68);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .tx-pill b {
          color: #EF3340;
          font-weight: 900;
        }

        .tx-mast {
          position: relative;
          min-height: 430px;
          margin-bottom: 20px;
          overflow: hidden;
          border: 1px solid rgba(239,51,64,0.18);
          background: #080806;
          box-shadow: 0 26px 90px rgba(0,0,0,0.42);
        }

        .tx-mast-img {
          position: absolute;
          inset: 0;
          background-image: url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center 42%;
          filter: grayscale(0.18) brightness(0.62) contrast(1.08);
          transform: scale(1.02);
        }

        .tx-mast::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(5,5,4,0.95), rgba(5,5,4,0.38), rgba(5,5,4,0.82)),
            linear-gradient(to top, rgba(5,5,4,0.98), transparent 64%);
        }

        .tx-mast-content {
          position: absolute;
          left: 38px;
          right: 38px;
          bottom: 34px;
          z-index: 1;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
        }

        .tx-mast-label {
          margin-bottom: 10px;
          color: rgba(239,51,64,0.7);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .tx-mast h3 {
          margin: 0;
          max-width: 640px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(32px, 4vw, 60px);
          font-weight: 900;
          line-height: 1;
        }

        .tx-mast-badge {
          flex: 0 0 auto;
          border-left: 1px solid rgba(239,51,64,0.32);
          padding-left: 24px;
          color: rgba(240,235,220,0.64);
          font-size: 12px;
          line-height: 1.7;
          max-width: 260px;
        }

        .tx-mast-stats {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, auto);
          border: 1px solid rgba(239,51,64,0.16);
          background: rgba(5,5,4,0.7);
          backdrop-filter: blur(10px);
        }

        .tx-stat {
          min-width: 94px;
          padding: 13px 14px;
          border-right: 1px solid rgba(239,51,64,0.13);
        }

        .tx-stat:last-child {
          border-right: 0;
        }

        .tx-stat strong {
          display: block;
          color: #EF3340;
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          line-height: 1;
        }

        .tx-stat span {
          display: block;
          margin-top: 5px;
          color: rgba(240,235,220,0.46);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tx-menu {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: start;
        }

        .tx-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(239,51,64,0.16);
          background:
            linear-gradient(180deg, rgba(18,17,12,0.96), rgba(8,8,6,0.98));
          box-shadow: 0 20px 70px rgba(0,0,0,0.2);
          transition: border-color 0.28s ease, transform 0.28s ease, background 0.28s ease, box-shadow 0.28s ease;
        }

        .tx-card:hover {
          transform: translateY(-6px);
          border-color: rgba(239,51,64,0.46);
          background: rgba(14,13,9,0.96);
          box-shadow: 0 30px 90px rgba(0,0,0,0.34);
        }

        .tx-card-hero {
          position: relative;
          height: 236px;
          overflow: hidden;
        }

        .tx-card-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(0.28) brightness(0.64) contrast(1.08);
          transition: transform 0.7s ease, filter 0.4s ease;
        }

        .tx-card:hover .tx-card-img {
          transform: scale(1.08);
          filter: grayscale(0.08) brightness(0.75) contrast(1.12);
        }

        .tx-card-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(5,5,4,0.08), rgba(5,5,4,0.94)),
            linear-gradient(130deg, rgba(239,51,64,0.2), transparent 50%);
        }

        .tx-card-number {
          position: absolute;
          top: 18px;
          left: 20px;
          z-index: 1;
          font-family: 'Outfit', sans-serif;
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          color: rgba(239,51,64,0.78);
        }

        .tx-card-metric {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
          padding: 7px 10px;
          border: 1px solid rgba(239,51,64,0.26);
          background: rgba(5,5,4,0.58);
          color: rgba(240,235,220,0.68);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tx-card-title {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 20px;
          z-index: 1;
        }

        .tx-card-title span {
          display: block;
          margin-bottom: 8px;
          color: rgba(239,51,64,0.68);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .tx-card-title h3 {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-size: 42px;
          font-weight: 900;
          line-height: 0.95;
        }

        .tx-summary {
          margin: 0;
          padding: 21px 22px;
          min-height: 104px;
          border-bottom: 1px solid rgba(239,51,64,0.1);
          color: rgba(240,235,220,0.54);
          font-size: 13px;
          line-height: 1.72;
        }

        .tx-list {
          padding: 8px 0 10px;
        }

        .tx-item {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 11px;
          padding: 15px 20px;
          border-bottom: 1px solid rgba(239,51,64,0.07);
          transition: background 0.22s ease;
        }

        .tx-item:last-child {
          border-bottom: 0;
        }

        .tx-item:hover {
          background: rgba(239,51,64,0.06);
        }

        .tx-check {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(239,51,64,0.4);
          color: #EF3340;
          font-size: 11px;
          line-height: 1;
          transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease;
        }

        .tx-item:hover .tx-check {
          background: #EF3340;
          border-color: #EF3340;
          color: #fff;
        }

        .tx-name {
          margin: 0 0 4px;
          color: rgba(255,250,238,0.95);
          font-size: 13px;
          font-weight: 800;
          line-height: 1.34;
        }

        .tx-desc {
          margin: 0;
          color: rgba(240,235,220,0.44);
          font-size: 12.5px;
          line-height: 1.6;
        }

        .tx-bottom {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
          margin-top: 30px;
          padding: 24px 28px;
          border: 1px solid rgba(239,51,64,0.14);
          background:
            linear-gradient(90deg, rgba(239,51,64,0.08), rgba(239,51,64,0.015)),
            rgba(7,7,5,0.72);
        }

        .tx-bottom p {
          margin: 0;
          color: rgba(240,235,220,0.54);
          font-size: 13px;
          line-height: 1.7;
        }

        .tx-cta {
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
          white-space: nowrap;
        }

        .tx-cta:hover {
          filter: brightness(1.1);
        }

        .tx-cta:active {
          transform: scale(0.98);
        }

        @media (max-width: 1060px) {
          .tx-top {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 34px;
          }

          .tx-copy {
            max-width: 700px;
          }

          .tx-intro-side {
            max-width: 700px;
          }

          .tx-menu {
            grid-template-columns: 1fr;
          }

          .tx-mast-stats {
            left: 24px;
            right: 24px;
            grid-template-columns: repeat(3, 1fr);
          }

          .tx-summary {
            min-height: auto;
          }
        }

        @media (max-width: 680px) {
          .tx-section {
            padding: 78px 16px 86px;
          }

          .tx-mast {
            min-height: 430px;
          }

          .tx-mast-content {
            left: 22px;
            right: 22px;
            bottom: 22px;
            display: block;
          }

          .tx-mast-stats {
            top: 18px;
            left: 18px;
            right: 18px;
          }

          .tx-stat {
            min-width: 0;
            padding: 11px 10px;
          }

          .tx-stat strong {
            font-size: 19px;
          }

          .tx-mast-badge {
            margin-top: 18px;
            padding-left: 0;
            border-left: 0;
            max-width: none;
          }

          .tx-card-title h3 {
            font-size: 34px;
          }

          .tx-bottom {
            grid-template-columns: 1fr;
          }

          .tx-cta {
            width: 100%;
          }
        }
      `}</style>

      <div className="tx-shell">
        <div className="tx-top">
          <div>
            <div className="tx-kicker">Our Treatments</div>
            <h2 className="tx-title">
              Designed for <em>Visible</em> Results
            </h2>
          </div>
          <div className="tx-intro-side">
            <p className="tx-copy">
              A complete hair, skin, and dental treatment suite built around
              diagnosis, precision technology, and long-term improvement instead
              of temporary fixes.
            </p>
            <div className="tx-pill-row">
              <span className="tx-pill"><b>21+</b> treatments</span>
              <span className="tx-pill"><b>3</b> specialties</span>
              <span className="tx-pill"><b>1</b> care plan</span>
            </div>
          </div>
        </div>

        <div className="tx-mast">
          <div className="tx-mast-img" />
          <div className="tx-mast-stats">
            <div className="tx-stat">
              <strong>Hair</strong>
              <span>Restore</span>
            </div>
            <div className="tx-stat">
              <strong>Skin</strong>
              <span>Refine</span>
            </div>
            <div className="tx-stat">
              <strong>Dental</strong>
              <span>Smile</span>
            </div>
          </div>
          <div className="tx-mast-content">
            <div>
              <div className="tx-mast-label">Hair O Graft Treatment Menu</div>
              <h3>One clinic. Three specialties. Clear treatment pathways.</h3>
            </div>
            <div className="tx-mast-badge">
              Hair restoration, clinical skin care, and dental solutions planned
              with expert consultation and modern equipment.
            </div>
          </div>
        </div>

        <div className="tx-menu">
          {treatmentGroups.map((group) => (
            <article className="tx-card" key={group.title}>
              <div className="tx-card-hero">
                <div
                  className="tx-card-img"
                  style={{ backgroundImage: `url(${group.image})` }}
                />
                <div className="tx-card-number">{group.number}</div>
                <div className="tx-card-metric">{group.metric}</div>
                <div className="tx-card-title">
                  <span>{group.subtitle}</span>
                  <h3>{group.title}</h3>
                </div>
              </div>

              <p className="tx-summary">{group.summary}</p>

              <div className="tx-list">
                {group.items.map(([name, desc]) => (
                  <div className="tx-item" key={name}>
                    <span className="tx-check">+</span>
                    <div>
                      <h4 className="tx-name">{name}</h4>
                      <p className="tx-desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="tx-bottom">
          <p>
            Every treatment starts with a consultation, so patients understand
            the right plan, expected timeline, and result path before beginning.
          </p>
          <button
            className="tx-cta"
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          >
            Book your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
