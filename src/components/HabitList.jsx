import { getToday } from "../utils/dateUtils";
import HabitItem from './HabitItem'
export default function HabitList({
  habits,
  onToggle,
  onDelete,
  onEdit,
  onMarkAll,
  onClearToday
}) {
  if (!habits || habits.length === 0) {
    return (
      <div className="alert alert-light text-center">
        No habits yet. Add your first habit 💪
      </div>
    );
  }

  return (
    <>
      {/* BULK ACTIONS */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="text-muted">
          {habits.length} habits
        </small>

        <div className="btn-group btn-group-sm">
          <button
            className="btn btn-outline-success"
            onClick={onMarkAll}
          >
            Mark all today
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={onClearToday}
          >
            Clear today
          </button>
        </div>
      </div>

      {/* HABIT ITEMS */}
      <div>
        {habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
}
