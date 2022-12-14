import { Timer } from "@hooks/useTimer/useTimer";

export interface LocalStorageContext {
  config: {
    pomodoroLength: number;
    shortBreakLength: number;
    longBreakLength: number;
    autoStartBreak: boolean;
    autoStartPomodoros: boolean;
    longBreakInterval: number;
    isDarkMode: boolean;
    colors: {
      lightMode: {
        pomodoro: string;
        shortBreak: string;
        longBreak: string;
      };
      darkMode: {
        pomodoro: string;
        shortBreak: string;
        longBreak: string;
      };
    };
  };
  timer: Timer;
  tasks: {
    selected: boolean;
    donePomodoros: number;
    estPomodoros: number;
    title: string;
  }[];
}
