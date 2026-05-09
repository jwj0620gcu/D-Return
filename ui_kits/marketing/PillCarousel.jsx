/* eslint-disable no-undef */
// Mastercard marketing — PillCarousel.jsx

const STORIES = [
  { tone: "ember",    chip: "Story",   title: "How a small bakery in Lagos got paid in 30 seconds",  cta: "Read the story" },
  { tone: "marigold", chip: "Series",  title: "Powering tomorrow's checkout, one card at a time",     cta: "Watch the series" },
  { tone: "clay",     chip: "Report",  title: "What 1.6 billion transactions tell us about resilience", cta: "Read the report" },
];

const PillCard = ({ story }) => (
  <div style={{
    flex: "0 0 56%",
    minWidth: 0,
    height: 420,
    borderRadius: 999,
    position: "relative",
    overflow: "hidden",
    background:
      story.tone === "ember"    ? "linear-gradient(135deg, #F2A24E 0%, #CF4500 60%, #5b1f00 100%)" :
      story.tone === "marigold" ? "linear-gradient(135deg, #FFD27A 0%, #F2A24E 55%, #9A3A0A 100%)" :
                                   "linear-gradient(135deg, #EAB78C 0%, #B36A3A 55%, #3a1500 100%)",
    boxShadow: "rgba(0,0,0,0.08) 0 24px 48px 0",
  }}>
    <span style={{
      position: "absolute", top: 32, left: 40,
      background: "#fff", color: "#141413",
      borderRadius: 999, padding: "8px 20px",
      fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13,
      letterSpacing: "-0.02em",
    }}>{story.chip}</span>

    <div style={{ position: "absolute", left: 40, right: 40, bottom: 32 }}>
      <h3 style={{
        color: "#fff", fontSize: 28, lineHeight: 1.2,
        marginBottom: 20, maxWidth: 460,
      }}>{story.title}</h3>
      <button style={{
        background: "#141413", color: "var(--mc-canvas)", border: 0,
        borderRadius: 40, padding: "14px 30px",
        fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 16,
        letterSpacing: "-0.02em", cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>{story.cta}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
);

const PillCarousel = () => {
  const [idx, setIdx] = React.useState(0);
  const advance = (delta) => setIdx((idx + delta + STORIES.length) % STORIES.length);
  return (
    <section style={{ padding: "64px 48px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
          <div>
            <span className="mc-eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>Stories</span>
            <h2 style={{ fontSize: 44, marginTop: 14, maxWidth: 520 }}>
              Real moments, made possible.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10, paddingBottom: 8 }}>
            <IconButton ariaLabel="Previous" onClick={() => advance(-1)} icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            }/>
            <IconButton ariaLabel="Next" onClick={() => advance(1)} icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            }/>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "flex", gap: 24,
            transform: `translateX(calc(${-idx} * (56% + 24px)))`,
            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>
            {STORIES.map((s, i) => <PillCard key={i} story={s}/>)}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 22, justifyContent: "center" }}>
          {STORIES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Story ${i+1}`}
              style={{
                width: 28, height: 4, borderRadius: 2, border: 0,
                background: i === idx ? "#F37338" : "rgba(20,20,19,0.18)",
                cursor: "pointer", padding: 0,
              }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

window.PillCarousel = PillCarousel;
