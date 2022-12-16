import { useSettings } from "@context/settings/SettingsContext";
import { useTimer } from "@context/timer/TimerContext";
import { appColors, Mode } from "@utils/constants";

const getColor = (isDarkMode: boolean, mode: Mode) => {
  if (isDarkMode) {
    return appColors.dark[mode];
  }
  return appColors.light[mode];
};

export const useTheme = () => {
  const { settings, dispatch } = useSettings();
  const { timer } = useTimer();
  const { isDarkMode } = settings;
  const color = getColor(isDarkMode, timer.mode);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return { color, isDarkMode, toggleDarkMode };
};
