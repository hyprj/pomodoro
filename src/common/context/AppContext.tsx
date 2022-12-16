import { SettingsProvider } from "./settings/SettingsContext";
import { TimerProvider } from "./timer/TimerContext";

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  return (
    <SettingsProvider>
      <TimerProvider>{children}</TimerProvider>
    </SettingsProvider>
  );
};
