import Link from "next/link";
import { CalendarCheck, CheckCircle2, Home, PhoneCall } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f9ff] px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[calc(100vh-176px)] max-w-5xl items-center justify-center">
        <div className="w-full border border-[#334E9B]/15 bg-white/90 shadow-2xl shadow-[#334E9B]/10 backdrop-blur">
          <div className="grid overflow-hidden lg:grid-cols-[1fr_0.85fr]">
            <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
              <div className="mb-2 inline-flex items-center gap-2 border border-[#EF3340]/20 bg-[#EF3340]/8 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#EF3340]">
                <CheckCircle2 size={16} />
                Request Received
              </div>

              <h1 className="font-serif text-[clamp(30px,3vw,48px)] font-black text-[#111827]">
                Thank you for reaching out.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Your consultation request has been submitted successfully. Our
                clinic team will review your details and contact you shortly to
                confirm the next available appointment slot.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-8 py-4 text-center text-[12px] font-black uppercase tracking-[0.1em] text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                  style={{
                    clipPath:
                      "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
                  }}
                >
                  <Home size={16} />
                  Back to Home
                </Link>
                <a
                  href="tel:+91 744866675"
                  className="inline-flex items-center justify-center gap-2 border border-[#334E9B]/20 bg-white px-8 py-4 text-center text-[12px] font-black uppercase tracking-[0.1em] text-[#334E9B] transition-colors duration-200 hover:border-[#EF3340]/40 hover:text-[#EF3340]"
                >
                  <PhoneCall size={16} />
                  Call Clinic
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px] bg-[#0b1020] lg:min-h-full">
              <img
                src="/consultation.png"
                alt="Clinic consultation"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#334E9B]/75 via-[#111827]/50 to-[#EF3340]/65" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white sm:p-10">
                <div className="mb-5 h-14 w-14 border border-white/25 bg-white/15 p-3 backdrop-blur">
                  <CheckCircle2 className="h-full w-full" />
                </div>
                <p className="max-w-sm text-2xl font-black leading-tight">
                  We are preparing a personalized care experience for you.
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/82">
                  Hair, skin, and dental treatments guided by experienced
                  doctors and advanced technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
