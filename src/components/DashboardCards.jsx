import { getToday } from "../utils/dateUtils";
import { calculateStreak } from "../utils/streakUtils";

export default function DashboardCards({ habits }) {
  const today = getToday();
  const total = habits.length;
  const completedToday = habits.filter((h) =>
    h.completedDates.includes(today),
  ).length;

  const percent = total === 0 ? 0 : Math.round((completedToday / total) * 100);

  const streak = calculateStreak(habits);

  return (
    <div className="row g-3 mb-4">
      <Card title="Total Habits" value={total} color="#0d6efd" />
      <Card title="Done Today" value={completedToday} color="#198754" />
      <Card title="Completion" value={`${percent}%`} color="#ffc107" />
      <Card title="Streak 🔥" value={`${streak} days`} color="#dc3545" />
    </div>
  );
}

function randomLightGradient() {
  const randomLightColor = () => {
    const r = Math.floor(180 + Math.random() * 75);
    const g = Math.floor(180 + Math.random() * 75);
    const b = Math.floor(180 + Math.random() * 75);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const color1 = randomLightColor();
  const color2 = randomLightColor();
  const angle = Math.floor(Math.random() * 360);

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}
function Card({ title, value, color }) {
  return (
    <div className="col-6 col-md-3">
      <div
        className="card border-0 shadow-sm h-100"
      
      >
        <div className="card-body"   style={{
          borderLeft: `4px solid ${color}`,
          background:randomLightGradient()
        }}>
          <small className="text-muted">{title}</small>
          <h4 className="mt-2 fw-bold">{value}</h4>
        </div>
      </div>
    </div>
  );
}
