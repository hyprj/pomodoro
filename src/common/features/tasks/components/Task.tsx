import { Bars3Icon } from "@heroicons/react/24/solid";
import { useTheme } from "@hooks/useTheme";
import { ITask } from "@utils/constants";
import { Dispatch } from "react";

interface Props {
  task: ITask;
  dispatch: Dispatch<any>;
  isSelected: boolean;
}

export const Task = ({ task, dispatch, isSelected }: Props) => {
  const { primaryColor } = useTheme();
  const selectedBgColor = isSelected ? primaryColor : "";
  return (
    <div
      className={`flex justify-around items-center text-gray-700 font-bold w-full h-16 bg-gray-100 my-2 px-4 rounded border-transparent hover:border-gray-300 border-l-8 cursor-pointer ${
        isSelected ? "bg-gray-400" : ""
      }`}
      onClick={() => dispatch({ type: "HANDLE_TASK_CLICK", payload: task })}
    >
      <h5 className="grow">{task.title}</h5>
      <p className="mx-6 text-gray-400">
        {task.donePomodoros}/{task.estPomodoros}
      </p>
      <Bars3Icon
        className="w-8 h-8 hover:cursor-pointer hover:bg-gray-200 rounded p-1"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "SET_TASK_TO_EDIT", payload: task });
        }}
      />
    </div>
  );
};
