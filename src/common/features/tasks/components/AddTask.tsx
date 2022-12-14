import { Dispatch } from "react";

interface Props {
  dispatch: Dispatch<any>;
}

export const AddTask = ({ dispatch }: Props) => {
  return (
    <button
      className="w-full h-16 bg-red-800/30 border-dashed border-2 rounded border-white/30 text-white/70 font-bold hover:bg-red-800/40 hover:text-white/90"
      onClick={() => dispatch({ type: "ADD" })}
    >
      Add task
    </button>
  );
};
