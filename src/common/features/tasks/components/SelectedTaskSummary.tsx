interface Props {
  title: string | undefined;
}

export const SelectedTaskSummary = ({ title }: Props) => {
  return (
    <div className="text-sm font-semibold mx-auto text-center mb-4">
      <div className="text-xs">WORKING ON</div>
      {title && <div className="text-neutral-300">{title}</div>}
    </div>
  );
};
