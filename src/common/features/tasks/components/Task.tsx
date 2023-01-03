import { Bars3Icon } from "@heroicons/react/24/solid";
import { ITask } from "@utils/constants";
import { Dispatch } from "react";

interface Props {
  task: ITask;
  dispatch: Dispatch<any>;
  isSelected: boolean;
}

export const Task = ({ task, dispatch, isSelected }: Props) => {
  return (
    <div
      className={`flex justify-around items-center text-gray-700 font-bold w-full h-16  my-2 px-4 rounded border-transparent hover:border-black/30 hover:dark:border-stone-500 border-l-8 cursor-pointer  transition-colors duration-500 ease-out ${
        isSelected
          ? "bg-[#e9d8a6] dark:bg-white/80 dark:text-gray-700"
          : "bg-gray-100 dark:bg-white/10 dark:text-gray-200"
      }`}
      onClick={() => dispatch({ type: "HANDLE_TASK_CLICK", payload: task })}
    >
      <h3 className="grow">{task.title}</h3>
      <p className="mx-6">
        {task.donePomodoros}/{task.estPomodoros}
      </p>
      <button
        aria-label="task settings"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "SET_TASK_TO_EDIT", payload: task });
        }}
      >
        <Bars3Icon className="w-8 h-8 hover:cursor-pointer hover:bg-gray-200 hover:dark:bg-stone-500/40 rounded p-1" />
      </button>
    </div>
  );
};
