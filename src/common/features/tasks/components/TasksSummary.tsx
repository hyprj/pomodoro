import { useSettings } from "@context/settings/SettingsContext";
import { useTimer } from "@context/timer/TimerContext";

import { ITask } from "@utils/constants";
import { getDoneTasks, getEstTasks, getFinishTime } from "./utils/tasksSummary";

interface Props {
  tasks: ITask[];
}

export const TasksSummary = ({ tasks }: Props) => {
  const { settings } = useSettings();
  const { timer } = useTimer();

  const estTasks = getEstTasks(tasks);
  const doneTasks = getDoneTasks(tasks);
  const finishTime = getFinishTime(tasks, timer, settings);

  return (
    <div className="w-full h-16 text-xl font-semibold  my-2 mt-6 px-4 bg-white/10 flex justify-center items-center border-t-2 border-white/60 gap-6">
      <div>
        <span className="text-base font-normal">Est: </span>
        <span>{estTasks}</span>
      </div>
      <div>
        <span className="text-base font-normal">Done: </span>
        <span>{doneTasks}</span>
      </div>
      <div>
        <span className="text-base font-normal">Finish at: </span>
        <span>{finishTime}</span>
      </div>
    </div>
  );
};
