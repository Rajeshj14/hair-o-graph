"use client";

import { CalendarCheck, PhoneCall } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="mt-5 fixed inset-x-0 bottom-0 z-50 flex border-t border-[#334E9B] bg-white/92 p-2 shadow-[0_-16px_38px_rgba(51,78,155,0.18)] backdrop-blur-md md:hidden">
      <a
        href="tel:+91744866675"
        className="inline-flex flex-1 items-center justify-center gap-2 bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-4 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-white shadow-md transition-all hover:brightness-110 active:scale-[0.98]"
        style={{
          clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
        }}
        aria-label="Call clinic"
      >
        <PhoneCall size={17} strokeWidth={2.2} />
        Call Now
      </a>

      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
        className="ml-2 inline-flex flex-1 items-center justify-center gap-2 bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-4 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-white shadow-md transition-all hover:brightness-110 active:scale-[0.98]"
        style={{
          clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
        }}
        aria-label="Book consultation"
      >
        <CalendarCheck size={17} strokeWidth={2.2} />
        Book Now
      </button>
    </div>
  );
}
