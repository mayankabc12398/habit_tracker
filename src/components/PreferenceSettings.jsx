export default function PreferenceSettings({
  preferences,
  setPreferences
}) {
  return (
    <div>
      <label className="form-label small">
        Week starts on
      </label>

      <select
        className="form-select w-50"
        value={preferences.weekStart}
        onChange={(e) =>
          setPreferences({
            ...preferences,
            weekStart: e.target.value
          })
        }
      >
        <option value="monday">Monday</option>
        <option value="sunday">Sunday</option>
      </select>
    </div>
  );
}
