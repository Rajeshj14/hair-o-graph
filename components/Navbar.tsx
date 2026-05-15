"use client";

import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { PhoneCall, X } from "lucide-react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BookingModal = ({ isOpen, onClose, children }: BookingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white overflow-hidden shadow-2xl border border-[#334E9B]/15">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#EF3340]/10 hover:bg-[#EF3340]/15 flex items-center justify-center text-[#334E9B] transition-all"
          aria-label="Close booking form"
        >
          <X size={20} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingAppointmentDateTime, setBookingAppointmentDateTime] = useState("");
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Doctor", href: "#doctor" },
    { name: "Process", href: "#process" },
    { name: "Treatments", href: "#treatments" },
    // { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  const openBookingForm = useCallback(() => {
    setOpen(false);
    setSubmissionState({ status: "idle", message: "" });
    setIsBookingModalOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("open-booking-modal", openBookingForm);
    return () => window.removeEventListener("open-booking-modal", openBookingForm);
  }, [openBookingForm]);

  const handleBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    const source = "Pop-up Form";

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
      setBookingAppointmentDateTime("");
      window.location.assign("/thank-you");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmissionState({ status: "error", message: message || "Submission failed." });
    }
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logos.png"
              alt="Smile Baby Logo"
              className="h-15 sm:h-12 md:h-18 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu - Hidden on Mobile/Tablet, Visible on Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#334E9B] hover:text-[#EF3340] transition-all duration-300 text-sm xl:text-base font-medium relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#EF3340] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button - Hidden on Mobile/Tablet, Visible on Desktop */}
          <a
            href="tel:+91744866675"
            className="hidden lg:inline-flex items-center justify-center cursor-pointer
                       bg-gradient-to-br from-[#EF3340] to-[#334E9B]
                       text-white px-7 gap-2 py-3
                       font-bold text-[12px] tracking-[0.08em] uppercase
                       border-0 shadow-md transition-all duration-200
                       hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
          >
            <PhoneCall size={17} strokeWidth={2.2} /> 
                 +91744866675
          </a>

          {/* Mobile Menu Button - Visible only on Mobile/Tablet */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#EF3340]/10 hover:bg-[#EF3340]/15 border border-[#EF3340]/20 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334E9B"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
          </div>
        </div>

      {/* MOBILE & TABLET MENU - Full width dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-white/98 backdrop-blur-md border-t border-[#EF3340]/10 shadow-lg`}
      >
        <div className="mx-4 my-4 rounded-2xl border border-[#EF3340]/12 bg-white shadow-sm p-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-[#334E9B] font-semibold text-sm hover:bg-[#EF3340]/7 hover:text-[#EF3340] transition-colors duration-200"
              onClick={handleLinkClick}
            >
              {link.name}
              <span className="h-1.5 w-1.5 rounded-full bg-[#EF3340]/40" />
            </a>
          ))}

          <a
            type="button"
            className="mt-3 w-full inline-flex gap-2 items-center justify-center cursor-pointer
                       bg-gradient-to-br from-[#EF3340] to-[#334E9B]
                       text-white px-7 py-3.5
                       font-bold text-[12px] tracking-[0.08em] uppercase
                       border-0 shadow-md transition-all duration-200
                       hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
            href="tel:+91744866675"
            onClick={openBookingForm}
          >
             <PhoneCall size={17} strokeWidth={2.2} /> 
                 +91744866675
          </a>
        </div>
      </div>

      </header>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <form className="p-6 sm:p-8" onSubmit={handleBookingSubmit}>
          <div className="mb-7 pr-10">
            <div className="mb-3 inline-flex px-3 py-1.5 border border-[#EF3340]/25 bg-[#EF3340]/8 text-[#EF3340] text-[10px] font-extrabold tracking-[0.18em] uppercase">
              Appointment Form
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111827] leading-tight">
              Book an Appointment Now
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Restore Your Confidence. Enhance Your Look. Feel Your Best.
            </p>
          </div>

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

          <div className="grid gap-4 sm:grid-cols-2">
            <input className="booking-field" name="name" placeholder="Name" type="text" required />
            <input className="booking-field" name="phone" placeholder="Phone" type="tel" required />
            <input className="booking-field sm:col-span-2" name="email" placeholder="Email" type="email" />
            <select className="booking-field" name="treatment" defaultValue="">
              <option value="" disabled>Treatment</option>
              <option>Hair Fall / Hair Loss</option>
              <option>Hair Transplant</option>
              <option>Acne / Skin Treatment</option>
              <option>Pigmentation / Glow Treatment</option>
              <option>Laser Hair Reduction</option>
              <option>Dental Pain / RCT</option>
              <option>Aligners / Smile Correction</option>
              <option>Kids Dentistry</option>
            </select>
            <div className="booking-date-wrap">
              {!bookingAppointmentDateTime && (
                <span className="booking-date-placeholder">Appointment Date</span>
              )}
              <input
                className={`booking-field booking-date-field ${
                  bookingAppointmentDateTime ? "" : "is-empty"
                }`}
                name="appointmentDateTime"
                type="datetime-local"
                aria-label="Appointment Date and Time"
                value={bookingAppointmentDateTime}
                onChange={(event) => setBookingAppointmentDateTime(event.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 mx-auto flex items-center justify-center bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-10 py-4 text-white text-[12px] font-black tracking-[0.1em] uppercase transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
            disabled={submissionState.status === "submitting"}
          >
            {submissionState.status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </BookingModal>

      <style>{`
        .booking-field {
          width: 100%;
          border: 1px solid rgba(51,78,155,0.18);
          background: #f8fbff;
          padding: 13px 14px;
          color: #111827;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .booking-field::placeholder {
          color: rgba(51,65,85,0.5);
        }

        .booking-field:focus {
          border-color: rgba(239,51,64,0.55);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(239,51,64,0.1);
        }

        .booking-date-wrap {
          position: relative;
        }

        .booking-date-placeholder {
          pointer-events: none;
          position: absolute;
          left: 14px;
          top: 50%;
          z-index: 1;
          transform: translateY(-50%);
          color: rgba(51,65,85,0.5);
          font-size: 14px;
        }

        .booking-date-field.is-empty {
          color: transparent;
        }

        .booking-date-field:focus {
          color: #111827;
        }

        .booking-date-wrap:focus-within .booking-date-placeholder {
          display: none;
        }
      `}</style>
    </>
  );
}
