import { DispatchTasks } from "@context/tasks/reducer";

interface Props {
  dispatch: DispatchTasks;
}

export const AddTask = ({ dispatch }: Props) => {
  return (
    <button
      className={`w-full h-16 mt-1 border-dashed border-2 rounded border-white/30 text-white/70 font-bold bg-black/10 hover:bg-black/20 hover:text-white/90`}
      onClick={() => dispatch({ type: "ADD" })}
      aria-label="Add task"
    >
      Add task
    </button>
  );
};
