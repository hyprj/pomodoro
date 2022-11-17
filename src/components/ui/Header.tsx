import { Button } from "@components/ui/Button";

export const Header = () => {
  return (
    <header className="flex justify-between items-end w-full max-w-xl my-2 pb-2 text-white border-b border-black/10">
      <h2 className="font-semibold text-2xl">Pomodoro</h2>
      <nav>
        <Button>settings</Button>
      </nav>
    </header>
  );
};
