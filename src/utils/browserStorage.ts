const defaultStateSettings = {
  config: {
    pomodoroLength: 120,
    shortBreakLength: 100,
    longBreakLength: 300,
    autoStartBreak: false,
    autoStartPomodoros: false,
    longBreakInterval: 4,
    isDarkMode: false,
  },
};

const KEY = "store";
const isWindowUndefined = typeof window === "undefined" ? true : false;

export const loadOrInitializeState = () => {
  if (isWindowUndefined) return defaultStateSettings;
  const serializedState = localStorage.getItem(KEY);
  if (!serializedState) {
    saveState(defaultStateSettings);
    return defaultStateSettings;
  }
  return JSON.parse(serializedState);
};

export const saveState = (state: any) => {
  if (isWindowUndefined) return;
  const serializedState = JSON.stringify(state);
  localStorage.setItem(KEY, serializedState);
};
