import { ModalOverlay } from "@components/modal/components/ModalOverlay";
import { ITask } from "@utils/constants";
import { DispatchTasks } from "../hooks/reducer";
import { EditTaskForm } from "./EditTaskForm";

interface Props {
  task: ITask;
  dispatch: DispatchTasks;
}

export const EditTask = ({ task, dispatch }: Props) => {
  const cancelEditing = () => {
    const res = confirm("Are you sure? You will lost all your changes");
    if (res) {
      dispatch({ type: "CANCEL_EDITING" });
    }
  };
  return (
    <>
      <ModalOverlay toggleModal={cancelEditing} />
      <EditTaskForm task={task} dispatch={dispatch} cancel={cancelEditing} />
    </>
  );
};
