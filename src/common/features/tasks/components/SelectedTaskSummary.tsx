import { ITask } from "./Task";

interface Props {
  tasks: ITask[];
  selectedId: number | null;
}

export const SelectedTaskSummary = ({ tasks, selectedId }: Props) => {
  if (typeof selectedId === "object") {
    return null;
  }

  console.log(selectedId);
  const task = tasks.find((el) => el.id === selectedId) as ITask;
  return (
    <div className="text-sm font-semibold mx-auto text-center mb-4">
      <div className="text-xs">WORKING ON</div>
      {/* <div className="text-neutral-300">{task.title}</div> */}
    </div>
  );
};
