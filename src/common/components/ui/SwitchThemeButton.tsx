import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { useTheme } from "@hooks/useTheme";

export const SwitchThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  if (isDarkMode) {
    return (
      <Button
        onClick={toggleDarkMode}
        variant="ghost"
        ariaLabel="Switch to light mode"
      >
        <SunIcon className="w-5 h-5" />
      </Button>
    );
  }
  return (
    <Button
      onClick={toggleDarkMode}
      variant="ghost"
      ariaLabel="Switch to dark mode"
    >
      <MoonIcon className="w-5 h-5" />
    </Button>
  );
};
