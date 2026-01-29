import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("dark", dark);

    if (dark) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light");
    } else {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [dark]);

  return [dark, setDark];
}
