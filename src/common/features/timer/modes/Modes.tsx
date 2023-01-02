import { Mode } from "@utils/constants";
import { ModeButton } from "./ModeButton";

interface Modes {
  selected: Mode;
  changeMode: (mode: Mode) => void;
  isExecuting: boolean;
}

export const Modes = ({ selected, changeMode, isExecuting }: Modes) => {
  const handleClick = (mode: Mode) => {
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
        ariaLabel="Change to pomodoro"
      >
        Pomodoro
      </ModeButton>
      <ModeButton
        onClick={() => handleClick("shortBreak")}
        isSelected={selected === "shortBreak"}
        ariaLabel="Change to short break"
      >
        Short break
      </ModeButton>
      <ModeButton
        onClick={() => handleClick("longBreak")}
        isSelected={selected === "longBreak"}
        ariaLabel="Change to long break"
      >
        Long break
      </ModeButton>
    </div>
  );
};
