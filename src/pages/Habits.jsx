import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

export default function Habits({
  habits,
  addHabit,
  toggleHabit,
  deleteHabit,
  editingHabit,
  setEditingHabit,
  updateHabit,
  markAllToday,
  clearToday
}) {
  return (
    <>
      <HabitForm
        onAdd={addHabit}
        onUpdate={updateHabit}
        editingHabit={editingHabit}
      />

     <HabitList
  habits={habits}
  onToggle={toggleHabit}
  onDelete={deleteHabit}
  onEdit={updateHabit}
  onMarkAll={markAllToday}
  onClearToday={clearToday}
/>
    </>
  );
}
