import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Switch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }

  return (
    <div className="absolute bottom-5 right-5">
      <button
        onClick={() => toggleTheme()}
        className="border border-black dark:border-white p-2 rounded-full"
      >
        {theme === "dark" ? (
          <SunIcon className="size-6 text-white" />
        ) : (
          <MoonIcon className="size-6" />
        )}
      </button>
    </div>
  );
}
