import { fireEvent, render } from "@testing-library/react";
import { NumberInput } from "../NumberInput";

const props = {
  min: 1,
  max: 10,
  defaultValue: 10,
  onChange: () => undefined,
  label: "test",
};

describe("NumberInput", () => {
  test("should render component with defaultValue set", () => {
    const { getByRole } = render(<NumberInput {...props} defaultValue={5} />);
    const input = getByRole("spinbutton");
    expect(input).toHaveValue(5);
  });

  test("should render label with sr-only class for renderLabel set to false", () => {
    const { getByText } = render(
      <NumberInput {...props} renderLabel={false} />
    );
    const label = getByText("test");
    expect(label).toHaveClass("sr-only");
  });

  test("should call onChange when input is changed", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <NumberInput
        label="test"
        min={1}
        max={10}
        defaultValue={10}
        onChange={onChange}
      />
    );
    const input = getByLabelText("test");
    fireEvent.change(input, { target: { value: 10 } });
    expect(onChange).toBeCalled();
  });
});
