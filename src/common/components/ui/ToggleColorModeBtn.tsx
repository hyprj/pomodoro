import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { useDarkMode } from "@hooks/useDarkMode";

export const ToggleColorModeBtn = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  if (isDarkMode) {
    return (
      <Button onClick={toggleDarkMode} variant="ghost">
        <SunIcon className="w-5 h-5" />
      </Button>
    );
  } else {
    return (
      <Button onClick={toggleDarkMode} variant="ghost">
        <MoonIcon className="w-5 h-5" />
      </Button>
    );
  }
};
