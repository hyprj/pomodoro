import { useDarkMode } from "@hooks/useDarkMode";
import { useStore } from "@hooks/useStore";
import { TimerDispatch } from "@hooks/useTimer/reducer";

interface ActionButton {
  isExecuting: boolean;
  // dispatch: TimerDispatch;
  toggle: () => void;
}

export const ActionButton = ({ isExecuting, toggle }: ActionButton) => {
  const { state } = useStore();
  const { isDarkMode } = useDarkMode();
  const textColor = isDarkMode
    ? state.config.colors.darkMode[state.timer.mode]
    : state.config.colors.lightMode[state.timer.mode];

  const text = isExecuting ? "STOP" : "START";
  const stateEffect = isExecuting
    ? "relative top-[5px]"
    : "shadow-[0_5px_0px_0px_rgb(220,220,220)] dark:shadow-[0_5px_0px_0px_rgb(150,150,150)]";
  return (
    <button
      onClick={() => {
        // dispatch({ type: "TOGGLE" });
        toggle();
      }}
      className={`bg-gray-100 dark:bg-slate-300 px-14 py-3 w-52  rounded font-bold text-2xl ${stateEffect}`}
      style={{ color: textColor }}
    >
      {text}
    </button>
  );
};
