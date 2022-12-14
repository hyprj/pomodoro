import { AddTask } from "./components/AddTask";
import { SelectedTaskSummary } from "./components/SelectedTaskSummary";
import { ITask } from "./components/Task";
import { TaskList } from "./components/TaskList";
import { TasksHeader } from "./components/TasksHeader";
import { TasksSummary } from "./components/TasksSummary";
import { useTasks } from "./hooks/useTasks";

export interface Tasks {
  tasks: ITask[];
  nextUuid: number;
  selectedEditId: null | number;
  selectedId: null | number;
}

export const Tasks = () => {
  const { tasks, summary, dispatch } = useTasks();
  return (
    <div className="w-[min(100%,28rem)] my-12 text-white">
      <SelectedTaskSummary selectedId={tasks.selectedId} tasks={tasks.tasks} />
      <TasksHeader />
      <TaskList tasks={tasks} dispatch={dispatch} />
      <AddTask dispatch={dispatch} />
      <TasksSummary summary={summary} />
    </div>
  );
};
