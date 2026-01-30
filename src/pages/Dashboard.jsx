import { useState } from "react";
import DashboardCards from "../components/DashboardCards";
import ProgressBar from "../components/ProgressBar";
import Streak from "../components/Streak";
import WeeklyChart from "../components/WeeklyChart";
import WeeklyView from "../components/WeeklyView";
import DashboardFilter from "../components/DashboardFilter";

export default function Dashboard({ habits }) {
  const [filter, setFilter] = useState("week");
  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };
  const getDaysByFilter = () => {
    if (filter === "today") {
      return [getToday()];
    }

    if (filter === "week") {
      return [...Array(7)]
        .map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - i);
          return d.toISOString().split("T")[0];
        })
        .reverse();
    }

    // all
    const allDates = habits.flatMap((h) => h.completedDates);
    return [...new Set(allDates)].sort();
  };

  const days = getDaysByFilter();
  return (
    <>
      {habits?.length === 0 && (
        <div className="alert alert-info">
          Start by adding some habits to see insights 📊
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Dashboard</h5>
        <DashboardFilter value={filter} onChange={setFilter} />
      </div>

      {/* STATS */}
      <DashboardCards habits={habits} />

      {/* CHART */}
      <WeeklyChart habits={habits} days={days} />

      {/* <ProgressBar habits={habits} />
      <Streak habits={habits} />
      <WeeklyView habits={habits} /> */}
    </>
  );
}
