import HabitItem from "./HabitItem";

export default function HabitList({ habits, onToggle }) {
  if (habits.length === 0) {
    return (
      <p className="text-center text-muted mt-4">
        No habits yet. Start with one 🚀
      </p>
    );
  }

  return (
    <ul className="list-group mt-4">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
