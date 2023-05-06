import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profile_Reducer} from "./profile-reducer";
import {dialogs_Reducer} from "./dialogs-reducer";
import {sidebar_Reducer} from "./sidebar-reducer";
import {users_Reducer} from "./users-reducer";
import {auth_Reducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";


const rootReducers = combineReducers({
    profilePage: profile_Reducer,
    dialogsPage: dialogs_Reducer,
    sidebar: sidebar_Reducer,
    usersPage: users_Reducer,
    auth: auth_Reducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

export type RootReducersType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store

