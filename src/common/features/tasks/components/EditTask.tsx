import { ModalOverlay } from "@components/modal/components/ModalOverlay";
import { Button } from "@components/ui/Button";
import { ITask } from "@utils/constants";
import { DispatchTasks } from "../hooks/reducer";
import { useEditTask } from "../hooks/useEditTask";

interface Props {
  task: ITask;
  dispatch: DispatchTasks;
}

export const EditTask = ({ task, dispatch }: Props) => {
  const { validateEstPomodoros, cancelEditing, form } = useEditTask(
    task,
    dispatch
  );
  return (
    <>
      <ModalOverlay toggleModal={cancelEditing} />
      <div
        className={`z-30 relative   text-gray-700 w-full bg-gray-50 my-2 rounded border-gray-300`}
      >
        <div className="px-6 py-8">
          <input
            className="text-md p-2 w-full bg-inherit mb-6 bg-gray-200 rounded"
            placeholder="title"
            value={form.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              form.setTitle(e.target.value)
            }
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
              value={form.estPomodoros}
              onBlur={validateEstPomodoros}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                form.setEstPomodoros(Number(e.target.value));
              }}
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
              onClick={cancelEditing}
            >
              Cancel
            </button>
            <Button
              variant="black"
              className="font-semibold"
              isDisabled={form.title.length === 0}
              onClick={() =>
                dispatch({
                  type: "SAVE",
                  payload: {
                    ...task,
                    title: form.title,
                    estPomodoros: form.setEstPomodoros,
                  },
                })
              }
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
