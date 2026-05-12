"use client";

export default function EndFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#EF3340]/15 bg-[#f7f9ff] py-4 text-sm text-slate-600 max-sm:mb-13">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(51,78,155,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(239,51,64,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-center leading-6 sm:text-left">
          Copyright {new Date().getFullYear()}{" "}
          <span className="font-extrabold text-[#111827]">Hair O Graft</span>.
          All rights reserved | Powered by{" "}
          <span className="font-bold text-[#334E9B]">
            GrowMedico Developers
          </span>
        </p>

        <a
          href="/privacy-policy"
          className="font-bold text-[#334E9B] transition-colors hover:text-[#EF3340]"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
