export default function DataSettings({ habits, setHabits }) {
  const exportData = () => {
    const blob = new Blob(
      [JSON.stringify(habits, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "habits-backup.json";
    a.click();
  };

  const resetData = () => {
    const ok = window.confirm(
      "This will delete all habits. Are you sure?"
    );
    if (!ok) return;

    setHabits([]);
  };

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-outline-primary"
        onClick={exportData}
      >
        Export Data
      </button>

      <button
        className="btn btn-outline-danger"
        onClick={resetData}
      >
        Reset All Data
      </button>
    </div>
  );
}
