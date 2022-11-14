import { Modes, Clock, ActionBtn } from "./index";

export const Timer = () => {
  return (
    <div className="w-96 bg-red-500">
      <Modes />
      <Clock />
      <ActionBtn />
    </div>
  );
};
