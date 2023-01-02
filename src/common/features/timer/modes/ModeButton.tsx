import { Button } from "src/common/components/ui/Button";

interface Props {
  isSelected?: boolean;
  children: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
}

export const ModeButton = ({
  isSelected = false,
  children,
  onClick,
  ariaLabel,
}: Props) => {
  return (
    <Button
      variant={isSelected ? "selected" : "unselected"}
      className="font-semibold"
      onClick={onClick}
      ariaLabel={ariaLabel}
    >
      {children}
    </Button>
  );
};
