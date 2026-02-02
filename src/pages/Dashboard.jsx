import { useState } from "react";
import DashboardCards from "../components/DashboardCards";
import ProgressBar from "../components/ProgressBar";
import Streak from "../components/Streak";
import WeeklyChart from "../components/WeeklyChart";
import WeeklyView from "../components/WeeklyView";
import LineChart from "../components/LineChart";
import DashboardFilter from "../components/DashboardFilter";
import Heatmap from "../components/Heatmap";

export default function Dashboard({ habits }) {
  const [filter, setFilter] = useState("week");
  const [chartType, setChartType] = useState("bar");

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
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Progress</h6>

            <select
              className="form-select form-select-sm w-auto"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="bar">Daily Bar</option>
              <option value="line">Line Chart</option>
              <option value="heatmap">Heatmap</option>
            </select>
          </div>

          {chartType === "bar" && <WeeklyChart habits={habits} days={days} />}

          {chartType === "line" && <LineChart habits={habits} days={days} />}

          {chartType === "heatmap" && <Heatmap habits={habits} days={days} />}
        </div>
      </div>

      {/* <ProgressBar habits={habits} />
      <Streak habits={habits} />
      <WeeklyView habits={habits} /> */}
    </>
  );
}
