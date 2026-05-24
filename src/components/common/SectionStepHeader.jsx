function SectionStepHeader({
  index,
  title,
  description,
  tone = "light",
  align = "center",
}) {
  const isDark = tone === "dark";
  const isLeft = align === "left";

  const titleClass =
    isDark
      ? "text-2xl md:text-4xl font-semibold text-white mb-3 tracking-[-0.03em]"
      : "text-2xl md:text-4xl font-semibold text-[#111] mb-3 tracking-[-0.03em]";
  const descriptionClass =
    isDark
      ? "text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed"
      : "text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed";
  const wrapperClass = isLeft
    ? "text-left"
    : "text-center mt-10 mb-8";

  return (
    <div className={wrapperClass}>
      <p className="text-orange-600 text-[11px] font-semibold tracking-[0.28em] mb-3 uppercase">
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
