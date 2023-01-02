import { NumberInput } from "@components/form/NumberInput";
import { Modal } from "@components/modal/Modal";
import { ToggleButton } from "@components/ui/ToggleButton";
import { Setting } from "./components/Setting";
import { useSettingsForm } from "./hooks/useSettingsForm";

interface Props {
  toggleModal: () => void;
}

export const Settings = ({ toggleModal }: Props) => {
  const { settings, dispatch, save, validation } = useSettingsForm();
  return (
    <Modal
      title="App settings"
      toggleModal={() => {
        if (save()) {
          toggleModal();
        }
      }}
      disabled={!validation.isValid}
    >
      <form
        onChange={(e) => validation.setIsValid(e.currentTarget.checkValidity())}
      >
        <Setting multiple title="Time (minutes)">
          <NumberInput
            defaultValue={
              typeof settings.pomodoroLength === "number"
                ? settings.pomodoroLength / 60
                : settings.pomodoroLength
            }
            label="pomodoro"
            min={1}
            max={999}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: "SET_POMODORO_LENGTH",
                payload: e.target.value,
              });
            }}
          />
          <NumberInput
            defaultValue={
              typeof settings.shortBreakLength === "number"
                ? settings.shortBreakLength / 60
                : settings.shortBreakLength
            }
            label="short break"
            min={1}
            max={99}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: "SET_SHORTBREAK_LENGTH",
                payload: e.target.value,
              });
            }}
          />
          <NumberInput
            defaultValue={
              typeof settings.longBreakLength === "number"
                ? settings.longBreakLength / 60
                : settings.longBreakLength
            }
            label="long break"
            min={1}
            max={99}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: "SET_LONGBREAK_LENGTH",
                payload: e.target.value,
              });
            }}
          />
        </Setting>
        <Setting title="Auto start breaks?">
          <ToggleButton
            isChecked={settings.autoStartBreak}
            onClick={(value) =>
              dispatch({ type: "SET_AUTO_START_BREAK", payload: value })
            }
          />
        </Setting>
        <Setting title="Auto start pomodoros?">
          <ToggleButton
            isChecked={settings.autoStartPomodoros}
            onClick={(value) =>
              dispatch({ type: "SET_AUTO_START_POMODOROS", payload: value })
            }
          />
        </Setting>
        <Setting title="Long break interval">
          <NumberInput
            defaultValue={settings.longBreakInterval}
            label="long break interval"
            renderLabel={false}
            min={1}
            max={99}
            onChange={(e) =>
              dispatch({
                type: "SET_LONGBREAK_INTERVAL",
                payload: e.target.value,
              })
            }
          />
        </Setting>
      </form>
    </Modal>
  );
};
