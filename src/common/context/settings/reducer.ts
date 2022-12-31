import { Settings } from "@utils/constants";
import { Dispatch } from "react";

type ActionType =
  | "HANDLE_LENGTH_POMODORO"
  | "HANDLE_LENGTH_SHORT_BREAK"
  | "HANDLE_LENGTH_LONG_BREAK"
  | "AUTO_START_BREAK"
  | "AUTO_START_POMODOROS"
  | "INIT_FROM_STORAGE"
  | "TOGGLE_DARK_MODE"
  | "SAVE_CHANGES";

type Action = { type: ActionType; payload?: any };

export type DispatchSettings = Dispatch<Settings | unknown>;

export const reducer = (state: Settings, action: Action) => {
  switch (action.type) {
    case "INIT_FROM_STORAGE": {
      return action.payload;
    }
    case "TOGGLE_DARK_MODE": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
    case "SAVE_CHANGES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
