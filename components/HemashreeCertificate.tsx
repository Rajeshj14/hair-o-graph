export default function HemashreeCertificate() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9ff] px-4 py-6 sm:px-6 lg:px-8">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(51,78,155,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(239,51,64,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto mb-10 max-w-3xl text-center">
        <div className="mb-4 inline-flex border border-[#EF3340]/25 bg-[#EF3340]/8 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#EF3340]">
          Doctor Profile
        </div>
        <h2 className="font-serif text-3xl font-black leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
          Dr. Hemashree&apos;s{" "}
          <span className="text-[#EF3340]">Clinical</span>{" "}
          <span className="text-[#EF3340]">Expertise</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          A professional overview of her clinical skills, aesthetic procedure
          experience, communication ability, and dedicated service during her
          tenure.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2">
        <div className="order-2 flex h-full flex-col justify-center border border-[#334E9B]/15 bg-white/92 p-6 shadow-xl shadow-[#334E9B]/8 backdrop-blur sm:p-8 lg:order-1 lg:p-10">
          <div className="mb-5 inline-flex w-fit border border-[#EF3340]/25 bg-[#EF3340]/8 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#EF3340]">
            Experience Certificate
          </div>

          <h2 className="font-serif text-3xl font-black leading-tight text-[#111827] sm:text-4xl">
            To whom it may concern,
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600">
            <p>
              This is to certify that Dr. Hemashree was working in Brown
              esthetics clinic from June 10, 2024, and has been performing well
              with good clinical skills and communication skills. She had done
              esthetic procedure such as consultations, hydrafacial, chemical
              peels, microneedling, PRP and GFC.
            </p>

            <p>
              Dr. Hemashree had shown her diligence, hard work, and sincerity
              towards her duties during her tenure at work. She is friendly and
              reliable, and has a good character. She had been paid 45,000 per
              month.
            </p>

            <p className="font-semibold text-[#334E9B]">
              We wish her all the very best in her career and future endeavours.
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[420px] overflow-hidden border border-[#334E9B]/15 bg-[#0b1020] shadow-xl shadow-[#334E9B]/8 lg:order-2">
          <img
            src="/doctor.jpeg"
            alt="Clinical consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#334E9B]/35 via-transparent to-[#EF3340]/35" />
        </div>
      </div>
    </section>
  );
}
