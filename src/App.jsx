import { useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import useLocalStorage from "./hooks/useLocalStorage";
import { getToday } from "./utils/dateUtils";
import ProgressBar from "./components/ProgressBar";
import Streak from "./components/Streak";
import useDarkMode from "./hooks/useDarkMode";
import DarkToggle from "./components/DarkToggle";

import WeeklyView from "./components/WeeklyView";

function App() {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const [editingHabit, setEditingHabit] = useState(null);
  const [dark, setDark] = useDarkMode();

  const addHabit = (habit) => {
    setHabits((prev) => [...prev, habit]);
  };

  const deleteHabit = (id) => {
    if (!confirm("Delete this habit?")) return;
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const updateHabit = (id, title) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, title } : h)));
    setEditingHabit(null);
  };

  const toggleHabit = (id) => {
    const today = getToday();
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              completedDates: h.completedDates.includes(today)
                ? h.completedDates.filter((d) => d !== today)
                : [...h.completedDates, today],
            }
          : h,
      ),
    );
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div
              className={`card shadow-lg border-0 rounded-4 ${
                dark ? "bg-secondary text-light" : ""
              }`}
            >
              {/* <div className="card shadow-lg border-0 rounded-4"> */}
              <div className="card-body p-4">
                <Header />
                <div className="d-flex justify-content-end">
                  <DarkToggle dark={dark} setDark={setDark} />
                </div>
                {/* <DarkToggle dark={dark} setDark={setDark} /> */}

                <HabitForm
                  onAdd={addHabit}
                  onUpdate={updateHabit}
                  editingHabit={editingHabit}
                />
                <ProgressBar habits={habits} />
                <Streak habits={habits} />
                <WeeklyView habits={habits} />

                <HabitList
                  habits={habits}
                  onToggle={toggleHabit}
                  onDelete={deleteHabit}
                  onEdit={setEditingHabit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
