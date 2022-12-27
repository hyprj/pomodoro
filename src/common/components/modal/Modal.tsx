import { ModalContainer } from "./components/ModalContainer";
import { ModalContent } from "./components/ModalContent";
import { ModalFooter } from "./components/ModalFooter";
import { ModalHeader } from "./components/ModalHeader";
import { ModalOverlay } from "./components/ModalOverlay";

interface Props {
  toggleModal: () => void;
  children: React.ReactNode;
  title: string;
  disabled?: boolean;
}

export const Modal = ({
  toggleModal,
  children,
  title,
  disabled = false,
}: Props) => {
  return (
    <>
      <ModalOverlay toggleModal={toggleModal} />
      <ModalContainer>
        <ModalHeader title={title} toggleModal={toggleModal} />
        <ModalContent>{children}</ModalContent>
        <ModalFooter toggleModal={toggleModal} disabled={disabled} />
      </ModalContainer>
    </>
  );
};
