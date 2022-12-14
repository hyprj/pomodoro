import { useTasks } from "@context/tasks/TasksContext";
import { playAudio } from "@utils/audio";
import { defaultTimer, Mode, Timer } from "@utils/constants";
import { getData, saveData } from "@utils/localStorage";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSettings } from "../settings/SettingsContext";
import { reducer, TimerDispatch } from "./reducer";

interface Props {
  children: React.ReactNode;
}

interface ITimerContext {
  timer: Timer;
  toggle: () => void;
  changeMode: (mode: Mode) => void;
  dispatch: TimerDispatch;
}

const TimerContext = createContext<undefined | ITimerContext>(undefined);

export const TimerProvider = ({ children }: Props) => {
  const { settings } = useSettings();
  const { tryAddDonePomodoro } = useTasks();
  const [timer, dispatch] = useReducer(reducer, defaultTimer);
  const [isInitialized, setIsInitialized] = useState(false);

  //load data from storage on hydration
  useEffect(() => {
    dispatch({ type: "INIT_FROM_STORAGE", payload: getData("timer") });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    saveData("timer", timer);
  }, [timer, isInitialized]);

  useEffect(() => {
    if (!timer.isExecuting) return;
    if (timer.timeLeft === 0) {
      if (timer.mode === "pomodoro") tryAddDonePomodoro();
      playAudio("tick");
      dispatch({
        type: "END",
        payload: settings,
      });
    }
    const decrement = setInterval(() => dispatch({ type: "DECREMENT" }), 1000);
    return () => clearInterval(decrement);
  }, [timer.isExecuting, timer.timeLeft]);

  useEffect(() => {
    if (!timer.isActive) {
      dispatch({
        type: "UPDATE_TIME_LEFT",
        payload: settings[`${timer.mode}Length`],
      });
    }
  }, [settings, timer.isActive, timer.mode]);

  const toggle = () => {
    playAudio("tick");
    dispatch({ type: "TOGGLE" });
  };

  const changeMode = (mode: Mode) => {
    dispatch({
      type: "SET_MODE",
      payload: { mode, timeLeft: settings[`${mode}Length`] },
    });
  };

  return (
    <TimerContext.Provider value={{ timer, toggle, changeMode, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
