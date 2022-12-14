import { LocalStorageContext } from "@customTypes/interfaces";
import { config } from "process";

export const storeReducer = (state: LocalStorageContext, action) => {
  switch (action.type) {
    case "test": {
      return state;
    }
    case "TIMER_UPDATE": {
      return { ...state, timer: action.payload };
    }
    case "TOGGLE_DARK_MODE": {
      const newState = { ...state };
      newState.config.isDarkMode = action.payload;
      return { ...newState };
    }
    case "UPDATE_TASKS": {
      return { ...state, tasks: action.payload };
    }
    case "SET_CONFIG": {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
