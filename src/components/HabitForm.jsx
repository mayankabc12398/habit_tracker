import { useEffect, useState } from "react";
import { CATEGORIES } from "../utils/categories";

export default function HabitForm({ onAdd, onUpdate, editingHabit }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");

  useEffect(() => {
    if (editingHabit) {
      setTitle(editingHabit.title);
      setCategory(editingHabit.category || "General");
    }
  }, [editingHabit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingHabit) {
      onUpdate(editingHabit.id, {
        title: title.trim(),
        category
      });
    } else {
      onAdd({
        id: crypto.randomUUID(),
        title: title.trim(),
        category,
        createdAt: new Date().toISOString(),
        completedDates: []
      });
    }

    setTitle("");
    setCategory("General");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row g-2">
        <div className="col-8">
          <input
            className="form-control"
            placeholder="Habit name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.label} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="btn btn-primary w-100 mt-2">
        {editingHabit ? "Update Habit" : "Add Habit"}
      </button>
    </form>
  );
}
