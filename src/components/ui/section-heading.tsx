export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <div className="section-label">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}
