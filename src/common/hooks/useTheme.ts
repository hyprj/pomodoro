import { useSettings } from "@context/settings/SettingsContext";
import { useTimer } from "@context/timer/TimerContext";
import { useEffect } from "react";

export const useTheme = () => {
  const { settings, dispatch } = useSettings();
  const { timer } = useTimer();
  const { isDarkMode } = settings;
  const primaryColor = timer.mode;

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  useEffect(() => {
    if (isDarkMode) {
      window.document.documentElement.classList.add("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { primaryColor, isDarkMode, toggleDarkMode };
};
