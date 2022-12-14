import { TimerMode } from "@customTypes/types";
import { ModeButton } from "./ModeButton";

interface Modes {
  selected: TimerMode;
  changeMode: (mode: TimerMode) => void;
  isExecuting: boolean;
}

export const Modes = ({ selected, changeMode, isExecuting }: Modes) => {
  const handleClick = (mode: TimerMode) => {
    if (isExecuting && selected !== mode) {
      const shouldChange = confirm(
        "The timer is still running, are you sure you want to switch?"
      );
      if (!shouldChange) {
        return;
      }
    }
    changeMode(mode);
  };

  return (
    <div className="flex px-2 gap-6 max-[350px]:flex-col max-[350px]:gap-2">
      <ModeButton
        onClick={() => handleClick("pomodoro")}
        isSelected={selected === "pomodoro"}
      >
        Pomodoro
      </ModeButton>
      <ModeButton
        onClick={() => handleClick("shortBreak")}
        isSelected={selected === "shortBreak"}
      >
        Short break
      </ModeButton>
      <ModeButton
        onClick={() => handleClick("longBreak")}
        isSelected={selected === "longBreak"}
      >
        Long break
      </ModeButton>
    </div>
  );
};
