import { useState, useEffect } from "react";

export default function ReminderSetting() {
  const [time, setTime] = useState(
    localStorage.getItem("reminderTime") || ""
  );

  useEffect(() => {
    localStorage.setItem("reminderTime", time);
  }, [time]);

  return (
    <div>
      <label className="form-label small">
        Daily Reminder Time
      </label>

      <input
        type="time"
        className="form-control w-50"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <small className="text-muted d-block mt-1">
        (Notification feature can use this later)
      </small>
    </div>
  );
}
