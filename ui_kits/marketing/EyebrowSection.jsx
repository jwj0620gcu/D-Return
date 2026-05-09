/* eslint-disable no-undef */
// Mastercard marketing — EyebrowSection.jsx

const EyebrowSection = ({ eyebrow, headline, body, cta }) => (
  <div style={{ maxWidth: 760 }}>
    <span className="mc-eyebrow" style={{ marginBottom: 20, display: "inline-flex" }}>{eyebrow}</span>
    <h2 style={{ fontSize: 48, lineHeight: 1.1, marginTop: 16, marginBottom: 20 }}>{headline}</h2>
    {body && <p style={{ color: "var(--fg)", marginBottom: 24, maxWidth: 520 }}>{body}</p>}
    {cta && <PrimaryButton>{cta}</PrimaryButton>}
  </div>
);

window.EyebrowSection = EyebrowSection;
