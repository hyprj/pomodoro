import { Modal } from "@components/modal/Modal";
import { InputNumber } from "@components/ui/InputNumber";
import { ToggleButton } from "@components/ui/ToggleButton";
import { useSettings } from "@context/settings/SettingsContext";
import { useTimer } from "@context/timer/TimerContext";
import { useState } from "react";
import { Setting } from "./components/Setting";

interface Props {
  toggleModal: () => void;
}

export const Settings = ({ toggleModal }: Props) => {
  const { settings, dispatch } = useSettings();
  const { dispatch: dispatchTimer } = useTimer();
  const [backupSettings] = useState(settings);

  return (
    <Modal
      title="App settings"
      toggleModal={toggleModal}
      disabled={!settings.isValid}
    >
      <Setting title="Time (minutes)" isTitleFullWidth={true}>
        <div className="flex w-full justify-between">
          <InputNumber
            label="pomodoro"
            value={settings.pomodoroLength}
            onChange={(e) => {
              console.log("XDD", e.target.value);
              dispatch({
                type: "HANDLE_LENGTH_POMODORO",
                payload: e.target.value,
              });
              dispatchTimer({
                type: "UPDATE_TIME_LEFT",
                payload: {
                  mode: "pomodoro",
                  timeLeft: Number(e.target.value) * 60,
                },
              });
            }}
            onBlur={() => {
              console.log("xd");
              dispatch({
                type: "ON_BLUR_POMODORO_LENGTH_VALIDATION",
                payload: backupSettings.pomodoroLength,
              });
            }}
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
