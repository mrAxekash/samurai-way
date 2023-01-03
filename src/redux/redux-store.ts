import {combineReducers, createStore, legacy_createStore} from "redux";
import {profile_Reducer} from "./profile-reducer";
import {dialogs_Reducer} from "./dialogs-reducer";
import {sidebar_Reducer} from "./sidebar-reducer";


const rootReducers = combineReducers({
    profilePage: profile_Reducer,
    dialogsPage: dialogs_Reducer,
    sidebar: sidebar_Reducer
})

export const store = legacy_createStore(rootReducers)


export type RootReducersType = ReturnType<typeof rootReducers>