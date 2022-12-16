import { Time } from "@utils/formatting";

export const Clock = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="text-[5rem] md:text-[7rem] font-bold dark:text-gray-300">
      {Time.toString(timeLeft)}
    </div>
  );
};
