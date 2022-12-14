interface Props {
  toggleModal: () => void;
}

export const ModalOverlay = ({ toggleModal }: Props) => {
  return <div className="fixed inset-0 bg-black/30" onClick={toggleModal} />;
};
