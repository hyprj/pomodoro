import { Button } from "@components/ui/Button";
import { ITask } from "@utils/constants";
import React, { useRef, useState } from "react";
import { DispatchTasks } from "../hooks/reducer";

interface Props {
  task: ITask;
  dispatch: DispatchTasks;
  cancel: () => void;
}

export const EditTaskForm = ({ task, dispatch, cancel }: Props) => {
  const titleRef = useRef(task.title);
  const [estPomodoros, setEstPomodoros] = useState(task.estPomodoros);

  const checkPomodorosRange = () => {
    if (estPomodoros < 1 || estPomodoros > 100) {
      setEstPomodoros(1);
    }
  };

  return (
    <div
      className={`z-30 relative   text-gray-700 w-full bg-gray-50 my-2 rounded border-gray-300`}
    >
      <div className="px-6 py-8">
        <input
          className="text-md p-2 w-full bg-inherit mb-6 bg-gray-200 rounded"
          defaultValue={titleRef.current}
          placeholder="title"
          onChange={(e) => (titleRef.current = e.target.value)}
          type="text"
          maxLength={30}
        />
        <div className="font-semibold">
          <p>Done / Est pomodoros</p>
          <input
            className="bg-gray-200 text-gray-400 rounded p-2 w-24"
            value={task.donePomodoros}
            disabled
          />
          <span className="mx-2">/</span>
          <input
            value={estPomodoros}
            onBlur={checkPomodorosRange}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEstPomodoros(Number(e.target.value))
            }
            className="bg-gray-200 rounded p-2 w-24"
          />
        </div>
      </div>
      <div className="bg-gray-200 rounded-b px-6 py-3 flex items-center justify-between">
        <button
          className="hover:underline font-md text-gray-600 font-semibold mr-"
          onClick={() => dispatch({ type: "DELETE", payload: task.id })}
        >
          Delete
        </button>
        <div>
          <button
            className="hover:underline font-md text-gray-600 font-semibold mr-6"
            onClick={cancel}
          >
            Cancel
          </button>
          <Button
            variant="black"
            className="font-semibold"
            onClick={() =>
              dispatch({
                type: "SAVE",
                payload: { ...task, title: titleRef.current, estPomodoros },
              })
            }
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
