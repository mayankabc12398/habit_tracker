import DarkToggle from "../components/DarkToggle";
import ReminderSetting from "../components/ReminderSetting";
import DataSettings from "../components/DataSettings";
import PreferenceSettings from "../components/PreferenceSettings";

export default function Settings({
  dark,
  setDark,
  habits,
  setHabits,
  preferences,
  setPreferences
}) {
  return (
    <div style={{ maxWidth: "600px" }}>
      <h5 className="mb-4">Settings</h5>

      {/* Appearance */}
      <Section title="Appearance">
        <DarkToggle dark={dark} setDark={setDark} />
      </Section>

      {/* Reminder */}
      <Section title="Reminder">
        <ReminderSetting />
      </Section>

      {/* Preferences */}
      <Section title="Preferences">
        <PreferenceSettings
          preferences={preferences}
          setPreferences={setPreferences}
        />
      </Section>

      {/* Data */}
      <Section title="Data">
        <DataSettings habits={habits} setHabits={setHabits} />
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-body">
        <h6 className="mb-3">{title}</h6>
        {children}
      </div>
    </div>
  );
}
