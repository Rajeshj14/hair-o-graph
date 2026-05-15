export default function HemashreeCertificate() {
  return (
    <section id="doctor" className="relative overflow-hidden bg-[#f7f9ff] px-4 pb-6 sm:px-6 lg:px-8">
      <style>{`
        .doctor-header {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .doctor-header::after {
          content: '';
          display: block;
          width: 74px;
          height: 2px;
          margin: 20px auto 0;
          background: linear-gradient(90deg, transparent, #EF3340, #334E9B, transparent);
        }

        .doctor-kicker {
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

        .doctor-kicker::before,
        .doctor-kicker::after {
          content: '';
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(239,51,64,0.8));
        }

        .doctor-kicker::after {
          background: linear-gradient(90deg, rgba(51,78,155,0.8), transparent);
        }

        .doctor-heading {
          margin: 0 0 14px;
          font-family: 'Outfit', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 900;
          color: #111827;
          line-height: 1.12;
          letter-spacing: 0;
        }
          .doctores{
          font-family: 'Outfit', sans-serif;
          }

        .doctor-heading span {
          color: #EF3340;
          font-style: italic;
        }

        .doctor-lead {
          max-width: 540px;
          margin: 0 auto;
          color: rgba(51,65,85,0.72);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.74;
        }

        @media (max-width: 640px) {
          .doctor-header {
            max-width: 360px;
            margin-bottom: 30px;
          }

          .doctor-heading {
            font-size: 29px;
          }

          .doctor-lead {
            font-size: 13.5px;
          }
        }
      `}</style>

      <div className="doctor-header">
        <div className="doctor-kicker">
          Doctor Profile
        </div>
        <h2 className="doctor-heading">
          Meet Our {" "}
          <span>Expert</span>
        </h2>
        {/* <p className="doctor-lead">
         Dr. E. Hema Shree  BDS | FMC, Aesthetic Practitioner & Cosmetology Specialist
        </p> */}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2">
        <div className="order-2 flex h-full flex-col justify-center border border-[#334E9B]/15 bg-white/92 p-6 shadow-xl shadow-[#334E9B]/8 backdrop-blur sm:p-8 lg:order-1 lg:p-10">


          <h2 className="doctores text-2xl font-black leading-tight text-[#111827] sm:text-2xl">
           Dr. E. Hema Shree, BDS | FMC, Aesthetic Practitioner & Cosmetology Specialist
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600">
            <p>
              Qualified aesthetic practitioner with 5+ years of clinical experience in Advanced skin, hair, and cosmetology treatments.
            </p>

            <p>
             Her approach focuses on understanding individual skin and hair concerns, recommending suitable treatment plans, and helping patients achieve healthy, natural-looking results through safe and personalized care.
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[420px] overflow-hidden border border-[#334E9B]/15 bg-[#0b1020] shadow-xl shadow-[#334E9B]/8 lg:order-2">
          <img
            src="/doctors.jpeg"
            alt="Clinical consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#334E9B]/35 via-transparent to-[#EF3340]/35" />
        </div>
      </div>
    </section>
  );
}
