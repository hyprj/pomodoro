interface Props {
  isChecked: boolean;
  onClick: (isChecked: boolean) => void;
}

export const ToggleButton = ({ isChecked, onClick }: Props) => {
  const outerStyle = isChecked
    ? "bg-green-600/60 justify-end"
    : "bg-gray-300 justify-start";
  return (
    <div
      className={`${outerStyle} rounded-full p-1 w-14 flex hover:cursor-pointer`}
      onClick={() => onClick(!isChecked)}
    >
      <div className="w-6 h-6 rounded-full bg-white" />
    </div>
  );
};
