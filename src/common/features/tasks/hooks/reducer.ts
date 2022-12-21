import { ITask, Tasks } from "@utils/constants";
import { Dispatch } from "react";

type ActionType =
  | "HANDLE_TASK_CLICK"
  | "SET_TASK_TO_EDIT"
  | "CANCEL_EDITING"
  | "SAVE"
  | "LOAD_FROM_LOCAL_STORAGE"
  | "DELETE"
  | "ADD"
  | "INIT_FROM_LOCAL_STORAGE";
type Action = { type: ActionType; payload?: any };

export type DispatchTasks = Dispatch<Action>;

export const reducer = (state: Tasks, action: Action) => {
  switch (action.type) {
    case "HANDLE_TASK_CLICK": {
      const clickedTask = action.payload;
      if (state.selectedId === clickedTask.id) {
        return { ...state, selectedId: null };
      }
      return { ...state, selectedId: clickedTask.id };
    }
    case "SET_TASK_TO_EDIT": {
      return { ...state, selectedEditId: action.payload.id };
    }
    case "CANCEL_EDITING": {
      const tasks = state.tasks.slice(0, -1);
      return { ...state, tasks, selectedEditId: null };
    }
    case "SAVE": {
      const editedTaskId = state.tasks.findIndex(
        (task: ITask) => task.id === action.payload.id
      );
      const updatedTasks = state.tasks;
      updatedTasks[editedTaskId] = action.payload;
      return { ...state, updatedTasks, selectedEditId: null };
    }
    case "DELETE": {
      const indexToDelete = state.tasks.findIndex(
        (task: ITask) => task.id === action.payload
      );
      const updatedTasks = state.tasks;
      updatedTasks.splice(indexToDelete, 1);
      return { ...state, updatedTasks };
    }
    case "ADD": {
      const newTask = {
        donePomodoros: 0,
        estPomodoros: 1,
        title: "",
        id: state.nextUuid,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        selectedEditId: state.nextUuid,
        nextUuid: state.nextUuid + 1,
      };
    }
    case "INIT_FROM_LOCAL_STORAGE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
