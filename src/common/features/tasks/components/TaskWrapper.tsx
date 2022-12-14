interface Props {
  isSelected: boolean;
  children: React.ReactNode;
}

export const TaskWrapper = ({ isSelected, children, onClick }: Props) => {
  const selectedStyle = isSelected ? "text-red-600 border-black" : "";
  return (
    <div
      className={`flex justify-around items-center text-gray-700 font-bold w-full h-16 bg-gray-100 my-2 px-4 rounded border-transparent hover:border-gray-300 border-l-8 cursor-pointer ${selectedStyle}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
