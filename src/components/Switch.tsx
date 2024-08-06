import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Switch() {
  const [theme, setTheme] = useState("light");

  const darkModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="absolute bottom-5 right-5">
      <button
        onClick={() => darkModeHandler()}
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
