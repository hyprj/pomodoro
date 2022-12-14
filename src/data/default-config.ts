import { Tasks } from "@features/tasks/Tasks";

const defaultConfig = {
  pomodoroLength: 6,
  shortBreakLength: 300,
  longBreakLength: 900,
  autoStartBreak: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
  isDarkMode: false,
  colors: {
    lightMode: {
      pomodoro: "#991b1bcc",
      shortBreak: "#437F97",
      longBreak: "#383B53",
    },
    darkMode: {
      pomodoro: "#6d3b47",
      shortBreak: "#282f44",
      longBreak: "#191d32",
    },
  },
};

export const defaultTimer = {
  timeLeft: defaultConfig.pomodoroLength,
  mode: "pomodoro",
  donePomodoros: 0,
};

export const defaultTasks: Tasks = {
  tasks: [],
  selectedId: 0,
  selectedEditId: null,
  nextUuid: 0,
};

export const defaultState = {
  config: defaultConfig,
  timer: defaultTimer,
  tasks: {
    tasks: [
      {
        donePomodoros: 0,
        estPomodoros: 5,
        title: "test",
        id: 0,
      },
      {
        donePomodoros: 0,
        estPomodoros: 5,
        title: "test",
        id: 1,
      },
      {
        donePomodoros: 0,
        estPomodoros: 5,
        title: "test",
        id: 2,
      },
    ],
    selectedId: 0,
    selectedEditId: null,
    nextUuid: 3,
  },
};
