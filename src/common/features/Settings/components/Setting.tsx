import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  multiple?: boolean;
}

export const Setting = ({ children, title, multiple = false }: Props) => {
  const settingStyle = multiple ? "flex-col" : "justify-between items-center";
  const innerStyle = multiple ? "flex justify-evenly" : "";
  return (
    <div
      className={`flex py-6 [&:not(:nth-of-type(1))]:border-t-2 dark:border-gray-600 ${settingStyle}`}
    >
      <p className="font-semibold text-gray-700 dark:text-gray-200">{title}</p>
      <div className={innerStyle}>{children}</div>
    </div>
  );
};
