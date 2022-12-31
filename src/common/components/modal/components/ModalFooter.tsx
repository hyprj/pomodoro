import { Button } from "src/common/components/ui/Button";

interface Props {
  toggleModal: () => void;
  disabled?: boolean;
}

export const ModalFooter = ({ toggleModal, disabled = false }: Props) => {
  return (
    <div className="p-4 w-full flex justify-end bg-slate-200 dark:bg-gray-800/30 rounded-b-lg">
      <Button
        variant="black"
        className="font-semibold"
        onClick={toggleModal}
        isDisabled={disabled}
      >
        OK
      </Button>
    </div>
  );
};
