import { Modal } from "@components/modal/Modal";
import { InputNumber } from "@components/ui/InputNumber";
import { ToggleButton } from "@components/ui/ToggleButton";
import { useSettings } from "@features/Settings/hooks/useSettings";
import { useState } from "react";
import { Setting } from "./components/Setting";

interface Props {
  toggleModal: () => void;
}

export const Settings = ({ toggleModal }: Props) => {
  const { settings, dispatch, isValid, onSubmit } = useSettings();
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Modal title="App settings" toggleModal={toggleModal}>
      <Setting title="Time (minutes)" isTitleFullWidth={true}>
        <div className="flex w-full justify-between">
          <InputNumber
            label="pomodoro"
            value={settings.pomodoroLength / 60}
            onChange={(e) =>
              dispatch({
                type: "HANDLE_LENGTH_POMODORO",
                payload: e.target.value,
              })
            }
          />
          <InputNumber
            label="short break"
            value={settings.shortBreakLength / 60}
            onChange={(e) =>
              dispatch({
                type: "HANDLE_LENGTH_SHORT_BREAK",
                payload: e.target.value,
              })
            }
          />
          <InputNumber
            label="long break"
            value={settings.longBreakLength / 60}
            onChange={(e) =>
              dispatch({
                type: "HANDLE_LENGTH_LONG_BREAK",
                payload: e.target.value,
              })
            }
          />
        </div>
      </Setting>
      <Setting title="Auto start breaks?" isTitleFullWidth={false}>
        <ToggleButton
          isChecked={settings.autoStartBreak}
          onClick={(value) =>
            dispatch({ type: "AUTO_START_BREAK", payload: value })
          }
        />
      </Setting>
      <Setting title="Auto start pomodoros?" isTitleFullWidth={false}>
        <ToggleButton
          isChecked={settings.autoStartPomodoros}
          onClick={(value) =>
            dispatch({ type: "AUTO_START_POMODOROS", payload: value })
          }
        />
      </Setting>
      <Setting title="Long break interval" isTitleFullWidth={false}>
        <InputNumber
          value={settings.longBreakInterval}
          onChange={(e) =>
            dispatch({ type: "LONG_BREAK_INTERVAL", payload: e.target.value })
          }
        />
      </Setting>
    </Modal>
  );
};
