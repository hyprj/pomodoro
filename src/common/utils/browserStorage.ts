// import { defaultStateSettings } from "src/common/context/StoreProvider";
import { isWindowUndefined, KEY } from "src/data/constants";
import { defaultState } from "src/data/default-config";

export const loadOrInitializeState = () => {
  if (isWindowUndefined) return defaultState;

  const serializedState = localStorage.getItem(KEY);
  if (!serializedState) {
    saveState(defaultState);
    return defaultState;
  }
  return JSON.parse(serializedState);
};

export const saveState = (state: any) => {
  if (isWindowUndefined) return;
  const serializedState = JSON.stringify(state);
  localStorage.setItem(KEY, serializedState);
};

export const updateStateField = (value: any, field: "config" | "session") => {
  const current = loadOrInitializeState();
  const newState = { ...current, [field]: { ...value } };
  saveState(newState);
};
