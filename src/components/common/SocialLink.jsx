function SocialLink({ href, icon, label, variant = "chip" }) {
  const IconComponent = icon;
  const isExternalLink = href.startsWith("http");
  const baseClass = "flex items-center gap-2 transition";
  const variantClass =
    variant === "text"
      ? "text-gray-500 text-sm hover:text-orange-600"
      : "border border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100";

  return (
    <a
      href={href}
      className={`${baseClass} ${variantClass}`}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
    >
      <IconComponent />
      {label}
    </a>
  );
}

export default SocialLink;
