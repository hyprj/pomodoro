import { useSettings } from "@context/settings/SettingsContext";
import { Dispatch, useReducer, useState } from "react";

interface SettingsForm {
  pomodoroLength: number | string;
  shortBreakLength: number | string;
  longBreakLength: number | string;
  autoStartBreak: boolean;
  autoStartPomodoros: boolean;
  longBreakInterval: number | string;
}

const SECS_IN_1MIN = 60;

type ActionType =
  | "SET_POMODORO_LENGTH"
  | "SET_SHORTBREAK_LENGTH"
  | "SET_LONGBREAK_LENGTH"
  | "SET_AUTO_START_BREAK"
  | "SET_AUTO_START_POMODOROS"
  | "SET_LONGBREAK_INTERVAL";

type Action = {
  type: ActionType;
  payload?: any;
};
export type DispatchSettingsForm = Dispatch<Action>;

export const reducer = (state: SettingsForm, action: Action) => {
  const length =
    Number(action.payload) === 0 ? "" : Number(action.payload) * SECS_IN_1MIN;
  switch (action.type) {
    case "SET_POMODORO_LENGTH": {
      return {
        ...state,
        pomodoroLength: length,
      };
    }
    case "SET_SHORTBREAK_LENGTH": {
      return {
        ...state,
        shortBreakLength: length,
      };
    }
    case "SET_LONGBREAK_LENGTH": {
      return {
        ...state,
        longBreakLength: length,
      };
    }
    case "SET_AUTO_START_BREAK": {
      return {
        ...state,
        autoStartBreak: action.payload,
      };
    }
    case "SET_AUTO_START_POMODOROS": {
      return {
        ...state,
        autoStartPomodoros: action.payload,
      };
    }
    case "SET_LONGBREAK_INTERVAL": {
      return {
        ...state,
        longBreakInterval: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const useSettingsForm = () => {
  const { settings, dispatch } = useSettings();
  const [isValid, setIsValid] = useState(true);
  const [changedSettings, dispatchChanged] = useReducer(reducer, settings);

  const save = () => {
    if (isValid) {
      dispatch({ type: "SAVE_CHANGES", payload: changedSettings });
      return true;
    }
    return false;
  };

  return {
    settings: changedSettings,
    dispatch: dispatchChanged,
    save,
    validation: { isValid, setIsValid },
  };
};
