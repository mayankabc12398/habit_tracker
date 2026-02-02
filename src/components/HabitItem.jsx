import { useState } from "react";
import { CATEGORIES } from "../utils/categories";
import { getToday } from "../utils/dateUtils";

export default function HabitItem({
  habit,
  onToggle,
  onDelete,
  onEdit
}) {
  const today = getToday();
  const isDone = habit.completedDates.includes(today);

  const category =
    CATEGORIES.find((c) => c.label === habit.category) ||
    CATEGORIES[0];

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(habit.title);
  const [cat, setCat] = useState(habit.category || "General");

  const saveEdit = () => {
    if (!title.trim()) return;
    onEdit(habit.id, {
      title: title.trim(),
      category: cat
    });
    setIsEditing(false);
  };

  return (
    <div
      className={`card border-0 shadow-sm mb-2 ${
        isDone ? "opacity-75" : ""
      }`}
    >
      <div className="card-body py-2 px-3 d-flex justify-content-between align-items-center">
        {/* LEFT */}
        <div className="w-100 me-2">
          {!isEditing ? (
            <>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isDone}
                  onChange={() => onToggle(habit.id)}
                />
                <label
                  className={`form-check-label fw-medium ${
                    isDone ? "text-decoration-line-through" : ""
                  }`}
                >
                  {habit.title}
                </label>
              </div>

              <span className={`badge bg-${category.color}`}>
                {category.label}
              </span>
            </>
          ) : (
            <>
              <input
                className="form-control form-control-sm mb-1"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit();
                  if (e.key === "Escape") setIsEditing(false);
                }}
              />

              <select
                className="form-select form-select-sm"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                {CATEGORIES.map((c) => (
                  <option key={c.label} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="btn-group btn-group-sm">
          {!isEditing ? (
            <>
              <button
                type="button"
                className="btn btn-outline-secondary"
                title="Edit"
                onClick={() => setIsEditing(true)}
              >
                ✏️
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                title="Delete"
                onClick={() => onDelete(habit.id)}
              >
                🗑️
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-success"
                title="Save"
                onClick={saveEdit}
              >
                ✔
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                title="Cancel"
                onClick={() => setIsEditing(false)}
              >
                ✖
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
