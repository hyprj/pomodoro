import { TimerMode } from "@customTypes/types";
import { useStore } from "@hooks/useStore";
import { useCallback, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";

export interface Timer {
  timeLeft: number;
  mode: TimerMode;
  isExecuting: boolean;
  donePomodoros: number;
}

const playAudio = () => {
  const audio = document.querySelector("#tick") as HTMLAudioElement;
  audio.play();
};

export const useTimer = () => {
  const { state, dispatch } = useStore();
  const [timer, dispatchTimer] = useReducer(reducer, {
    timeLeft: state.timer.timeLeft,
    mode: state.timer.mode,
    donePomodoros: state.timer.donePomodoros,
    isExecuting: false,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [willDecrement, setWillDecrement] = useState(false);

  const toggle = () => {
    playAudio();
    dispatchTimer({ type: "TOGGLE" });
  };

  const decrement = () => {
    if (willDecrement) return;
    setWillDecrement(true);
    setTimeout(() => {
      setWillDecrement(false);
      dispatchTimer({ type: "DECREMENT" });
    }, 1000);
  };

  const endCountdown = useCallback(() => {
    dispatchTimer({ type: "END", payload: state.config });
  }, [state.config]);

  const handleChangeMode = (mode: TimerMode) => {
    dispatchTimer({
      type: "SET_MODE",
      payload: { mode, timeLeft: state.config[`${mode}Length`] },
    });
  };

  //used to prevent SSR hydration common problem
  useEffect(() => {
    dispatchTimer({ type: "SET_SAVED_TIMER", payload: state.timer });
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!timer.isExecuting) return;
    if (timer.timeLeft > 0) {
      decrement();
    } else {
      endCountdown();
    }
  }, [timer.isExecuting, timer.timeLeft]);

  useEffect(() => {
    dispatch({ type: "TIMER_UPDATE", payload: timer });
  }, [timer, dispatch]);

  return { timer, toggle, handleChangeMode, isLoaded };
};
