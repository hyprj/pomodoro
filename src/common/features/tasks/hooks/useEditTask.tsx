import { DispatchTasks } from "@context/tasks/reducer";
import { ITask } from "@utils/constants";
import { useState } from "react";

export const useEditTask = (task: ITask, dispatch: DispatchTasks) => {
  const [title, setTitle] = useState(task.title);
  const [estPomodoros, setEstPomodoros] = useState(task.estPomodoros);

  const validateEstPomodoros = () => {
    if (estPomodoros < 1 || estPomodoros > 100) {
      setEstPomodoros(1);
    }
  };

  const promptShouldCancel = () => {
    const res = confirm("Are you sure? You will lost all your changes");
    if (res) {
      dispatch({ type: "CANCEL_EDITING" });
    }
  };

  const cancelEditing = () => {
    if (title === task.title && estPomodoros === task.estPomodoros) {
      dispatch({ type: "CANCEL_EDITING" });
    } else {
      promptShouldCancel();
    }
  };

  return {
    validateEstPomodoros,
    cancelEditing,
    form: { title, setTitle, estPomodoros, setEstPomodoros },
  };
};
