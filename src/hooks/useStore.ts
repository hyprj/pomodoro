import { useContext } from "react";
import { StoreContext } from "@context/StoreContext";

export const useStore = () => {
  const storeContext = useContext(StoreContext);
  if (!storeContext)
    throw new Error(
      "No StoreContext.Provider found when calling useGlobalState."
    );
  return storeContext;
};