import {
  IS_SSR,
  defaultSettings,
  defaultTasks,
  defaultTimer,
  StoredDataValues,
} from "./constants";

type StoredDataKey = "settings" | "timer" | "tasks";

const initializeData = (type: StoredDataKey) => {
  switch (type) {
    case "settings": {
      return defaultSettings;
    }
    case "timer": {
      return defaultTimer;
    }
    case "tasks": {
      return defaultTasks;
    }
    default: {
      return undefined;
    }
  }
};

export const getData = (type: StoredDataKey) => {
  if (IS_SSR) return initializeData(type);
  const stored = localStorage.getItem(type);
  if (stored) return JSON.parse(stored);
  return initializeData(type);
};

export const saveData = (type: StoredDataKey, data: StoredDataValues) => {
  localStorage.setItem(type, JSON.stringify(data));
};
