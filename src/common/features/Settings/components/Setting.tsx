import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  isTitleFullWidth: boolean;
}

export const Setting = ({ children, title, isTitleFullWidth }: Props) => {
  const outerStyle = isTitleFullWidth
    ? "flex-col"
    : "justify-between items-center";
  const innerStyle = isTitleFullWidth ? "flex justify-center" : "";
  return (
    <div
      className={`flex py-6 [&:not(:nth-of-type(1))]:border-t-2 dark:border-gray-500 ${outerStyle}`}
    >
      <p className="font-semibold text-gray-700 dark:text-gray-300">{title}</p>
      <div className={innerStyle}>{children}</div>
    </div>
  );
};
