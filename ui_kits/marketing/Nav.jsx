/* eslint-disable no-undef */
// Mastercard marketing — Nav.jsx

const Nav = ({ activeLink = "For you", onSearch }) => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const links = ["For you", "For business", "For the world", "For innovators", "News and trends"];
  return (
    <nav style={{
      position: "sticky",
      top: 24,
      zIndex: 50,
      margin: "24px auto 0",
      maxWidth: 1180,
      background: "#FFFFFF",
      borderRadius: 999,
      boxShadow: "rgba(0,0,0,0.04) 0 4px 24px 0",
      padding: "14px 22px",
      display: "flex",
      alignItems: "center",
      gap: 28,
    }}>
      <a href="#" aria-label="Mastercard home" style={{ display: "inline-flex", flex: "0 0 auto" }}>
        <img src="../../assets/mastercard-logo.svg" alt="Mastercard" style={{ width: 42, height: 26 }}/>
      </a>
      {!searchOpen && (
        <div style={{ display: "flex", gap: 36, flex: 1, justifyContent: "center" }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              color: "#141413",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "-0.03em",
              textDecoration: "none",
              borderBottom: l === activeLink ? "1.5px solid #141413" : "1.5px solid transparent",
              paddingBottom: 2,
            }}>{l}</a>
          ))}
        </div>
      )}
      {searchOpen && (
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <input
            autoFocus
            placeholder="Search Mastercard…"
            style={{
              flex: 1, border: 0, outline: 0, background: "transparent",
              fontFamily: "var(--font-sans)", fontSize: 16, color: "#141413",
              padding: "8px 12px",
              borderBottom: "1px solid rgba(20,20,19,0.5)"
            }}
          />
        </div>
      )}
      <IconButton
        ariaLabel="Search"
        size={42}
        bordered={false}
        onClick={() => setSearchOpen(s => !s)}
        icon={
          searchOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="#141413" strokeWidth="1.6" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="#141413" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>
            </svg>
          )
        }
      />
    </nav>
  );
};

window.Nav = Nav;
