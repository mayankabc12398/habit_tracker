import { getToday } from "../utils/dateUtils";

export default function HabitItem({
  habit,
  onToggle,
  onDelete,
  onEdit
}) {
  const today = getToday();
  const isDone = habit.completedDates.includes(today);

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center habit-item ${
        isDone ? "habit-done" : ""
      }`}
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isDone}
          onChange={() => onToggle(habit.id)}
        />

        <label
          className={`form-check-label ${
            isDone ? "text-decoration-line-through" : ""
          }`}
        >
          {habit.title}
        </label>
      </div>

      <div className="btn-group btn-group-sm">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onEdit(habit)}
        >
          ✏️
        </button>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete(habit.id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
