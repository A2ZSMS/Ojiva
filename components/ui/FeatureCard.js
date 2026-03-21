export default function FeatureCard({ icon, title, description, tag }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      {tag && (
        <span className="section-tag mb-2" style={{ fontSize: '0.72rem' }}>
          {tag}
        </span>
      )}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </article>
  );
}
