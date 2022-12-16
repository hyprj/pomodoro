import { Timer } from "@utils/constants";
import { Dispatch } from "react";
import { getNextState } from "./utils";

type ActionType =
  | "SET_MODE"
  | "TOGGLE"
  | "DECREMENT"
  | "END"
  | "INIT_FROM_STORAGE"
  | "UPDATE_LENGHT"
  | "UPDATE_TIME_LEFT";

type Action = { type: ActionType; payload?: any };

export type TimerDispatch = Dispatch<Action>;

export const reducer = (state: Timer, action: Action): Timer => {
  switch (action.type) {
    case "INIT_FROM_STORAGE": {
      return action.payload;
    }
    case "SET_MODE": {
      return {
        ...state,
        timeLeft: action.payload.timeLeft,
        mode: action.payload.mode,
        isExecuting: false,
        isActive: false,
      };
    }

    case "TOGGLE": {
      return { ...state, isExecuting: !state.isExecuting };
    }
    case "DECREMENT": {
      if (state.isExecuting) {
        return { ...state, timeLeft: state.timeLeft - 1, isActive: true };
      }
      return { ...state };
    }
    case "END": {
      return getNextState(state, action.payload);
    }
    case "UPDATE_LENGHT": {
      return { ...state, timeLeft: action.payload.timeLeft };
    }
    case "UPDATE_TIME_LEFT": {
      if (state.isActive || action.payload.mode !== state.mode) return state;
      return { ...state, timeLeft: action.payload.timeLeft };
    }
    default:
      return state;
  }
};
