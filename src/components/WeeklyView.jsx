import { getToday } from "../utils/dateUtils";

export default function WeeklyView({ habits }) {
  const today = new Date();

  const days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - i);
    return d.toISOString().split("T")[0];
  });

  return (
    <div className="mt-4">
      <h6 className="mb-2">Last 7 Days</h6>

      {days.map((day) => {
        const done = habits.filter((h) =>
          h.completedDates.includes(day)
        ).length;

        return (
          <div
            key={day}
            className="d-flex justify-content-between small border-bottom py-1"
          >
            <span>{day}</span>
            <span>{done}/{habits.length}</span>
          </div>
        );
      })}
    </div>
  );
}
