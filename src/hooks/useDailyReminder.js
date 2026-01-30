import { useEffect } from "react";
import { showNotification } from "../utils/notificationUtils";

export default function useDailyReminder(time) {
  useEffect(() => {
    if (!time) return;

    const checkInterval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);

      if (currentTime === time) {
        showNotification(
          "Habit Tracker 🔔",
          "Time to complete your habits 💪"
        );
      }
    }, 60000); // check every minute

    return () => clearInterval(checkInterval);
  }, [time]);
}
