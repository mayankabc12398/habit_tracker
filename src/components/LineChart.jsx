import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart({ habits, days }) {
  const countCompleted = (day) =>
    habits.filter(h =>
      h.completedDates.includes(day)
    ).length;

  const data = {
    labels: days,
    datasets: [
      {
        label: "Daily Progress",
        data: days.map(day => countCompleted(day)),
        borderColor: "#4F7CF7",
        backgroundColor: "rgba(79,124,247,0.2)",
        tension: 0.4, // smooth curve
        pointRadius: 3,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  };

  return (
   <div style={{ height: "150px" }}>
  <Line data={data} options={options} />
</div>
  );
}
