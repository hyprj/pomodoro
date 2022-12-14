import { Button } from "src/common/components/ui/Button";
import { Settings } from "@features/Settings/Settings";
import { useModal } from "src/common/hooks/useModal";
import { ToggleColorModeBtn } from "@components/ui/ToggleColorModeBtn";

export const Header = () => {
  const { isOpen, toggleModal } = useModal();
  return (
    <>
      <header className="flex justify-between items-end w-full max-w-xl my-2 pb-2 text-white border-b border-black/10">
        <h2 className="font-semibold text-2xl">Pomodoro</h2>
        <nav className="flex  items-center gap-5">
          <ToggleColorModeBtn />
          <Button onClick={toggleModal}>settings</Button>
        </nav>
      </header>
      {isOpen && <Settings toggleModal={toggleModal} />}
    </>
  );
};
