import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { useTheme } from "@hooks/useTheme";

export const SwitchThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  if (isDarkMode) {
    return (
      <Button onClick={toggleDarkMode} variant="ghost">
        <SunIcon className="w-5 h-5" />
      </Button>
    );
  }
  return (
    <Button onClick={toggleDarkMode} variant="ghost">
      <MoonIcon className="w-5 h-5" />
    </Button>
  );
};
