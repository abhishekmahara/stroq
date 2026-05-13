function SectionWrapper({ children, header, title }) {
  return (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden text-[#2f2a24]">

      <div className="max-w-8xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">

          <p className="uppercase tracking-[0.22em] text-[11px] font-semibold text-orange-600 mb-5">
            {header}
          </p>

          <div className="max-w-4xl">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-[-0.05em] font-[650]">

              {title[0]}{" "}

              <span className="text-orange-600">
                {title[1]}
              </span>{" "}

              {title[2]}

            </h2>

            <p className="mt-6 text-[#6d675f] text-sm sm:text-base leading-relaxed max-w-2xl">
              Build structured fitness systems with smarter training,
              progressive overload, recovery optimization, and
              sustainable long-term consistency.
            </p>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6">
          {children}
        </div>

      </div>
    </section>
  );
}

export default SectionWrapper;