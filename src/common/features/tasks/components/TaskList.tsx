import { Dispatch } from "react";
import { Tasks } from "../Tasks";
import { EditTask } from "./EditTask";
import { ITask, Task } from "./Task";

interface Props {
  tasks: Tasks;
  dispatch: Dispatch<any>;
}

export const TaskList = ({ tasks, dispatch }: Props) => {
  return (
    <ul>
      {tasks.tasks.map((task) => {
        return (
          <li key={task.id}>
            {tasks.selectedEditId === task.id && (
              <EditTask task={task} dispatch={dispatch} />
            )}
            {tasks.selectedEditId !== task.id && (
              <Task
                task={task}
                dispatch={dispatch}
                isSelected={tasks.selectedId === task.id}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
