interface Props {
  label: string;
  min: number;
  max: number;
  defaultValue: number | string;
  renderLabel?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput = ({
  label,
  renderLabel = true,
  min,
  max,
  onChange,
  defaultValue,
}: Props) => {
  const inputID = label.replaceAll(" ", "");
  const srOnly = renderLabel ? "" : "sr-only";
  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputID}
        className={`text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 ${srOnly}`}
      >
        {label}
      </label>
      <input
        className="bg-gray-100 dark:bg-gray-500 dark:text-gray-200 rounded p-2 w-24 h-10 invalid:bg-red-100  invalid:border-red-300 invalid:outline-red-800"
        type="number"
        id={inputID}
        // aria-invalid={true}
        min={min}
        max={max}
        onChange={onChange}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};
