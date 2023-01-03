import { Button } from "@components/ui/Button";
import { Settings } from "@features/Settings/Settings";
import { useModal } from "src/common/hooks/useModal";
import { SwitchThemeButton } from "@components/ui/SwitchThemeButton";

export const Header = () => {
  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <header className="flex justify-between items-end w-full max-w-xl my-2 pb-2 text-white border-b border-black/10">
        <h1 className="font-semibold text-2xl">Pomodoro</h1>
        <nav className="flex  items-center gap-5">
          <SwitchThemeButton />
          <Button onClick={toggleModal} ariaLabel="Go to settings">
            settings
          </Button>
        </nav>
      </header>
      {isOpen && <Settings toggleModal={toggleModal} />}
    </>
  );
};
