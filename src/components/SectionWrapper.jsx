function SectionWrapper({ children, header, title }) {
  return (
    <section className="min-h-screen flex flex-col gap-16 py-16">

      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-4 px-6">

        <p className="uppercase tracking-widest text-sm text-slate-400 font-semibold">
          {header}
        </p>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          {title[0]}{" "}
          <span className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.1)]">
            {title[1]}
          </span>{" "}
          {title[2]}
        </h2>

        <div className="w-20 h-1 bg-orange-500 rounded-full mt-2"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-12 px-4">
        {children}
      </div>

    </section>
  );
}

export default SectionWrapper;