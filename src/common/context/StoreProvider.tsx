import { useEffect, useReducer } from "react";
import { storeReducer } from "./storeReducer";
import { loadOrInitializeState, saveState } from "../utils/browserStorage";
import { StoreContext } from "./StoreContext";

const initialState = loadOrInitializeState();

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};
