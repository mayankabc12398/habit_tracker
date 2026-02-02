export default function DarkToggle({ dark, setDark }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={dark}
        onChange={() => setDark(!dark)}
      />
      <label className="form-check-label">
        Dark Mode
      </label>
    </div>
  );
}
