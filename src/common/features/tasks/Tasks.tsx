import { ITask } from "@utils/constants";
import { AddTask } from "./components/AddTask";
import { SelectedTaskSummary } from "./components/SelectedTaskSummary";
import { TaskList } from "./components/TaskList";
import { TasksHeader } from "./components/TasksHeader";
import { TasksSummary } from "./components/TasksSummary";
import { useTasks } from "./hooks/useTasks";

export const Tasks = () => {
  const { tasks, dispatch } = useTasks();

  return (
    <div className="w-[min(100%,28rem)] my-12 text-white">
      <SelectedTaskSummary
        title={
          tasks.tasks.find((task: ITask) => task.id === tasks.selectedId)?.title
        }
      />
      <TasksHeader />
      <TaskList tasks={tasks} dispatch={dispatch} />
      <AddTask dispatch={dispatch} />
      {/* <TasksSummary summary={tasks.summary} /> */}
    </div>
  );
};
