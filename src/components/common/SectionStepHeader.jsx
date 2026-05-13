function SectionStepHeader({ index, title, description, tone = "light" }) {
  const titleClass =
    tone === "dark"
      ? "text-2xl md:text-4xl font-semibold text-white mb-3 tracking-[-0.03em]"
      : "text-2xl md:text-4xl font-semibold text-orange-600 mb-3 tracking-[-0.03em]";
  const descriptionClass =
    tone === "dark"
      ? "text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
      : "text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed";

  return (
    <div className="text-center mt-10 mb-8">
      <p className="text-orange-600 text-[11px] font-semibold tracking-[0.35em] mb-4 uppercase">
        Step {index}
      </p>

      <h2 className={titleClass}>
        {title}
      </h2>

      <p className={descriptionClass}>
        {description}
      </p>
    </div>
  );
}

export default SectionStepHeader;
