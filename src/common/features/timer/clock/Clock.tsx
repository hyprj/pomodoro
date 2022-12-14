import { numberTimeToString } from "src/common/utils/format";

export const Clock = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="text-[5rem] md:text-[7rem] font-bold dark:text-gray-300">
      {numberTimeToString(timeLeft)}
    </div>
  );
};
