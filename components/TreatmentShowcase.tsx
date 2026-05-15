"use client";

const treatmentCategories = [
  {
    id: "01",
    icon: "HA",
    title: "Hair Treatments",
    accent: "Hair density, scalp health, restoration",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Advanced solutions to control hair fall, restore growth, and improve scalp health.",
    treatments: [
      ["Advanced Hair Regrowth Therapy", "Stimulates natural hair growth using your own blood plasma."],
      ["Natural Hair Support Therapy", "Advanced therapy that boosts hair strength and density."],
      [" UV light Therapy", "Permanent solution to restore hair in thinning areas."],
      ["Hair Regrowth Treatments", "Non-surgical treatments to reduce hair fall and improve thickness."],
      ["Dandruff & Scalp Treatment", "Treats scalp infections, itching, and flaking issues."],
      ["Hair Patch / Cosmetic Hair System", "Instant solution for visible hair loss without surgery."],
    ],
  },
  {
    id: "02",
    icon: "SK",
    title: "Skin Treatments",
    accent: "Glow, tone, scars, texture",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Personalized treatments to enhance skin glow, clarity, and overall appearance.",
    treatments: [
      ["Hydrafacial / Glow Facial", "Deep cleansing facial for instant glow and hydration."],
      ["Acne & Scar Treatment", "Reduces pimples and improves skin texture."],
      ["Pigmentation & Tan Removal", "Evens skin tone and reduces dark patches."],
      ["Chemical Peel", "Removes dead skin and improves brightness and texture."],
      ["Laser Hair Reduction", "Long-term solution for unwanted body hair."],
      ["Carbon Peel", "Advanced facial for oil control, pores, and skin brightness."],
      // ["Botox & Fillers", "Reduces wrinkles and enhances facial features."],
      ["Glutathione IV Therapy", "Improves skin tone and overall radiance."],
    ],
  },
  {
    id: "03",
    icon: "DE",
    title: "Dental Treatments",
    accent: "Teeth, gums, smiles, confidence",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    intro:
      "Comprehensive care for healthy teeth, strong gums, and confident smiles.",
    treatments: [
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

export default function TreatmentShowcase() {
  return (
    <section className="tg-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .tg-section {
          position: relative;
          overflow: hidden;
          padding: 76px 24px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef3ff 48%, #ffffff 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        .tg-wrap {
          
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
        }

        .tg-head {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }

        .tg-kicker {
        
          width: fit-content;
          margin: 0 auto 35px;
          padding: 7px 14px;
          border: 1px solid rgba(239,51,64,0.3);
          background: rgba(239,51,64,0.08);
          color: #EF3340;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .tg-title {
          margin: 0;
          max-width: 780px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 0.92;
          font-weight: 900;
          letter-spacing: 0;
        }

        .tg-title em {
          color: #EF3340;
          font-style: italic;
        }

        .tg-lead {
          margin: 0;
          color: rgba(51,65,85,0.74);
          font-size: 14px;
          line-height: 1.85;
        }

        .tg-board {
          display: grid;
          gap: 22px;
        }

        .tg-row {
          position: sticky;
          
          display: grid;
          grid-template-columns: minmax(310px, 0.58fr) minmax(0, 1fr);
          min-height: 430px;
          border: 1px solid rgba(51,78,155,0.16);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.98), rgba(242,246,255,0.96));
          box-shadow: 0 24px 84px rgba(51,78,155,0.13);
          overflow: hidden;
        }

        .tg-media {
          position: relative;
          overflow: hidden;
          min-height: 430px;
        }

        .tg-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(0.24) brightness(0.66) contrast(1.08);
          transform: scale(1.02);
          transition: transform 0.8s ease, filter 0.4s ease;
        }

        .tg-row:hover .tg-img {
          transform: scale(1.08);
          filter: grayscale(0.08) brightness(0.76) contrast(1.12);
        }

        .tg-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(5,5,4,0.96), transparent 58%),
            linear-gradient(120deg, rgba(239,51,64,0.2), transparent 46%);
        }

        .tg-num {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 1;
          font-family: 'Outfit', sans-serif;
          font-size: 58px;
          font-weight: 900;
          line-height: 1;
          color: rgba(239,51,64,0.78);
        }

        .tg-media-copy {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
          z-index: 1;
        }

        .tg-icon {
          display: inline-grid;
          place-items: center;
          width: 42px;
          height: 42px;
          margin-bottom: 16px;
          border: 1px solid rgba(239,51,64,0.34);
          background: rgba(255,255,255,0.78);
          color: #EF3340;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .tg-media-copy h3 {
          margin: 0 0 12px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 900;
          line-height: 0.96;
        }

        .tg-accent {
          margin: 0;
          color: rgba(239,51,64,0.74);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .tg-content {
          display: flex;
          flex-direction: column;
          padding: 34px;
          min-width: 0;
        }

        .tg-intro {
          margin: 0 0 24px;
          max-width: 680px;
          color: rgba(51,65,85,0.72);
          font-size: 14px;
          line-height: 1.75;
        }

        .tg-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .tg-item {
          position: relative;
          min-height: 116px;
          padding: 18px 18px 18px 50px;
          border: 1px solid rgba(51,78,155,0.12);
          background: rgba(255,255,255,0.82);
          transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
        }

        .tg-item:hover {
          transform: translateY(-3px);
          border-color: rgba(239,51,64,0.34);
          background: rgba(239,51,64,0.06);
        }

        .tg-plus {
          position: absolute;
          top: 18px;
          left: 18px;
          display: grid;
          place-items: center;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(239,51,64,0.44);
          color: #EF3340;
          font-size: 12px;
          font-weight: 900;
          transition: background 0.22s ease, color 0.22s ease;
        }

        .tg-item:hover .tg-plus {
          background: #EF3340;
          color: #070604;
        }

        .tg-item h4 {
          margin: 0 0 7px;
          color: #111827;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.35;
        }

        .tg-item p {
          margin: 0;
          color: rgba(51,65,85,0.68);
          font-size: 12.5px;
          line-height: 1.62;
        }
        @media (max-width: 1100px) {
          .tg-section {
            padding: 84px 24px;
          }

          .tg-head {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .tg-row {
            position: relative;
            top: auto;
            grid-template-columns: 1fr;
          }

          .tg-media {
            min-height: 340px;
          }
        }

        @media (max-width: 760px) {
          .tg-section {
            padding: 20px 16px;
          }
          .tg-head {
              margin-bottom: 5px;
          }


          .tg-content {
            padding: 24px 18px;
          }

          .tg-list {
            grid-template-columns: 1fr;
          }

          .tg-item {
            min-height: auto;
          }
        }
      `}</style>

      <div className="tg-wrap">
        <div className="tg-head">
          <div >
            <div className="tg-kicker">Our Treatments</div>
          </div>
        </div>

        <div className="tg-board">
          {treatmentCategories.map((category, index) => (
            <article
              className="tg-row"
              key={category.title}
              style={{ zIndex: index + 1 }}
            >
              <div className="tg-media">
                <div
                  className="tg-img"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="tg-num">{category.id}</div>
                <div className="tg-media-copy">
                  <span className="tg-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                  <p className="tg-accent">{category.accent}</p>
                </div>
              </div>

              <div className="tg-content">
                <p className="tg-intro">{category.intro}</p>
                <div className="tg-list">
                  {category.treatments.map(([name, desc]) => (
                    <div className="tg-item" key={name}>
                      <span className="tg-plus">+</span>
                      <h4>{name}</h4>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
