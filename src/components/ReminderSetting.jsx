import { useState } from "react";
import { requestNotificationPermission } from "../utils/notificationUtils";

export default function ReminderSetting({ onSave }) {
  const [time, setTime] = useState(
    localStorage.getItem("reminderTime") || ""
  );

  const enableReminder = async () => {
    const granted = await requestNotificationPermission();
    if (!granted) return alert("Permission denied");

    localStorage.setItem("reminderTime", time);
    onSave(time);
    alert("Daily reminder enabled 🔔");
  };

  return (
    <div className="mt-3">
      <label className="form-label small">Daily Reminder Time</label>

      <div className="d-flex gap-2">
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          onClick={enableReminder}
          disabled={!time}
        >
          Enable
        </button>
      </div>
    </div>
  );
}
