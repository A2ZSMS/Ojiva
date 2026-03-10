export default function SectionHeading({ tag, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle${center ? ' mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
