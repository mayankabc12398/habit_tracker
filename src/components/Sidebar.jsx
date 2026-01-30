import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          onClick={() => setOpen(false)}
          style={{ zIndex: 1040 }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 bg-white shadow ${
          open ? "translate-x-0" : "translate-x-n100"
        }`}
        style={{
          width: "260px",
          maxWidth: "80vw",
          zIndex: 1050,
          transition: "transform 0.3s ease",
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="p-3 border-bottom fw-bold">📋 Menu</div>

        <nav className="nav flex-column p-2">
          <NavLink to="/" className="nav-link py-2">
            🏠 <span className="ms-1">Home</span>
          </NavLink>

          <NavLink to="/habits" className="nav-link py-2">
            ✅ <span className="ms-1">Habits</span>
          </NavLink>

          <NavLink to="/settings" className="nav-link py-2">
            ⚙️ <span className="ms-1">Settings</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
