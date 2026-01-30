export default function DashboardFilter({ value, onChange }) {
  return (
    <div className="d-flex justify-content-end mb-3">
      <div className="btn-group btn-group-sm">
        <button
          className={`btn btn-outline-primary ${
            value === "today" ? "active" : ""
          }`}
          onClick={() => onChange("today")}
        >
          Today
        </button>

        <button
          className={`btn btn-outline-primary ${
            value === "week" ? "active" : ""
          }`}
          onClick={() => onChange("week")}
        >
          7 Days
        </button>

        <button
          className={`btn btn-outline-primary ${
            value === "all" ? "active" : ""
          }`}
          onClick={() => onChange("all")}
        >
          All
        </button>
      </div>
    </div>
  );
}
