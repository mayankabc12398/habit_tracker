import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Settings from "./pages/Settings";
import useLocalStorage from "./hooks/useLocalStorage";
import useDarkMode from "./hooks/useDarkMode";
import { getToday } from "./utils/dateUtils";

function App() {
  const [habits, setHabits] = useLocalStorage("habits", []);
  const [editingHabit, setEditingHabit] = useState(null);
  const [dark, setDark] = useDarkMode();
  const [preferences, setPreferences] = useLocalStorage("preferences", {
    weekStart: "monday",
  });

  const addHabit = (habit) => setHabits((p) => [...p, habit]);

  const deleteHabit = (id) => {
    if (!confirm("Delete this habit?")) return;
    setHabits((p) => p.filter((h) => h.id !== id));
  };

  const markAllToday = () => {
    const today = getToday();

    setHabits((prev) =>
      prev.map((h) =>
        h.completedDates.includes(today)
          ? h
          : { ...h, completedDates: [...h.completedDates, today] },
      ),
    );
  };

  const clearToday = () => {
    const ok = window.confirm("Clear today's progress?");
    if (!ok) return;

    const today = getToday();

    setHabits((prev) =>
      prev.map((h) => ({
        ...h,
        completedDates: h.completedDates.filter((d) => d !== today),
      })),
    );
  };

  const updateHabit = (id, updates) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...updates } : h)),
    );
    setEditingHabit(null);
  };

  const toggleHabit = (id) => {
    const today = getToday();
    setHabits((p) =>
      p.map((h) =>
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
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard habits={habits} />} />
          <Route
            path="/habits"
            element={
              <Habits
                habits={habits}
                addHabit={addHabit}
                toggleHabit={toggleHabit}
                deleteHabit={deleteHabit}
                editingHabit={editingHabit}
                setEditingHabit={setEditingHabit}
                updateHabit={updateHabit}
                clearToday={clearToday}
                markAllToday={markAllToday}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                dark={dark}
                setDark={setDark}
                habits={habits}
                setHabits={setHabits}
                preferences={preferences}
                setPreferences={setPreferences}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
