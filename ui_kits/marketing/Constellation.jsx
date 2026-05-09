/* eslint-disable no-undef */
// Mastercard marketing — Constellation.jsx
// Composes 3 Portraits + 2 OrbitalArcs into the asymmetric service grid that defines Mastercard's brand.

const Constellation = () => (
  <div style={{ position: "relative", padding: "32px 0 64px" }}>
    {/* Asymmetric grid: portrait positioned via flex with offsets */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 56,
      alignItems: "start",
      position: "relative",
      zIndex: 2,
    }}>
      <div style={{ paddingTop: 40 }}>
        <Portrait size={260} tone="ember" eyebrow="Services" title="Card services for every business"/>
      </div>
      <div style={{ paddingTop: 110, display: "flex", justifyContent: "center" }}>
        <Portrait size={300} tone="marigold" eyebrow="Solutions" title="A connected economy that works for everyone" satellitePosition="br"/>
      </div>
      <div style={{ paddingTop: 0, display: "flex", justifyContent: "flex-end" }}>
        <Portrait size={240} tone="clay" eyebrow="Insights" title="The future of payments, in your inbox" satellitePosition="br"/>
      </div>
    </div>

    {/* Orbital arcs — drawn behind the portraits */}
    <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
      <OrbitalArc from={[0.18, 0.45]} to={[0.5, 0.62]}  bend={-0.22}/>
      <OrbitalArc from={[0.55, 0.62]} to={[0.86, 0.32]} bend={-0.20}/>
    </div>
  </div>
);

window.Constellation = Constellation;
