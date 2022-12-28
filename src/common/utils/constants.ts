export const IS_SSR = typeof window === "undefined" ? true : false;

export type Mode = "pomodoro" | "shortBreak" | "longBreak";

export interface Settings {
  pomodoroLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  autoStartBreak: boolean;
  autoStartPomodoros: boolean;
  longBreakInterval: number;
  isDarkMode: boolean;
  isValid: boolean;
}

export const defaultSettings: Settings = {
  pomodoroLength: 3,
  shortBreakLength: 3,
  longBreakLength: 3,
  autoStartBreak: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
  isDarkMode: false,
  isValid: true,
};

export interface Timer {
  timeLeft: number;
  mode: Mode;
  donePomodoros: number;
  isExecuting: boolean;
  isActive: boolean;
}

export const defaultTimer: Timer = {
  timeLeft: 3,
  mode: "pomodoro",
  donePomodoros: 0,
  isExecuting: false,
  isActive: false,
};

export interface ITask {
  donePomodoros: number;
  estPomodoros: number;
  id: number;
  title: string;
}

export interface Tasks {
  tasks: ITask[];
  selectedId: number | null;
  selectedEditId: number | null;
  nextUuid: number;
  summary: {
    estimated: number;
    done: number;
    finishAt: Date;
  };
}

export const defaultTasks: Tasks = {
  tasks: [],
  selectedId: null,
  selectedEditId: null,
  nextUuid: 0,
  summary: {
    estimated: 0,
    done: 0,
    finishAt: new Date(0),
  },
};

export type StoredDataValues =
  | typeof defaultSettings
  | typeof defaultTimer
  | typeof defaultTasks;

export const appColors = {
  light: {
    pomodoro: "#991b1bcc",
    shortBreak: "#437F97",
    longBreak: "#383B53",
  },
  dark: {
    pomodoro: "#6d3b47",
    shortBreak: "#282f44",
    longBreak: "#191d32",
  },
};
