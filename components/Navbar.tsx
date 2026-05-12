"use client";

import { useState, useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#our-team" },
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

  useEffect(() => {
    window.addEventListener("open-booking-modal", openBookingForm);
    return () => window.removeEventListener("open-booking-modal", openBookingForm);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  const openBookingForm = () => {
    setOpen(false);
    setIsBookingModalOpen(true);
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
          <button
            type="button"
            onClick={openBookingForm}
            className="hidden lg:inline-flex items-center justify-center cursor-pointer
                       bg-gradient-to-br from-[#EF3340] to-[#334E9B]
                       text-white px-7 py-3
                       font-bold text-[12px] tracking-[0.08em] uppercase
                       border-0 shadow-md transition-all duration-200
                       hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
          >
            Book Your Consultation
          </button>

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

          <button
            type="button"
            className="mt-3 w-full inline-flex items-center justify-center cursor-pointer
                       bg-gradient-to-br from-[#EF3340] to-[#334E9B]
                       text-white px-7 py-3.5
                       font-bold text-[12px] tracking-[0.08em] uppercase
                       border-0 shadow-md transition-all duration-200
                       hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
            onClick={openBookingForm}
          >
            Book Your Consultation
          </button>
        </div>
      </div>

      </header>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      >
        <form className="p-6 sm:p-8">
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

          <div className="grid gap-4 sm:grid-cols-2">
            <input className="booking-field" name="name" placeholder="Name" type="text" />
            <input className="booking-field" name="phone" placeholder="Phone" type="tel" />
            <input className="booking-field sm:col-span-2" name="email" placeholder="Email" type="email" />
            <select className="booking-field" name="treatment" defaultValue="">
              <option value="" disabled>Treatment</option>
              <option>Hair Fall / Hair Loss</option>
              <option>PRP / GFC</option>
              <option>Hair Transplant</option>
              <option>Acne / Skin Treatment</option>
              <option>Pigmentation / Glow Treatment</option>
              <option>Laser Hair Reduction</option>
              <option>Dental Pain / RCT</option>
              <option>Aligners / Smile Correction</option>
              <option>Kids Dentistry</option>
            </select>
            <input
              className="booking-field "
              name="appointmentDateTime"
              placeholder="Appointment Date & Time"
              type="datetime-local"
            />
          </div>

          <button
            type="submit"
            className="mt-6 mx-auto flex items-center justify-center bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-10 py-4 text-white text-[12px] font-black tracking-[0.1em] uppercase transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{
              clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            }}
          >
            Submit
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
      `}</style>
    </>
  );
}
