import { Settings } from "@utils/constants";

const SECONDS_IN_MINUTE = 60;

type ActionType =
  | "HANDLE_LENGTH_POMODORO"
  | "HANDLE_LENGTH_SHORT_BREAK"
  | "HANDLE_LENGTH_LONG_BREAK"
  | "AUTO_START_BREAK"
  | "AUTO_START_POMODOROS"
  | "INIT_FROM_STORAGE"
  | "TOGGLE_DARK_MODE";

type Action = { type: ActionType; payload?: any };

export const reducer = (state: Settings, action: Action) => {
  switch (action.type) {
    case "INIT_FROM_STORAGE": {
      return action.payload;
    }
    case "HANDLE_LENGTH_POMODORO": {
      return {
        ...state,
        pomodoroLength: Number(action.payload * SECONDS_IN_MINUTE),
      };
    }
    case "HANDLE_LENGTH_SHORT_BREAK": {
      return {
        ...state,
        shortBreakLength: Number(action.payload * SECONDS_IN_MINUTE),
      };
    }
    case "HANDLE_LENGTH_LONG_BREAK": {
      return {
        ...state,
        longBreakLength: Number(action.payload * SECONDS_IN_MINUTE),
      };
    }
    case "AUTO_START_BREAK": {
      return {
        ...state,
        autoStartBreak: action.payload,
      };
    }
    case "AUTO_START_POMODOROS": {
      return {
        ...state,
        autoStartPomodoros: action.payload,
      };
    }
    case "TOGGLE_DARK_MODE": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
    default: {
      return state;
    }
  }
};
