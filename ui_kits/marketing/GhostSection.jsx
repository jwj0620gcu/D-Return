/* eslint-disable no-undef */
// Mastercard marketing — GhostSection.jsx

const GhostSection = () => (
  <section style={{ position: "relative", padding: "120px 48px 100px", overflow: "hidden" }}>
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      pointerEvents: "none",
      color: "#E8E2DA",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "clamp(120px, 14vw, 220px)",
      lineHeight: 1,
      letterSpacing: "-0.04em",
      whiteSpace: "nowrap",
    }}>priceless</div>
    <div style={{
      position: "relative", zIndex: 2,
      maxWidth: 1180, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
    }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Portrait size={340} tone="sun" eyebrow="Priceless" title="Experiences money can't buy" satellitePosition="br"/>
      </div>
      <div style={{ paddingLeft: 24 }}>
        <h2 style={{ fontSize: 44, marginBottom: 20 }}>
          Some things you buy. The best things, you experience.
        </h2>
        <p style={{ color: "var(--fg)", marginBottom: 28, maxWidth: 420 }}>
          From a courtside seat to a once-in-a-lifetime tasting menu, Priceless puts you closer to the
          moments that matter — wherever your card takes you.
        </p>
        <PrimaryButton>Explore Priceless</PrimaryButton>
      </div>
    </div>
  </section>
);

window.GhostSection = GhostSection;
