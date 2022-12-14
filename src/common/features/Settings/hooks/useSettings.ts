import { useStore } from "@hooks/useStore";
import { useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

const isBetween = (value: number, min: number, max: number) => {
  if (value > min && value < max) return true;
  return false;
};

const checkNumberInputsValidity = ({
  pomodoroLength,
  shortBreakLength,
  longBreakLength,
}: {
  pomodoroLength: number;
  shortBreakLength: number;
  longBreakLength: number;
}) => {
  const values = [pomodoroLength, shortBreakLength, longBreakLength];
  return values.every((el) => isBetween(el, 0, 100 * 60));
};

export const useSettings = () => {
  const { state, dispatch } = useStore();
  const [settings, dispatchSettings] = useReducer(reducer, state.config);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setIsValid(checkNumberInputsValidity(settings));
    }, 200);
    dispatch({ type: "SET_CONFIG", payload: settings });
    return () => clearTimeout(debounce);
  }, [settings]);

  const onSubmit = () => {};

  return { settings, dispatch: dispatchSettings, isValid, onSubmit };
};
