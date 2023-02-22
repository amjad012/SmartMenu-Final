import TableStore from "./tableStore";
import {createContext, useContext} from "react";

interface Store {
    tableStore: TableStore
}

export const store: Store = {
    tableStore: new TableStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}