"use client";

import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#334E9B]/10 bg-white/95 px-4 shadow-[0_2px_20px_rgba(51,78,155,0.08)] backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex h-[90px] max-w-[1380px] items-center justify-between">
        <a href="#hero" className="flex items-center">
          <Image
            src="/image.png"
            alt="Hair O Graft logo"
            width={150}
            height={52}
            priority
            className="h-[82px] w-auto object-contain"
          />
        </a>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          className="inline-flex cursor-pointer items-center justify-center bg-gradient-to-br from-[#EF3340] to-[#334E9B] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-md transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          style={{
            clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
          }}
        >
          <PhoneCall size={17} strokeWidth={2.2} />
          +91744866675
        </button>
      </div>
    </nav>
  );
}
