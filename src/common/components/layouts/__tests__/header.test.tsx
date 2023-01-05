import { render, fireEvent } from "@testing-library/react";
import { defaultSettings } from "@utils/constants";
import { Header } from "../Header";

jest.mock("../../../hooks/useTheme", () => ({
  useTheme: jest.fn(() => ({
    theme: "light",
    toggleTheme: jest.fn(),
  })),
}));

jest.mock("../../../context/settings/SettingsContext", () => ({
  useSettings: jest.fn(() => ({
    settings: defaultSettings,
    dispatch: jest.fn(),
    save: jest.fn(),
    validation: { isValid: true, validate: jest.fn() },
  })),
}));

test("should render the component", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Pomodoro")).toBeInTheDocument();
  expect(getByText("settings")).toBeInTheDocument();
});

test("should toggle the modal when the settings button is clicked", () => {
  const { getByLabelText, getByText } = render(<Header />);
  const settingsButton = getByText("settings");

  fireEvent.click(settingsButton);
  expect(getByLabelText("close modal")).toBeInTheDocument();

  const closeButton = getByLabelText("close modal");
  fireEvent.click(closeButton);
  expect(closeButton).not.toBeInTheDocument();
});
