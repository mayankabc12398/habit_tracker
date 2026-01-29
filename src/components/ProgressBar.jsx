import { getToday } from "../utils/dateUtils";

export default function ProgressBar({ habits }) {
  const today = getToday();

  const total = habits.length;
  const completed = habits.filter((h) =>
    h.completedDates.includes(today)
  ).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between mb-1">
        <small>Today's Progress</small>
        <small>{percent}%</small>
      </div>

      <div className="progress">
        <div
          className="progress-bar bg-success"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
