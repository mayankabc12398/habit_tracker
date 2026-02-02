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
import { Chart } from "react-chartjs-2";

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

  const total = dailyData.reduce((a, b) => a + b, 0);
  const avg =
    dailyData.length === 0
      ? 0
      : +(total / dailyData.length).toFixed(1);

  const data = {
    labels: days,
    datasets: [
      {
        type: "bar",
        label: "Daily Completed",
        data: dailyData,
        backgroundColor: "#4F7CF7",
        borderRadius: 6,
        barThickness: 14
      },
      {
        type: "line",
        label: "Weekly Avg",
        data: days.map(() => avg),
        borderColor: "#22C55E",       // soft green
        backgroundColor: "transparent",
        borderWidth: 2,
        borderDash: [6, 4],           // 🔥 dotted line
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
        position: "top",
        labels: {
          boxWidth: 10,
          font: { size: 11 }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: { size: 10 }
        }
      }
    }
  };

  return (
    <div style={{ height: "160px" }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
