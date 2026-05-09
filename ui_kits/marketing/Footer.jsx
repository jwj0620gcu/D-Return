/* eslint-disable no-undef */
// Mastercard marketing — Footer.jsx

const FOOTER_COLS = [
  {
    title: "Need help?",
    links: [
      { label: "Contact support", icon: "support" },
      { label: "Lost or stolen card", icon: "card" },
      { label: "Find an ATM", icon: "map" },
      { label: "FAQs", icon: "help" },
    ],
  },
  {
    title: "For business",
    links: [
      { label: "Solutions" },
      { label: "Insights", external: true },
      { label: "Developers" },
      { label: "Brighterion AI", external: true },
    ],
  },
  {
    title: "For you",
    links: [
      { label: "Cards" },
      { label: "Benefits" },
      { label: "Priceless", external: true },
      { label: "Sustainability" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Mastercard" },
      { label: "Newsroom", external: true },
      { label: "Investors", external: true },
      { label: "Careers" },
    ],
  },
];

const FooterIcon = ({ name }) => {
  const props = {
    width: 16, height: 16, viewBox: "0 0 24 24", fill: "none",
    stroke: "rgba(255,255,255,0.7)", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
  };
  if (name === "support") return <svg {...props}><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>;
  if (name === "card") return <svg {...props}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>;
  if (name === "map") return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  if (name === "help") return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.5 1.5c-.5.5-1.5 1-2 2"/><circle cx="12" cy="17" r="0.6" fill="rgba(255,255,255,0.7)"/></svg>;
  return null;
};

const SocialIcon = ({ name }) => {
  const props = {
    width: 18, height: 18, viewBox: "0 0 24 24", fill: "rgba(255,255,255,0.85)",
  };
  if (name === "linkedin") return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3" fill="rgba(255,255,255,0.12)"/><path d="M8 17v-7M8 7.5v.01M11.5 17v-3.8c0-1.6 1-2.7 2.4-2.7s2.1 1.1 2.1 2.7V17M11.5 10v7" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>;
  if (name === "facebook") return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3" fill="rgba(255,255,255,0.12)"/><path d="M14 9V7.5c0-.6.4-1 1-1h1V4h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2l.5-3H14z"/></svg>;
  if (name === "x") return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3" fill="rgba(255,255,255,0.12)"/><path d="M7 7l10 10M17 7 7 17" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>;
  if (name === "youtube") return <svg {...props}><rect x="3" y="6" width="18" height="12" rx="3" fill="rgba(255,255,255,0.12)"/><path d="m11 9 4 3-4 3V9z" fill="rgba(255,255,255,0.85)"/></svg>;
  return null;
};

const Footer = () => (
  <footer style={{
    background: "#141413", color: "#fff",
    padding: "80px 48px 48px",
    marginTop: 80,
  }}>
    <div style={{ maxWidth: 1180, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 48, marginBottom: 64 }}>
        <h2 style={{ color: "#fff", fontSize: 56, lineHeight: 1.05, maxWidth: 720 }}>
          We're always here when you need us.
        </h2>
        <img src="../../assets/mastercard-logo.svg" alt="Mastercard" style={{ width: 64, height: 40, flex: "0 0 auto" }}/>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {FOOTER_COLS.map(col => (
          <div key={col.title}>
            <div style={{
              fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)", marginBottom: 18,
            }}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map(l => (
                <a key={l.label} href="#" style={{
                  color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 450, fontSize: 14,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10,
                }}>
                  {l.icon && <FooterIcon name={l.icon}/>}
                  <span>{l.label}{l.external && <span style={{ color: "rgba(255,255,255,0.55)", marginLeft: 4 }}>↗</span>}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.30)", margin: "48px 0 24px" }}/>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 18, fontFamily: "var(--font-sans)", fontWeight: 450, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
          <span>© 2026 Mastercard</span>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Privacy Notice</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Terms of Use</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Cookie Notice</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Your Privacy Choices</a>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button style={{
            background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.40)",
            borderRadius: 999, padding: "8px 16px",
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13,
            letterSpacing: "-0.02em", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>English (United States)
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div style={{ display: "flex", gap: 6 }}>
            <a href="#" aria-label="LinkedIn"><SocialIcon name="linkedin"/></a>
            <a href="#" aria-label="Facebook"><SocialIcon name="facebook"/></a>
            <a href="#" aria-label="X"><SocialIcon name="x"/></a>
            <a href="#" aria-label="YouTube"><SocialIcon name="youtube"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
