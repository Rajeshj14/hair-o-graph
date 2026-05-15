"use client";

import { useRef, useState } from "react";

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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const goToTestimonial = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    setActiveTestimonial(nextIndex);
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleTestimonialScroll = () => {
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

    setActiveTestimonial(closestIndex);
  };

  return (
    <section className="testimonials-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .testimonials-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px;
          background: linear-gradient(180deg, #f8fbff 0%, #eef3ff 46%, #ffffff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .testimonials-wrap {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        .testimonials-head {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .testimonials-head::after {
          content: '';
          display: block;
          width: 74px;
          height: 2px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, transparent, #EF3340, #334E9B, transparent);
        }

        .testimonials-kicker {
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

        .testimonials-kicker::before,
        .testimonials-kicker::after {
          content: '';
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239,51,64,0.8));
        }

        .testimonials-kicker::after {
          background: linear-gradient(90deg, rgba(51,78,155,0.8), transparent);
        }

        .testimonials-title {
          margin: 0 0 14px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .testimonials-title em {
          color: #EF3340;
          font-style: italic;
        }

        .testimonials-lead {
          max-width: 540px;
          margin: 0 auto;
          color: rgba(51,65,85,0.72);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.74;
        }

        .testimonial-grid {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding: 2px 2px 18px;
          scroll-snap-type: x mandatory;
          scroll-padding-left: 2px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .testimonial-grid::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          flex: 0 0 calc((100% - 36px) / 3);
          position: relative;
          min-height: 310px;
          padding: 26px;
          border: 1px solid rgba(51,78,155,0.16);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,248,255,0.9));
          overflow: hidden;
          scroll-snap-align: start;
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
          font-family: 'Outfit', sans-serif;
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

        .testimonial-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 12px;
        }

        .testimonial-carousel-btn {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(51,78,155,0.18);
          border-radius: 999px;
          background: #ffffff;
          color: #334E9B;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(31,45,83,0.08);
          transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }

        .testimonial-carousel-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(239,51,64,0.35);
          color: #EF3340;
        }

        .testimonial-carousel-dots {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .testimonial-carousel-dot {
          width: 8px;
          height: 8px;
          border: 0;
          padding: 0;
          border-radius: 999px;
          background: rgba(51,78,155,0.24);
          cursor: pointer;
          transition: width 0.2s ease, background 0.2s ease;
        }

        .testimonial-carousel-dot.is-active {
          width: 24px;
          background: #EF3340;
        }

        @media (max-width: 1060px) {
          .testimonials-section {
            padding: 84px 24px;
          }

          .testimonials-head {
            max-width: 600px;
          }

          .testimonial-card {
            flex-basis: calc((100% - 18px) / 2);
          }
        }

        @media (max-width: 700px) {
          .testimonials-section {
            padding: 30px 16px;
          }
          .testimonials-head {
            max-width: 360px;
            margin-bottom: 30px;
          }

          .testimonials-title {
            font-size: 29px;
          }

          .testimonials-lead {
            font-size: 13.5px;
          }
          .testimonial-grid {
            gap: 14px;
            margin: 0 -16px;
            padding: 0 16px 12px;
            scroll-padding-left: 16px;
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

          .testimonial-carousel-controls {
            gap: 13px;
            margin-top: 6px;
          }

          .testimonial-carousel-btn {
            width: 34px;
            height: 34px;
            font-size: 18px;
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

        <div
          className="testimonial-grid"
          ref={trackRef}
          onScroll={handleTestimonialScroll}
        >
          {testimonials.map((item, index) => (
            <article
              className="testimonial-card"
              key={`${item.name}-${item.tag}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <div className="quote-mark">&quot;</div>
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

        <div
          className="testimonial-carousel-controls"
          aria-label="Testimonials carousel controls"
        >
          <button
            type="button"
            className="testimonial-carousel-btn"
            aria-label="Previous testimonial"
            onClick={() => goToTestimonial(activeTestimonial - 1)}
          >
            ‹
          </button>
          <div className="testimonial-carousel-dots">
            {testimonials.map((item, index) => (
              <button
                key={`${item.name}-${item.tag}-dot`}
                type="button"
                className={`testimonial-carousel-dot ${
                  activeTestimonial === index ? "is-active" : ""
                }`}
                aria-label={`Show ${item.name} testimonial`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="testimonial-carousel-btn"
            aria-label="Next testimonial"
            onClick={() => goToTestimonial(activeTestimonial + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
