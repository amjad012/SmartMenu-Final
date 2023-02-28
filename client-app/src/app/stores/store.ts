import TableStore from "./tableStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import requestStore from "./requestStore";

interface Store {
    tableStore: TableStore;
    commonStore:CommonStore;
    requestStore:requestStore;
}

export const store: Store = {
    tableStore: new TableStore(),
    commonStore: new CommonStore(),
    requestStore: new requestStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}