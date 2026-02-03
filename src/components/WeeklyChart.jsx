import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function WeeklyChart({ habits, days }) {
  const countCompleted = (day) =>
    habits.filter(h => h.completedDates.includes(day)).length;

  const dailyData = days.map(day => countCompleted(day));

  const avg =
    dailyData.length === 0
      ? 0
      : (
          dailyData.reduce((a, b) => a + b, 0) /
          dailyData.length
        ).toFixed(1);

  const data = {
    labels: days,
    datasets: [
      {
        label: "Daily",
        data: dailyData,
        backgroundColor: "#4F7CF7",
        borderRadius: 6,
        barThickness: 14
      },
      {
        label: "Weekly Avg",
        type: "line",
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
      <Bar data={data} options={options} />
    </div>
  );
}
