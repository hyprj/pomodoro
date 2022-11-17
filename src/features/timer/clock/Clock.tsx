import { useStore } from "@hooks/useStore";

export const Clock = () => {
  const { dispatch, state } = useStore();
  const timeLeft = state.config.pomodoroLength;
  return <div className=" text-[7.6rem] font-bold">{timeLeft}</div>;
};
