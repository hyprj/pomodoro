import { createContext } from "react";

interface StoreContext {
  dispatch: React.Dispatch<any>;
  state: {
    config: {
      pomodoroLength: number;
      shortBreakLength: number;
      longBreakLength: number;
      autoStartBreak: boolean;
      autoStartPomodoros: boolean;
      longBreakInterval: number;
      isDarkMode: boolean;
    };
  };
}

export const StoreContext = createContext<StoreContext | undefined>(undefined);
