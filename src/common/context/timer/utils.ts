import { Mode, Settings, Timer } from "@utils/constants";

const shouldBeLongBreak = (
  donePomodoros: number,
  longBreakInterval: number
) => {
  if (donePomodoros === 0) return false;
  if ((donePomodoros + 1) % longBreakInterval === 0) return true;
  return false;
};

export const getNextMode = (
  mode: Mode,
  donePomodoros: number,
  longBreakInterval: number
): Mode => {
  if (mode !== "pomodoro") return "pomodoro";
  if (shouldBeLongBreak(donePomodoros, longBreakInterval)) return "longBreak";
  return "shortBreak";
};

const countDonePomodoros = (mode: Mode, donePomodoros: number) => {
  if (mode === "pomodoro") return ++donePomodoros;
  return donePomodoros;
};

const shouldContinue = (mode: Mode, settings: Settings) => {
  if (mode === "pomodoro") return settings.autoStartBreak;
  return settings.autoStartPomodoros;
};

export const getNextState = (current: Timer, settings: Settings): Timer => {
  const mode = getNextMode(
    current.mode,
    current.donePomodoros,
    settings.longBreakInterval
  );
  const donePomodoros = countDonePomodoros(current.mode, current.donePomodoros);
  const isExecuting = shouldContinue(current.mode, settings);
  return {
    timeLeft: settings[`${mode}Length`],
    mode,
    donePomodoros,
    isExecuting,
    isActive: false,
  };
};
