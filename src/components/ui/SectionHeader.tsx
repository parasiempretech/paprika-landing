type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ title, subtitle, align = "left" }: Props) {
  return (
    <div
      className={`mb-10 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left"
      }`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="section-subtitle text-paprika-brown/80">{subtitle}</p>
      )}
    </div>
  );
}