/* eslint-disable no-undef */
// Mastercard marketing — CookieBanner.jsx

const CookieBanner = ({ onClose }) => (
  <div style={{
    position: "fixed",
    left: 24, right: 24, bottom: 24,
    zIndex: 100,
    background: "#FFFFFF",
    borderRadius: 24,
    boxShadow: "rgba(0,0,0,0.08) 0 24px 48px 0",
    padding: "20px 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 24, flexWrap: "wrap",
    maxWidth: 1180, margin: "0 auto",
  }}>
    <div style={{ flex: 1, minWidth: 280 }}>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--fg)" }}>
        We use cookies to give you the best experience and to help us learn how to improve our services.
        You can manage your choices below or in our <a href="#" style={{ color: "#3860BE" }}>Cookie Notice</a>.
      </p>
    </div>
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <ConsentButton variant="link" onClick={onClose}>Cookie details</ConsentButton>
      <ConsentButton onClick={onClose}>Accept all</ConsentButton>
      <ConsentButton onClick={onClose} style={{ background: "transparent", color: "#141413", border: "1px solid #141413" }}>Reject all</ConsentButton>
    </div>
  </div>
);

window.CookieBanner = CookieBanner;
