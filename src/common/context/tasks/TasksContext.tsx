import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DispatchTasks, reducer } from "./reducer";
import { getData, saveData } from "../../utils/localStorage";
import { defaultTasks, Tasks } from "@utils/constants";

interface Props {
  children: React.ReactNode;
}

const TasksContext = createContext<undefined | any>(undefined);

export const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(reducer, defaultTasks);
  const [isInitialized, setIsInitialized] = useState(false);

  const tryAddDonePomodoro = () => {
    if (typeof tasks.selectedId === "number") {
      dispatch({ type: "ADD_DONE_POMODORO" });
    }
  };

  useEffect(() => {
    dispatch({ type: "INIT_FROM_STORAGE", payload: getData("tasks") });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    saveData("tasks", tasks);
  }, [tasks, isInitialized]);

  return (
    <TasksContext.Provider value={{ dispatch, tasks, tryAddDonePomodoro }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context as {
    tasks: Tasks;
    dispatch: DispatchTasks;
    tryAddDonePomodoro: () => void;
  };
};
