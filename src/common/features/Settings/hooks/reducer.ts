const SECONDS_IN_MINUTE = 60;

export const reducer = (state, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};
