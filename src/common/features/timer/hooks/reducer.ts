import { TimerMode } from "@customTypes/types";
import { Dispatch } from "react";

type ActionTypes =
  | "SET_MODE"
  | "TOGGLE"
  | "DECREMENT"
  | "END"
  | "SET_SAVED_TIMER";

type Action = { type: ActionTypes; payload?: any };

export type TimerDispatch = Dispatch<Action>;

type Timer = {
  timeLeft: number;
  donePomodoros: number;
  mode: TimerMode;
  isExecuting: boolean;
};

export const reducer = (state: Timer, action: Action): Timer => {
  const getModeAfterEnd = () => {
    if (state.mode !== "pomodoro") return "pomodoro";
    if (
      state.donePomodoros + (1 % action.payload.longBreakInterval) ===
      action.payload.longBreakInterval
    ) {
      return "longBreak";
    }
    return "shortBreak";
  };

  const shouldExecute = (mode: TimerMode) => {
    if (mode === "pomodoro") {
      return action.payload.autoStartPomodoros;
    } else {
      return action.payload.autoStartBreak;
    }
  };

  switch (action.type) {
    case "SET_SAVED_TIMER": {
      return {
        timeLeft: action.payload.timeLeft,
        mode: action.payload.mode,
        donePomodoros: action.payload.donePomodoros,
        isExecuting: false,
      };
    }
    case "SET_MODE": {
      return {
        ...state,
        timeLeft: action.payload.timeLeft,
        mode: action.payload.mode,
        isExecuting: false,
      };
    }

    case "TOGGLE": {
      return { ...state, isExecuting: !state.isExecuting };
    }
    case "DECREMENT": {
      if (state.isExecuting) {
        return { ...state, timeLeft: state.timeLeft - 1 };
      }
      return { ...state };
    }
    case "END": {
      const mode = getModeAfterEnd();
      const donePomodoros =
        state.mode === "pomodoro"
          ? state.donePomodoros + 1
          : state.donePomodoros;
      return {
        ...state,
        timeLeft: action.payload[`${mode}Length`],
        mode: mode,
        donePomodoros: donePomodoros,
        isExecuting: shouldExecute(mode),
      };
    }
    default:
      return state;
  }
};
