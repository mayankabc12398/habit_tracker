import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { useEffect, useState } from "react";

let ChartComponent = null;
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function WeeklyChart({ habits, days }) {
  const [ready, setReady] = useState(false);
  const countCompleted = (day) =>
    habits.filter(h => h.completedDates.includes(day)).length;

  
  useEffect(() => {
    import("react-chartjs-2").then((mod) => {
      ChartComponent = mod.Chart;
      setReady(true);
    });
  }, []);
    if (!ready) return null;
  const dailyData = days.map(day => countCompleted(day));

  const total = dailyData.reduce((a, b) => a + b, 0);
  const avg =
    dailyData.length === 0 ? 0 : +(total / dailyData.length).toFixed(1);

  const data = {
    labels: days,
    datasets: [
      {
        type: "bar",
        label: "Daily",
        data: dailyData,
        backgroundColor: "#4F7CF7",
        borderRadius: 6,
        barThickness: 14
      },
      {
        type: "line",
        label: "Weekly Avg",
        data: days.map(() => avg),
        borderColor: "#22C55E",
        borderDash: [6, 4],
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { font: { size: 11 } }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  return (
    <div style={{ height: "160px" }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
