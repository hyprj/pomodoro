import { Bars3Icon } from "@heroicons/react/24/solid";
import { ITask } from "@utils/constants";
import { Dispatch } from "react";
import { TaskWrapper } from "./TaskWrapper";

interface Props {
  task: ITask;
  dispatch: Dispatch<any>;
  isSelected: boolean;
}

export const Task = ({ task, dispatch, isSelected }: Props) => {
  return (
    <TaskWrapper
      isSelected={isSelected}
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
    </TaskWrapper>
  );
};