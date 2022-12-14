import { Button } from "src/common/components/ui/Button";

interface Props {
  isSelected?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export const ModeButton = ({
  isSelected = false,
  children,
  onClick,
}: Props) => {
  return (
    <Button
      variant={isSelected ? "selected" : "unselected"}
      className="font-semibold"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
