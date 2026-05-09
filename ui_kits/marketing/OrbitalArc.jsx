/* eslint-disable no-undef */
// Mastercard marketing — OrbitalArc.jsx

// A single thin arc in Light Signal Orange. Drawn between two normalized points on the parent
// (0..1 coordinates), with curvature controlled by `bend` (negative = arch up, positive = arch down).
const OrbitalArc = ({ from = [0.1, 0.5], to = [0.9, 0.5], bend = -0.25, color = "#F37338" }) => {
  // Generate a cubic bezier between the two points with two control handles offset by `bend`.
  const [x1, y1] = from;
  const [x2, y2] = to;
  const cx1 = x1 + (x2 - x1) * 0.30;
  const cx2 = x1 + (x2 - x1) * 0.70;
  const cy = (y1 + y2) / 2 + bend;
  const d = `M ${x1*100} ${y1*100} C ${cx1*100} ${cy*100}, ${cx2*100} ${cy*100}, ${x2*100} ${y2*100}`;
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d={d} fill="none" stroke={color} strokeWidth="0.25" strokeLinecap="round"
            vectorEffect="non-scaling-stroke" style={{ strokeWidth: 1.4 }}/>
    </svg>
  );
};

window.OrbitalArc = OrbitalArc;
