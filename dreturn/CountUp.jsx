/* eslint-disable no-undef */
// D-return — CountUp.jsx
// Animates a number from 0 to `to` once it scrolls into view.
const CountUp = ({ to, suffix = "", duration = 1500, format = "comma", className = "" }) => {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(eased * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const display = format === "comma" ? val.toLocaleString("ko-KR") : String(val);
  return <span ref={ref} className={className}>{display}{suffix}</span>;
};
window.CountUp = CountUp;
