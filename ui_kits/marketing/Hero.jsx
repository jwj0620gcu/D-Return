/* eslint-disable no-undef */
// Mastercard marketing — Hero.jsx

const Hero = () => (
  <section style={{ padding: "56px 48px 40px" }}>
    <div style={{
      maxWidth: 1180, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "end", marginBottom: 48,
    }}>
      <div>
        <span className="mc-eyebrow" style={{ marginBottom: 24, display: "inline-flex" }}>Priceless</span>
        <h1 style={{ fontSize: 72, lineHeight: 1, marginTop: 16, maxWidth: 640 }}>
          Priceless possibilities, powered by you.
        </h1>
      </div>
      <div style={{ paddingBottom: 8 }}>
        <p style={{ color: "var(--fg)", maxWidth: 380, marginBottom: 24 }}>
          The connected world deserves a payments network that's open, smart and secure. Discover what we're
          doing for everyone, everywhere — at every checkout that matters.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <PrimaryButton>Discover Priceless</PrimaryButton>
          <SecondaryButton>Watch the film</SecondaryButton>
        </div>
      </div>
    </div>
    <HeroFrame/>
  </section>
);

const HeroFrame = () => (
  <div style={{
    position: "relative",
    height: 460,
    borderRadius: 40,
    overflow: "hidden",
    background:
      "radial-gradient(circle at 22% 30%, #4a4a4a 0%, transparent 55%), " +
      "radial-gradient(circle at 78% 70%, #3a2a1a 0%, transparent 55%), " +
      "linear-gradient(135deg, #2B2B2B 0%, #141413 100%)",
    boxShadow: "rgba(0,0,0,0.08) 0 24px 48px 0",
  }}>
    {/* a glowing card silhouette */}
    <div style={{
      position: "absolute",
      left: "50%", top: "50%",
      transform: "translate(-50%, -50%) rotate(-8deg)",
      width: 360, height: 230, borderRadius: 22,
      background: "linear-gradient(135deg, #F2A24E 0%, #CF4500 70%, #9A3A0A 100%)",
      boxShadow: "rgba(255,140,80,0.35) 0 40px 80px 0",
    }}>
      <div style={{ position: "absolute", left: 26, bottom: 22, color: "#fff",
        fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.02em" }}>
        priceless
      </div>
      <div style={{ position: "absolute", right: 22, top: 22, display: "flex", gap: 4 }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#EB001B", opacity: 0.95 }}/>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F79E1B", opacity: 0.95, marginLeft: -10 }}/>
      </div>
    </div>
    {/* play button */}
    <button aria-label="Play film" style={{
      position: "absolute", left: 36, bottom: 32,
      width: 70, height: 70, borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.4)",
      background: "rgba(255,255,255,0.12)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      backdropFilter: "blur(2px)", cursor: "pointer",
    }}>
      <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>
    </button>
    <span style={{
      position: "absolute", right: 36, bottom: 36, color: "#fff",
      fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 18, letterSpacing: "-0.02em",
    }}>A film about possibility</span>
  </div>
);

window.Hero = Hero;
