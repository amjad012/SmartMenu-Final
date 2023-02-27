import TableStore from "./tableStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";

interface Store {
    tableStore: TableStore;
    commonStore:CommonStore;
}

export const store: Store = {
    tableStore: new TableStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}