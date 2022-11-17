import { useStore } from "@hooks/useStore";
import { ModeButton } from "./ModeButton";

export const Modes = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="flex px-2 gap-6 max-[350px]:flex-col max-[350px]:gap-2">
      <ModeButton isSelected={true}>Pomodoro</ModeButton>
      <ModeButton>Pomodoro</ModeButton>
      <ModeButton>Pomodoro</ModeButton>
    </div>
  );
};
