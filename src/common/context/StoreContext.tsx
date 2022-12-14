import { LocalStorageContext } from "@customTypes/interfaces";
import { createContext } from "react";

interface StoreContext {
  dispatch: React.Dispatch<any>;
  state: LocalStorageContext;
}

export const StoreContext = createContext<StoreContext | undefined>(undefined);
