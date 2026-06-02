function SectionWrapper({ children, header, title }) {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto">

        {/* HEADER */}
        <div className="text-center">
          
          {/* LABEL */}
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.45em] text-[10px] sm:text-xs text-[#777] font-medium mb-6 sm:mb-8">
            {header}
          </p>

          {/* TITLE */}
          <h2
            className="
              uppercase
              text-[#0b0b0b]
              font-black
              leading-[0.9]
              tracking-[-0.05em]
              break-words
              text-[clamp(2.5rem,10vw,7.5rem)]
            "
          >
            {title[0]}{" "}
            <span className="text-[#fc5200]">
              {title[1]}
            </span>{" "}
            {title[2]}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 sm:mt-8 text-[#66615d] text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            Build elite fitness systems with structured training,
            recovery optimization, performance tracking, and
            sustainable long-term discipline.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper;