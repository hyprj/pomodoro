import { Modes, Clock, ActionButton } from "./index";

export const Timer = () => {
  return (
    <div className="bg-white/10 py-6 max-w-md w-full rounded-md flex flex-col items-center text-gray-100">
      <Modes />
      <Clock />
      <ActionButton />
    </div>
  );
};
