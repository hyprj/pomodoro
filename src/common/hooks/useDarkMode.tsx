import { useEffect, useState } from "react";
import { useStore } from "./useStore";

export const useDarkMode = () => {
  const { state, dispatch } = useStore();
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    state.config.isDarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setIsDarkMode(state.config.isDarkMode);
  }, [state]);

  const colors = isDarkMode
    ? state.config.colors.darkMode
    : state.config.colors.lightMode;

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE", payload: !state.config.isDarkMode });
  };

  return { isDarkMode, toggleDarkMode, colors };
};
