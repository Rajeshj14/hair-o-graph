"use client";

import { CalendarCheck, PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+91744866675";

export default function MobilePhoneButton() {
  return (
    <div className="fixed inset-x-0 bottom-18 z-[60] flex justify-center md:hidden">
      <div className="flex items-center gap-3 rounded-full bg-white/92 p-2 shadow-[0_14px_32px_rgba(51,78,155,0.24)] backdrop-blur-md">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#EF3340] to-[#334E9B] text-white transition-all hover:brightness-110 active:scale-95"
          aria-label="Call clinic"
        >
          <PhoneCall size={18} strokeWidth={2.4} />
        </a>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#334E9B] to-[#EF3340] text-white transition-all hover:brightness-110 active:scale-95"
          aria-label="Book appointment"
        >
          <CalendarCheck size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
