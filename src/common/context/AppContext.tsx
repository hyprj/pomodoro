import { SettingsProvider } from "./settings/SettingsContext";
import { TasksProvider } from "./tasks/TasksContext";
import { TimerProvider } from "./timer/TimerContext";

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  return (
    <SettingsProvider>
      <TasksProvider>
        <TimerProvider>{children}</TimerProvider>
      </TasksProvider>
    </SettingsProvider>
  );
};
