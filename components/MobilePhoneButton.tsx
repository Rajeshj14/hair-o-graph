"use client";

import { CalendarCheck, PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+91744866675";

export default function MobilePhoneButton() {
  return (
    <>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="fixed left-3 top-1/2 z-[60] inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#EF3340] to-[#334E9B] text-white shadow-[0_14px_32px_rgba(51,78,155,0.32)] transition-all hover:brightness-110 active:scale-95 md:hidden"
        aria-label="Call clinic"
      >
        <PhoneCall size={19} strokeWidth={2.4} />
      </a>

      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
        className="fixed right-3 top-1/2 z-[60] inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#334E9B] to-[#EF3340] text-white shadow-[0_14px_32px_rgba(51,78,155,0.32)] transition-all hover:brightness-110 active:scale-95 md:hidden"
        aria-label="Book appointment"
      >
        <CalendarCheck size={19} strokeWidth={2.4} />
      </button>
    </>
  );
}
