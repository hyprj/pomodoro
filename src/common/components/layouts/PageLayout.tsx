import { useTheme } from "@hooks/useTheme";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { primaryColor } = useTheme();
  return (
    <div
      className={`flex flex-col p-2 justify-start items-center min-h-screen transition-colors duration-1000 ease-out`}
      style={{ backgroundColor: primaryColor }}
    >
      {children}
    </div>
  );
};
