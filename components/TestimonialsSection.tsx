"use client";

const testimonials = [
  {
    name: "Shanthi",
    place: "Ambattur",
    tag: "Dental Care",
    content:
      "Myself Shanthi, I'm from Ambattur. I visited Hair O Graft clinic for my daughter's tooth pain. She had a severe cavity, and the doctor advised root canal treatment. After the treatment, now she's fine.",
  },
  {
    name: "Ramesh",
    place: "Avadi",
    tag: "Aligners",
    content:
      "I'm from Avadi. My grandson had irregular teeth since fifth standard. When I visited Hair O Graft, they did the dental checkup and suggested aligners. Now her tooth alignment is much better.",
  },
  {
    name: "Kumar",
    place: "Thirumullaivoyal",
    tag: "Hair Regrowth",
    content:
      "I'm from Thirumullaivoyal and had been experiencing severe hair loss for the past few months. After taking the treatment, my hair started to regrow drastically. Now I got my thick hairline back.",
  },
  {
    name: "Yamuna",
    place: "Ambattur",
    tag: "Skin Treatment",
    content:
      "Since summer started my skin began to tan. I'm from Ambattur and couldn't find one correct clinic here. When I visited Hair O Graft, they provided effective skin treatment with glutathione. Now my skin tan is removed completely.",
  },
  {
    name: "Mani",
    place: "Thirumullaivoyal",
    tag: "Aligners",
    content:
      "I'm Mani from Thirumullaivoyal. My daughter had alignment issues with her teeth since childhood. We consulted Hair O Graft clinic, and they recommended aligners instead of traditional braces. The process was smooth, and over time we saw a very good improvement. Her smile looks much better now.",
  },
  {
    name: "Lakshmi",
    place: "Ambattur",
    tag: "Root Canal",
    content:
      "I'm Lakshmi from Ambattur. My son was suffering from severe tooth pain due to cavity, and he was very scared of dental treatments. The doctors at Hair O Graft handled him very patiently. They did a root canal smoothly, and now he's completely fine and pain-free.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .testimonials-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px;
          background:
            radial-gradient(circle at 14% 18%, rgba(239,51,64,0.08), transparent 32%),
            radial-gradient(circle at 86% 20%, rgba(51,78,155,0.12), transparent 36%),
            linear-gradient(180deg, #f8fbff 0%, #eef3ff 46%, #ffffff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .testimonials-section::before {
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

        .testimonials-wrap {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        .testimonials-head {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.55fr);
          gap: 40px;
          align-items: end;
          margin-bottom: 46px;
        }

        .testimonials-kicker {
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

        .testimonials-title {
          margin: 0;
          max-width: 740px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          line-height: 0.94;
          letter-spacing: 0;
        }

        .testimonials-title em {
          color: #EF3340;
          font-style: italic;
        }

        .testimonials-lead {
          margin: 0;
          color: rgba(51,65,85,0.72);
          font-size: 14px;
          line-height: 1.85;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .testimonial-card {
          position: relative;
          min-height: 310px;
          padding: 26px;
          border: 1px solid rgba(51,78,155,0.16);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,248,255,0.9));
          overflow: hidden;
          transition: transform 0.26s ease, border-color 0.26s ease, background 0.26s ease;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #EF3340, #334E9B, transparent);
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          border-color: rgba(239,51,64,0.42);
          background:
            linear-gradient(180deg, rgba(255,255,255,1), rgba(242,246,255,0.98));
          box-shadow: 0 18px 46px rgba(51,78,155,0.14);
        }

        .testimonial-card:hover .testimonial-name {
          color: #111827;
        }

        .testimonial-card:hover .testimonial-place,
        .testimonial-card:hover .testimonial-tag,
        .testimonial-card:hover .testimonial-content {
          color: rgba(31,41,55,0.82);
        }

        .quote-mark {
          position: absolute;
          right: 24px;
          top: 18px;
          color: rgba(239,51,64,0.18);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 86px;
          font-weight: 900;
          line-height: 1;
        }

        .testimonial-meta {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .avatar {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(239,51,64,0.34);
          background: linear-gradient(135deg, rgba(239,51,64,0.22), rgba(51,78,155,0.2));
          color: #fff;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.06em;
        }

        .testimonial-name {
          margin: 0;
          color: #111827;
          font-size: 16px;
          font-weight: 800;
        }

        .testimonial-place {
          margin-top: 4px;
          color: rgba(51,65,85,0.62);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .testimonial-tag {
          position: relative;
          z-index: 1;
          width: fit-content;
          margin-bottom: 18px;
          padding: 6px 10px;
          border: 1px solid rgba(51,78,155,0.32);
          color: rgba(51,65,85,0.72);
          background: rgba(51,78,155,0.12);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .testimonial-content {
          position: relative;
          z-index: 1;
          margin: 0;
          color: rgba(51,65,85,0.72);
          font-size: 13px;
          line-height: 1.78;
        }

        .testimonial-footer {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          margin-top: 28px;
          padding: 22px 26px;
          border: 1px solid rgba(239,51,64,0.14);
          background: rgba(255,255,255,0.78);
        }

        .testimonial-footer p {
          margin: 0;
          color: rgba(51,65,85,0.72);
          font-size: 13px;
          line-height: 1.7;
        }

        .rating-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border: 1px solid rgba(239,51,64,0.28);
          color: #EF3340;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
        }

        @media (max-width: 1060px) {
          .testimonials-section {
            padding: 84px 24px;
          }

          .testimonials-head {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .testimonial-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .testimonials-section {
            padding: 30px 16px;
          }
          .testimonials-head {
            gap: 7px;
            margin-bottom: 20px;
          }
          .testimonial-grid {
            display: flex;
            gap: 14px;
            margin: 0 -16px;
            padding: 0 16px 12px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding-left: 16px;
            -webkit-overflow-scrolling: touch;
          }

          .testimonial-grid::-webkit-scrollbar {
            height: 4px;
          }

          .testimonial-grid::-webkit-scrollbar-track {
            background: rgba(51,78,155,0.08);
          }

          .testimonial-grid::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #EF3340, #334E9B);
          }

          .testimonial-card {
            flex: 0 0 86%;
            min-height: auto;
            padding: 24px;
            scroll-snap-align: start;
          }

          .testimonial-card:hover {
            transform: none;
          }

          .testimonial-footer {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="testimonials-wrap">
        <div className="testimonials-head">
          <div>
            <div className="testimonials-kicker">Testimonials</div>
            <h2 className="testimonials-title">
              Real Stories from <em>Happy Patients</em>
            </h2>
          </div>
          <p className="testimonials-lead">
            Patient experiences across dental care, hair regrowth, aligners, and
            skin treatments from nearby communities.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={`${item.name}-${item.tag}`}>
              <div className="quote-mark">"</div>
              <div className="testimonial-meta">
                <div className="avatar">{item.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <h3 className="testimonial-name">{item.name}</h3>
                  <div className="testimonial-place">{item.place}</div>
                </div>
              </div>
              <div className="testimonial-tag">{item.tag}</div>
              <p className="testimonial-content">{item.content}</p>
            </article>
          ))}
        </div>

        <div className="testimonial-footer">
          <p>
            Reviews reflect real patient journeys shared after consultation and
            treatment experience at Hair O Graft.
          </p>
          <div className="rating-chip">4.7 Star Patient Trust</div>
        </div>
      </div>
    </section>
  );
}
