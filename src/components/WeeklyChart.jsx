import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function WeeklyChart({ habits, days }) {
  const today = new Date().toISOString().split("T")[0];
  const yesterdayDate = new Date();
  yesterdayDate.setDate(new Date().getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split("T")[0];

  const countCompleted = (day) =>
    habits.filter(h => h.completedDates.includes(day)).length;

  const data = {
    labels: days,
    datasets: [
      {
        label: "Today",
        data: days.map(day =>
          day === today ? countCompleted(day) : 0
        ),
        backgroundColor: "#4F7CF7",
        borderRadius: 6,
        barThickness: 14
      },
      {
        label: "Yesterday",
        data: days.map(day =>
          day === yesterday ? countCompleted(day) : 0
        ),
        backgroundColor: "#A5B4FC",
        borderRadius: 6,
        barThickness: 14
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
          boxHeight: 10,
          font: {
            size: 11
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10 }
        }
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
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h6 className="mb-2">Today vs Yesterday</h6>

        <div style={{ height: "150px" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
