/* eslint-disable no-undef */
// Mastercard marketing — Portrait.jsx

// Square→circle masked "portrait" for service/solution cards.
// `tone` selects from a small set of warm radial gradients that stand in for editorial photography.
const PORTRAIT_TONES = {
  ember:    "radial-gradient(circle at 30% 30%, #F2A24E 0%, #CF4500 60%, #9A3A0A 100%)",
  marigold: "radial-gradient(circle at 35% 35%, #FFD27A 0%, #F2A24E 55%, #CF4500 100%)",
  clay:     "radial-gradient(circle at 30% 30%, #EAB78C 0%, #B36A3A 55%, #5b1f00 100%)",
  cream:    "radial-gradient(circle at 35% 30%, #F8E4CC 0%, #E0B98A 55%, #9A3A0A 100%)",
  sun:      "radial-gradient(circle at 30% 30%, #FFE08A 0%, #F79E1B 55%, #CF4500 100%)",
};

const Portrait = ({
  size = 280,
  tone = "ember",
  eyebrow,
  title,
  satellitePosition = "br",
  onClick,
}) => {
  const positionStyles = {
    br: { right: -10, bottom: 14 },
    bl: { left: -10, bottom: 14 },
    tr: { right: -10, top: 14 },
    tl: { left: -10, top: 14 },
  }[satellitePosition];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
      <div style={{ position: "relative", width: size }}>
        <div
          onClick={onClick}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: PORTRAIT_TONES[tone] || PORTRAIT_TONES.ember,
            boxShadow: "rgba(0,0,0,0.08) 0 24px 48px 0",
            cursor: onClick ? "pointer" : "default",
            transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div style={{ position: "absolute", ...positionStyles }}>
          <Satellite size={size * 0.22} onClick={onClick} ariaLabel={`Open ${title}`} />
        </div>
      </div>
      {(eyebrow || title) && (
        <div style={{ maxWidth: size * 1.2 }}>
          {eyebrow && <span className="mc-eyebrow" style={{ marginBottom: 12, display: "inline-flex" }}>{eyebrow}</span>}
          {title && <h3 style={{ marginTop: 12 }}>{title}</h3>}
        </div>
      )}
    </div>
  );
};

window.Portrait = Portrait;
window.PORTRAIT_TONES = PORTRAIT_TONES;
