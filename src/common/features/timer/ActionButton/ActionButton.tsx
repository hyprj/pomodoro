import { useTheme } from "@hooks/useTheme";

interface Props {
  isExecuting: boolean;
  toggle: () => void;
}

export const ActionButton = ({ isExecuting, toggle }: Props) => {
  const { primaryColor } = useTheme();

  const text = isExecuting ? "STOP" : "START";
  const stateEffect = isExecuting
    ? "relative top-[5px]"
    : "shadow-[0_5px_0px_0px_rgb(220,220,220)] dark:shadow-[0_5px_0px_0px_rgb(150,150,150)]";
  return (
    <button
      onClick={toggle}
      className={`bg-gray-100 dark:bg-stone-300 px-14 py-3 w-52 text-${primaryColor}-light dark:text-${primaryColor}-dark  rounded font-bold text-2xl ${stateEffect}`}
    >
      {text}
    </button>
  );
};
