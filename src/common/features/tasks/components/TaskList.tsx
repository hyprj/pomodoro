import { DispatchTasks } from "@context/tasks/reducer";
import { Tasks } from "@utils/constants";
import { EditTask } from "./EditTask";
import { Task } from "./Task";

interface Props {
  tasks: Tasks;
  dispatch: DispatchTasks;
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
