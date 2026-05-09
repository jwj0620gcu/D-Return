/* eslint-disable no-undef */
// Mastercard marketing — Buttons.jsx

const PrimaryButton = ({ children, size = "default", style, ...rest }) => {
  const padding = size === "lg" ? "14px 36px" : "8px 26px";
  const radius  = size === "lg" ? "40px" : "20px";
  const fontSize = size === "lg" ? "18px" : "16px";
  return (
    <button
      style={{
        background: "#141413",
        color: "var(--mc-canvas)",
        border: "1.5px solid #141413",
        borderRadius: radius,
        padding,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize,
        letterSpacing: "-0.02em",
        cursor: "pointer",
        whiteSpace: "nowrap",
        flex: "0 0 auto",
        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
        ...style,
      }}
      onMouseDown={e => e.currentTarget.style.transform = "scale(0.98)"}
      onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      {...rest}
    >{children}</button>
  );
};

const SecondaryButton = ({ children, ...rest }) => (
  <button
    style={{
      background: "#FFFFFF",
      color: "#141413",
      border: "1.5px solid #141413",
      borderRadius: 20,
      padding: "8px 26px",
      fontFamily: "var(--font-sans)",
      fontWeight: 450,
      fontSize: 16,
      cursor: "pointer",
      whiteSpace: "nowrap",
      flex: "0 0 auto",
    }}
    {...rest}
  >{children}</button>
);

const ConsentButton = ({ children, variant = "primary", ...rest }) => {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 13,
    letterSpacing: "0.01em",
    border: 0,
    borderRadius: 24,
    padding: "10px 30px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flex: "0 0 auto",
  };
  if (variant === "primary") {
    return <button style={{ ...base, background: "#CF4500", color: "#fff" }} {...rest}>{children}</button>;
  }
  return (
    <button style={{
      ...base,
      background: "transparent",
      color: "#9A3A0A",
      textDecoration: "underline",
      textUnderlineOffset: 3,
      padding: "10px 14px",
    }} {...rest}>{children}</button>
  );
};

const ArrowIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="#141413" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
  </svg>
);

const Satellite = ({ size = 56, onClick, ariaLabel = "Open" }) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#FFFFFF",
      border: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "rgba(0,0,0,0.08) 0 8px 24px 0",
      cursor: "pointer",
      transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}
    onMouseEnter={e => e.currentTarget.querySelector("svg").style.transform = "translateX(3px)"}
    onMouseLeave={e => e.currentTarget.querySelector("svg").style.transform = "translateX(0)"}
  >
    <ArrowIcon size={size * 0.4} />
  </button>
);

const IconButton = ({ icon, size = 40, ariaLabel, onClick, bordered = true }) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    style={{
      width: size, height: size, borderRadius: "50%",
      background: "#FFFFFF",
      border: bordered ? "1px solid rgba(20,20,19,0.18)" : 0,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", flex: "0 0 auto",
    }}
  >{icon}</button>
);

Object.assign(window, { PrimaryButton, SecondaryButton, ConsentButton, Satellite, IconButton, ArrowIcon });
