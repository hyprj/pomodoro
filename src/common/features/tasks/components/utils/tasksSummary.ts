import { ITask, Mode } from "@utils/constants";
import { Timer } from "@utils/constants";
import { Settings } from "@utils/constants";
import { Time } from "@utils/formatting";
import { getNextMode } from "@context/timer/utils";

export function getEstTasks(tasks: ITask[]) {
  return tasks.reduce((acc, curr) => (acc += curr.estPomodoros), 0);
}
export function getDoneTasks(tasks: ITask[]) {
  return tasks.reduce((acc, curr) => (acc += curr.donePomodoros), 0);
}

function getToDoPomodoroCount(tasks: ITask[]) {
  return tasks.reduce(
    (acc, task) => (acc += task.estPomodoros - task.donePomodoros),
    0
  );
}

function countSteps(
  currentMode: Mode,
  donePomodoros: number,
  longBreakInterval: number,
  toDoPomodoroCount: number
) {
  const counter = {
    pomodoro: 0,
    shortBreak: 0,
    longBreak: 0,
  };

  let current = currentMode;
  let done = donePomodoros;
  while (counter.pomodoro !== toDoPomodoroCount) {
    const mode = getNextMode(current, done, longBreakInterval);

    counter[current] = counter[current] + 1;
    if (current === "pomodoro") done++;

    current = mode;
  }
  return counter;
}

export function getFinishTime(
  tasks: ITask[],
  timer: Timer,
  settings: Settings
) {
  const toDoPomodoroCount = getToDoPomodoroCount(tasks);

  const counter = countSteps(
    timer.mode,
    timer.donePomodoros,
    settings.longBreakInterval,
    toDoPomodoroCount
  );

  const pomodoroTime = counter.pomodoro * settings.pomodoroLength * 1000;
  const shortBreakTime = counter.shortBreak * settings.shortBreakLength * 1000;
  const longBreakTime = counter.longBreak * settings.longBreakLength * 1000;

  return Time.getHoursWithMinutes(
    new Date(
      new Date().getTime() + pomodoroTime + shortBreakTime + longBreakTime
    )
  );
}
