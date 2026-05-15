"use client";

import EndFooter from "./endfooter";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Doctor", href: "#doctor" },
  { name: "Process", href: "#process" },
  { name: "Treatments", href: "#treatments" },
];

const services = [
  "Hair Treatments",
  "Skin Treatments",
  "Dental Treatments",
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .footer-section {
          position: relative;
          overflow: hidden;
          padding: 50px 24px 0;
          background: linear-gradient(180deg, #eef3ff 0%, #ffffff 100%);
          color: #111827;
          font-family: 'DM Sans', sans-serif;
        }

        .footer-wrap {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: minmax(280px, 1.1fr) minmax(160px, 0.55fr) minmax(180px, 0.65fr) minmax(240px, 0.8fr);
          gap: 34px;
          padding-bottom: 30px;
        }

        .footer-brand {
          max-width: 390px;
        }

        .footer-logo {
          width: 86px;
          height: 86px;
          object-fit: contain;
          display: block;
          margin-bottom: 20px;
          background: #fff;
          border: 1px solid rgba(51,78,155,0.22);
        }

        .footer-title {
          margin: 0;
          font-family: 'Outfit', sans-serif;
          font-size: 34px;
          line-height: 1;
          font-weight: 900;
        }

        .footer-title em {
          color: #EF3340;
          font-style: italic;
        }

        .footer-copy {
          margin: 18px 0 0;
          color: rgba(51,65,85,0.72);
          font-size: 13.5px;
          line-height: 1.78;
        }

        .footer-col h3 {
          margin: 0 0 18px;
          color: #111827;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .footer-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .footer-list a,
        .footer-list span {
          display: inline-block;
          color: rgba(51,65,85,0.68);
          font-size: 13px;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .footer-list a:hover {
          color: #EF3340;
          padding-left: 4px;
        }

        .footer-contact {
          display: grid;
          gap: 14px;
        }

        .contact-card {
          padding: 15px 16px;
          border: 1px solid rgba(51,78,155,0.18);
          background: rgba(255,255,255,0.82);
        }

        .contact-label {
          margin-bottom: 5px;
          color: #EF3340;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-value {
          color: #111827;
          font-size: 13px;
          line-height: 1.5;
        }

        .footer-cta {
          display: inline-flex;
          justify-content: center;
          margin-top: 18px;
          padding: 13px 24px;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          background: linear-gradient(135deg, #EF3340, #334E9B);
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: filter 0.2s ease, transform 0.16s ease;
        }

        .footer-cta:hover {
          filter: brightness(1.08);
        }

        .footer-cta:active {
          transform: scale(0.98);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          padding: 22px 0;
          border-top: 1px solid rgba(239,51,64,0.16);
          color: rgba(51,65,85,0.62);
          font-size: 12px;
        }

        .footer-bottom strong {
          color: #111827;
          font-weight: 800;
        }

        @media (max-width: 980px) {
          .footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .footer-section {
            padding: 16px 16px 0;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 14px;
            padding-bottom: 25px;
          }
          .footer-list {
            gap: 6px;
          }
          .footer-contact {
            gap: 5px;
          }
          .footer-col h3 {
                margin: 0 0 8px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="footer-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <img className="footer-logo" src="/image.png" alt="Hair O Graft" />
            <h2 className="footer-title">
              Hair O <em>Graft</em>
            </h2>
            <p className="footer-copy">
              Trusted hair, skin, and dental care with advanced technology,
              experienced doctors, and personalized treatment plans.
            </p>
            <button
              className="footer-cta border-0 cursor-pointer"
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              Book your Free Consultation
            </button>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-list">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Treatments</h3>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <div className="footer-contact">
              <div className="contact-card">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 744866675</div>
              </div>
              <div className="contact-card">
                <div className="contact-label">Location</div>
                <div className="contact-value">256, New Military Rd, opposite to avadi corporation office, Nehru Bazaar, Thirumalai Rajapuram, Avadi, Chennai, Tamil Nadu 600054</div>
              </div>
            </div>
          </div>
        </div>

        <div >
          <EndFooter />
        </div> 
      </div>
    </footer>
  );
}
