/* eslint-disable no-undef */
// D-return — Logo.jsx
const Logo = ({ className = "", size = 22 }) => (
  <span className={`wordmark inline-flex items-baseline ${className}`} style={{ fontSize: size, lineHeight: 1 }}>
    <span className="d" style={{ fontStyle: "normal", fontWeight: 500, fontFamily: "Pretendard Variable, sans-serif", letterSpacing: "-0.04em" }}>D</span>
    <span style={{ marginLeft: -1, marginRight: 1 }}>‑</span>
    <span>return</span>
  </span>
);
window.Logo = Logo;
