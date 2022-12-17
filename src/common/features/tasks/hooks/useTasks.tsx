import { defaultTasks, Tasks } from "@utils/constants";
import { getData, saveData } from "@utils/localStorage";
import { useEffect, useReducer, useState } from "react";
import { DispatchTasks, reducer } from "./reducer";

export const useTasks = () => {
  const [tasks, dispatch] = useReducer(reducer, defaultTasks);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    dispatch({ type: "INIT_FROM_LOCAL_STORAGE", payload: getData("tasks") });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    console.log("im saving ", tasks);
    saveData("tasks", tasks);
  }, [isInitialized, tasks]);

  return { tasks, dispatch } as { tasks: Tasks; dispatch: DispatchTasks };
};
