export default function DarkToggle({ dark, setDark }) {
  return (
    <button
      className="btn btn-sm btn-outline-secondary w-100 mb-3"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
