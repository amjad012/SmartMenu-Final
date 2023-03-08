import TableStore from "./tableStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import requestStore from "./requestStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";

interface Store {
    tableStore: TableStore;
    commonStore:CommonStore;
    requestStore:requestStore;
    userStore: UserStore;
    modalStore: ModalStore;

}

export const store: Store = {
    tableStore: new TableStore(),
    commonStore: new CommonStore(),
    requestStore: new requestStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}