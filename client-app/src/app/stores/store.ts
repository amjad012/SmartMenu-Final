import TableStore from "./tableStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";
import ProfileStore from "./ProfileStore";
import CommentStore from "./commentStore";
import DemandStore from "./demandStore";

interface Store {
    tableStore: TableStore;
    commonStore:CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore:CommentStore;
    demandStore:DemandStore;
}

export const store: Store = {
    tableStore: new TableStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore:new ProfileStore(),
    commentStore:new CommentStore(),
    demandStore:new DemandStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}