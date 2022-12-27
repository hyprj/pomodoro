interface Props {
  label?: string;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

export const InputNumber = ({ value, label, onChange, max = 99 }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-500 mb-1">
        {label}
      </label>
      <input
        className="bg-gray-100 dark:bg-gray-500 dark:text-gray-200 rounded p-2 w-24"
        type="number"
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
