interface Props {
  label?: string;
  min: number;
  max: number;
  defaultValue: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput = ({
  label,
  min,
  max,
  onChange,
  defaultValue,
}: Props) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-semibold text-gray-500 mb-1">
          {label}
        </label>
      )}
      <input
        className="bg-gray-100 dark:bg-gray-500 dark:text-gray-200 rounded p-2 w-24 h-10 invalid:bg-red-100  invalid:border-red-300 invalid:outline-red-800"
        type="number"
        min={min}
        max={max}
        onChange={onChange}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};
