import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  toggleModal: () => void;
}

export const ModalHeader = ({ title, toggleModal }: Props) => {
  return (
    <div className="rounded-t-lg p-4 flex justify-between bg-slate-100 dark:bg-gray-800/30">
      <h4 className="font-bold text-gray-500  dark:text-stone-200 uppercase">
        {title}
      </h4>
      <button onClick={toggleModal}>
        <XMarkIcon className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};
