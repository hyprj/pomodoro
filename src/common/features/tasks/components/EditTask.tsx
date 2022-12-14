import { ModalOverlay } from "@components/modal/components/ModalOverlay";
import { Dispatch } from "react";
import { EditTaskForm } from "./EditTaskForm";
import { ITask } from "./Task";

interface Props {
  task: ITask;
  dispatch: Dispatch<any>;
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
