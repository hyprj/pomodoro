import { useStore } from "@hooks/useStore";
import { useEffect, useState } from "react";
import { Timer } from "@features/timer/Timer";
import { Header } from "../../layouts/Header";
import { Tasks } from "@features/tasks/Tasks";

export const PomodoroWrapper = () => {
  const { state } = useStore();
  const [bgColor, setBgColor] = useState<any>();

  useEffect(() => {
    setBgColor(
      state.config.isDarkMode
        ? state.config.colors.darkMode[state.timer.mode]
        : state.config.colors.lightMode[state.timer.mode]
    );
  }, [state]);

  return (
    <div
      className={`flex flex-col p-2 justify-start items-center min-h-screen transition-colors duration-1000 ease-out`}
      style={{ backgroundColor: bgColor }}
    >
      <Header />
      <Timer />
      <Tasks />
    </div>
  );
};
