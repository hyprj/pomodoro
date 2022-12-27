import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DispatchSettings, reducer } from "./reducer";
import { getData, saveData } from "../../utils/localStorage";
import { defaultSettings, Settings } from "@utils/constants";

interface Props {
  children: React.ReactNode;
}

const SettingsContext = createContext<undefined | any>(undefined);

export const SettingsProvider = ({ children }: Props) => {
  const [settings, dispatch] = useReducer(reducer, defaultSettings);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    dispatch({ type: "INIT_FROM_STORAGE", payload: getData("settings") });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    if (!settings.isValid) return;
    saveData("settings", settings);
  }, [settings, isInitialized]);

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context as { settings: Settings; dispatch: DispatchSettings };
};
