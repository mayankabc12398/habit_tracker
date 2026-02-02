export default function Heatmap({ habits, days }) {
  const today = new Date().toISOString().split("T")[0];

  const getCount = (day) =>
    habits.filter(h => h.completedDates.includes(day)).length;

  const getColor = (count) => {
    if (count === 0) return "#ebedf0";
    if (count === 1) return "#c6e48b";
    if (count === 2) return "#7bc96f";
    return "#239a3b";
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <h6 className="mb-0">Activity Heatmap</h6>
          <small className="text-muted">Last {days.length} days</small>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 14px)",
            gridAutoRows: "14px",
            gap: "4px"
          }}
        >
          {days.map((day) => {
            const count = getCount(day);

            return (
              <div
                key={day}
                title={`${day} : ${count} habits`}
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "3px",
                  backgroundColor: getColor(count),
                  border:
                    day === today
                      ? "1px solid #000"
                      : "1px solid transparent",
                  transition: "transform 0.15s ease"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            );
          })}
        </div>

        {/* LEGEND */}
        <div className="d-flex align-items-center gap-2 mt-3">
          <small className="text-muted">Less</small>
          {["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b"].map((c) => (
            <span
              key={c}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: c,
                borderRadius: "3px",
                display: "inline-block"
              }}
            />
          ))}
          <small className="text-muted">More</small>
        </div>
      </div>
    </div>
  );
}
