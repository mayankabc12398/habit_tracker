import { useEffect, useState } from "react";

export default function HabitForm({ onAdd, onUpdate, editingHabit }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingHabit) {
      setTitle(editingHabit.title);
    }
  }, [editingHabit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingHabit) {
      onUpdate(editingHabit.id, title.trim());
    } else {
      onAdd({
        id: crypto.randomUUID(),
        title: title.trim(),
        createdAt: new Date().toISOString(),
        completedDates: []
      });
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter habit"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary">
        {editingHabit ? "Update" : "Add"}
      </button>
    </form>
  );
}
