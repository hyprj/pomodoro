import { useTimer } from "@context/timer/TimerContext";
import { ActionButton } from "./ActionButton/ActionButton";
import { Clock } from "./clock/Clock";
import { Modes } from "./modes/Modes";

export const Timer = () => {
  const { timer, toggle, changeMode } = useTimer();
  const { mode, isExecuting, timeLeft } = timer;

  return (
    <div className="bg-white/10 py-6 max-w-md mt-12 w-full rounded-md flex flex-col items-center text-gray-100 animate-onLoad">
      <>
        <Modes
          selected={mode}
          changeMode={changeMode}
          isExecuting={isExecuting}
        />
        <Clock timeLeft={timeLeft} />
        <ActionButton isExecuting={isExecuting} toggle={toggle} />
        <audio id="tick" src="tick.wav" />
      </>
    </div>
  );
};
