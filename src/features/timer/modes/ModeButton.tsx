import { Button } from "@components/ui/Button";

interface Props {
  isSelected?: boolean;
  children: React.ReactNode;
}

export const ModeButton = ({ isSelected = false, children }: Props) => {
  return (
    <Button
      variant={isSelected ? "selected" : "unselected"}
      className="font-semibold"
    >
      {children}
    </Button>
  );
};
