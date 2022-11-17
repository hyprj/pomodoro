import { useReducer } from "react";
import { StoreContext } from "./StoreContext";
import { storeReducer } from "./storeReducer";
import { loadOrInitializeState } from "../utils/browserStorage";

const initialState = loadOrInitializeState();

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};
