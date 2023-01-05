import { defaultSettings, defaultTimer, ITask } from "@utils/constants";
import { getFinishTime } from "../utils/tasksSummary";

beforeEach(() => {
  jest.restoreAllMocks();
  jest.useFakeTimers();
  jest.setSystemTime(0);
});

describe("Single task", () => {
  test("should return `00:00` for 0 tasks", () => {
    const tasks = [] as ITask[];
    expect(getFinishTime(tasks, defaultTimer, defaultSettings)).toBe("00:00");
  });

  test("should return `00:25` [1x 25min pomodoro]", () => {
    const tasks = [
      { donePomodoros: 0, estPomodoros: 1, id: 0, title: "test" },
    ] as ITask[];
    expect(getFinishTime(tasks, defaultTimer, defaultSettings)).toBe("00:25");
  });

  test("should return `00:55` [2x 25min pomodoro, 1 short break]", () => {
    const tasks = [
      { donePomodoros: 0, estPomodoros: 2, id: 0, title: "test" },
    ] as ITask[];
    expect(getFinishTime(tasks, defaultTimer, defaultSettings)).toBe("00:55");
  });

  test("should return `02:35` [5x 25min pomodoro, 3 short break, 1 long break]", () => {
    const tasks = [
      { donePomodoros: 0, estPomodoros: 5, id: 0, title: "test" },
    ] as ITask[];
    expect(getFinishTime(tasks, defaultTimer, defaultSettings)).toBe("02:35");
  });
});

describe("Multiple tasks", () => {
  test("Should return `00:55` [2x task with 1 25min pomodoro", () => {
    const tasks = [
      { donePomodoros: 0, estPomodoros: 1, id: 0, title: "test" },
      { donePomodoros: 0, estPomodoros: 1, id: 1, title: "test" },
    ] as ITask[];
    expect(getFinishTime(tasks, defaultTimer, defaultSettings)).toBe("00:55");
  });
});

describe("Timer is set to perform long break", () => {
  test("Should return `00:40` [1x task with 1x 25min pomodoro to do] + long break", () => {
    const tasks = [
      { donePomodoros: 0, estPomodoros: 1, id: 0, title: "test" },
    ] as ITask[];
    expect(
      getFinishTime(
        tasks,
        {
          donePomodoros: 3,
          isActive: false,
          isExecuting: false,
          mode: "longBreak",
          timeLeft: 900,
        },
        defaultSettings
      )
    ).toBe("00:40");
  });
});
