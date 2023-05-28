import TableStore from "./tableStore";
import {createContext, useContext} from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";
import ProfileStore from "./ProfileStore";
import CommentStore from "./commentStore";
import RequestStore from "./requestStore";

interface Store {
    tableStore: TableStore;
    commonStore:CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
    commentStore:CommentStore;
    requestStore:RequestStore;
}

export const store: Store = {
    tableStore: new TableStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore:new ProfileStore(),
    commentStore:new CommentStore(),
    requestStore:new RequestStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}