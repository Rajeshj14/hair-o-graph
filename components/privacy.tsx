"use client";

import Footer from "@/components/Footer";
import Navbar from "./tknavbar";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect personal information you voluntarily provide when booking consultations or contacting us — including your name, phone number, email address, and preferred treatment details. We may also collect technical data such as browser type and pages visited to improve our website experience.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used solely to schedule and manage your appointments, send appointment reminders, respond to enquiries, and improve our services. We do not use your data for unsolicited marketing without your explicit consent.`,
  },
  {
    title: "Medical & Treatment Data",
    content: `Any medical history or treatment information shared with our doctors is treated as strictly confidential. This data is stored securely, accessed only by authorised clinical staff, and is never disclosed to third parties without your written consent, except where required by law.`,
  },
  {
    title: "Data Sharing",
    content: `We do not sell, trade, or rent your personal information to any third party. We may share data with trusted service providers (e.g. appointment scheduling platforms) who are contractually bound to keep your data confidential and use it only to perform services on our behalf.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures — including encrypted data transmission and access controls — to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "Cookies",
    content: `Our website uses cookies to enhance your browsing experience and analyse site traffic. You may choose to disable cookies through your browser settings; however, some features of the site may not function correctly as a result.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us using the details below. We will respond to your request within a reasonable timeframe.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The revised policy will be posted on this page with an updated effective date. We encourage you to review this page regularly.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="privacy-page">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

          .privacy-page {
            font-family: 'DM Sans', sans-serif;
            color: #111827;
            background: linear-gradient(180deg, #eef3ff 0%, #ffffff 60%);
            min-height: 100vh;
            padding-top: 80px;
          }

          /* ── Hero ── */
          .pp-hero {
            position: relative;
            overflow: hidden;
            padding: 72px 24px 56px;
            background: transparent;
            text-align: center;
          }

          .pp-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 18px;
            border: 1px solid rgba(239,51,64,0.28);
            background: rgba(239,51,64,0.07);
            color: #EF3340;
            font-size: 10px;
            font-weight: 900;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            margin-bottom: 22px;
          }

          .pp-hero-title {
            position: relative;
            margin: 0 auto;
            max-width: 640px;
            font-family: 'Outfit', sans-serif;
            font-size: clamp(40px, 5vw, 64px);
            font-weight: 900;
            line-height: 1.1;
            color: #111827;
          }

          .pp-hero-title em {
            font-style: italic;
            color: #EF3340;
          }

          .pp-hero-sub {
            margin: 18px auto 0;
            max-width: 520px;
            color: rgba(51,65,85,0.68);
            font-size: 15px;
            line-height: 1.75;
          }

          .pp-effective {
            display: inline-block;
            margin-top: 28px;
            padding: 8px 20px;
            border: 1px solid rgba(51,78,155,0.2);
            background: rgba(51,78,155,0.05);
            color: #334E9B;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.06em;
          }

          /* ── Content ── */
          .pp-wrap {
            max-width: 1260px;
            margin: 0 auto;
            padding: 56px 24px 80px;
          }

          .pp-intro {
            padding: 28px 32px;
            border-left: 4px solid #EF3340;
            background: rgba(239,51,64,0.04);
            color: rgba(51,65,85,0.78);
            font-size: 14.5px;
            line-height: 1.82;
            margin-bottom: 48px;
          }
            .pp-sections {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            }

          .pp-card {
            padding: 32px 36px;
            border: 1px solid rgba(51,78,155,0.14);
            background: #fff;
            position: relative;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }

          .pp-card:hover {
            box-shadow: 0 6px 32px rgba(51,78,155,0.09);
            border-color: rgba(239,51,64,0.25);
          }

          .pp-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, #EF3340, #334E9B);
          }

          .pp-card-num {
            font-size: 10px;
            font-weight: 900;
            letter-spacing: 0.2em;
            color: #EF3340;
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          .pp-card-title {
            margin: 0 0 14px;
            font-family: 'Outfit', sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #111827;
          }

          .pp-card-body {
            margin: 0;
            color: rgba(51,65,85,0.72);
            font-size: 14px;
            line-height: 1.85;
          }

          /* ── Contact strip ── */
          .pp-contact {
            margin-top: 56px;
            padding: 36px 36px;
            background:
              linear-gradient(135deg, rgba(239,51,64,0.06), rgba(51,78,155,0.08));
            border: 1px solid rgba(51,78,155,0.16);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .pp-contact-text h3 {
            margin: 0 0 6px;
            font-family: 'Outfit', sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: #111827;
          }

          .pp-contact-text p {
            margin: 0;
            color: rgba(51,65,85,0.7);
            font-size: 13.5px;
            line-height: 1.6;
          }

          .pp-contact-cta {
            display: inline-flex;
            align-items: center;
            padding: 13px 28px;
            clip-path: polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
            background: linear-gradient(135deg, #EF3340, #334E9B);
            color: #fff;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: filter 0.2s ease, transform 0.15s ease;
            white-space: nowrap;
          }

          .pp-contact-cta:hover { filter: brightness(1.08); }
          .pp-contact-cta:active { transform: scale(0.98); }

          @media (max-width: 640px) {
            .pp-card { padding: 22px 20px; }
            .pp-intro { padding: 20px 20px; }
            .pp-contact { padding: 24px 20px; flex-direction: column; align-items: flex-start; }
          }
            
            /* Mobile */
            @media (max-width: 768px) {
            .pp-sections {
                grid-template-columns: 1fr;
            }
            }
        `}</style>

        {/* Hero */}
        <section className="pp-hero">
          <div className="pp-badge">Legal</div>
          <h1 className="pp-hero-title">
            Privacy <em>Policy</em>
          </h1>
          <p className="pp-hero-sub">
            Your trust is our priority. Learn how Hair O Graft collects, uses, and
            protects your personal information.
          </p>
          <div className="pp-effective">Effective Date: May 2026</div>
        </section>

        {/* Body */}
        <div className="pp-wrap">
          <p className="pp-intro">
            At <strong>Hair O Graft</strong>, we are committed to safeguarding the privacy
            of every patient and visitor. This Privacy Policy explains what information we
            collect, how it is used, and the steps we take to keep it secure. By using our
            website or booking a consultation, you agree to the practices described below.
          </p>

          <div className="pp-sections">
            {sections.map((section, index) => (
              <div key={section.title} className="pp-card">
                <div className="pp-card-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="pp-card-title">{section.title}</h2>
                <p className="pp-card-body">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="pp-contact">
            <div className="pp-contact-text">
              <h3>Questions About This Policy?</h3>
              <p>

                Phone: +91 744866675
              </p>
            </div>
            <a
              href="/"
              className="pp-contact-cta"
            >
             Back To Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
