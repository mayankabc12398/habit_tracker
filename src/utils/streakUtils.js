export const calculateStreak = (habits) => {
  if (habits.length === 0) return 0;

  const dates = habits.flatMap((h) => h.completedDates);
  const uniqueDates = [...new Set(dates)].sort().reverse();

  let streak = 0;
  let current = new Date();

  for (let date of uniqueDates) {
    const d = new Date(date);
    if (
      d.toDateString() === current.toDateString()
    ) {
      streak++;
      current.setDate(current.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};
