import { Button } from "src/common/components/ui/Button";

interface Props {
  toggleModal: () => void;
}

export const ModalFooter = ({ toggleModal }: Props) => {
  return (
    <div className="p-4 w-full flex justify-end bg-slate-200 dark:bg-slate-800/50 rounded-b-lg">
      <Button variant="black" className="font-semibold" onClick={toggleModal}>
        OK
      </Button>
    </div>
  );
};
