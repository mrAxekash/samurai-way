import {AnyAction, applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import {profile_Reducer} from "./profile-reducer";
import {dialogs_Reducer} from "./dialogs-reducer";
import {sidebar_Reducer} from "./sidebar-reducer";
import {users_Reducer} from "./users-reducer";
import {auth_Reducer} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";
import {useDispatch} from "react-redux";


declare global {
        interface Window {
                __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose
        }

}

const rootReducers = combineReducers({
        profilePage: profile_Reducer,
        dialogsPage: dialogs_Reducer,
        sidebar: sidebar_Reducer,
        usersPage: users_Reducer,
        auth: auth_Reducer,
        app: appReducer
    })



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));


//export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

export type RootReducersType = ReturnType<typeof rootReducers>

export type AppThunk<ReturnType = void> = ThunkAction<void, RootStateType, unknown, AnyAction>
//export const useAppDispatch = () => useDispatch<ThunkDispatch<RootStateType, any, AnyAction>>()

//@ts-ignore
window.store = store

