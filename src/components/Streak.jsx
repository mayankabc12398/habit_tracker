import { calculateStreak } from "../utils/streakUtils";

export default function Streak({ habits }) {
  const streak = calculateStreak(habits);

  return (
    <div className="alert alert-warning text-center mt-3 mb-0">
      🔥 Current Streak: <strong>{streak} days</strong>
    </div>
  );
}
