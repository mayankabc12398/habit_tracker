import DarkToggle from "../components/DarkToggle";

export default function Settings({ dark, setDark }) {
  return (
    <>
      <h6 className="mb-3">Settings</h6>
      <DarkToggle dark={dark} setDark={setDark} />
    </>
  );
}
