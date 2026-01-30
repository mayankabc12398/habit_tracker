import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
  <div className=" border-bottom d-flex align-items-center">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-grow-1">
        <div className="p-3 border-bottom d-flex align-items-center">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
          <strong>Habit Tracker</strong>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
