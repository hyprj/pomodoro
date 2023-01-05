import { fireEvent, render } from "@testing-library/react";
import { NumberInput } from "../NumberInput";

test("should render component with defaultValue set", () => {
  const { getByRole } = render(<NumberInput label="test" defaultValue={10} />);
  const input = getByRole("spinbutton");
  expect(input).toHaveValue(10);
});

test("should render label with sr-only class for renderLabel set to false", () => {
  const { getByText } = render(
    <NumberInput label="test" renderLabel={false} />
  );
  const label = getByText("test");
  expect(label).toHaveClass("sr-only");
});

test("should call onChange when input is changed", () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <NumberInput onChange={onChange} label="test" />
  );
  const input = getByLabelText("test");
  fireEvent.change(input, { target: { value: 10 } });
  expect(onChange).toBeCalled();
});
