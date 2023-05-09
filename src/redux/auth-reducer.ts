import {Action, AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootReducersType, RootStateType} from "./redux-store";

export const auth_Reducer = (state: InitialStateType = initialState, action: AuthUserType): InitialStateType => {
    switch (action.type) {
        case 'COMPLETE-AUTH-USER': {
            debugger
            return {...state, ...action.payload, isAuth: action.payload.isAuth, id: action.payload.id, error: action.payload.error}
        }
        default: {
            return state
        }
    }
}
//:ThunkAction<any, RootReducersType, unknown, AnyAction>
// thunks
export const authThunkCreator = () : ThunkAction<any, RootReducersType, unknown, AnyAction> => {
    return (dispatch: Dispatch) => {
        return authAPI.getAuth()
            .then((data => {
                debugger
                        if (data.resultCode === 0) {
                            const {id, email, login} = data.data
                            dispatch(setAuthUser(id, email, login, true, ''))
                        }
                    }
                )
            )
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(authThunkCreator() as any) //заглушка
                } else {
                    if(res.data.messages.length > 0) {
                        dispatch(setAuthUser(null, null,  null, false, res.data.messages[0]))
                    }
                }
            })
    }
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false, ''))
            }
        })
}

// action creators

export const setAuthUser = (id: number | null, email: string | null, login: string | null, isAuth: boolean, error: string) => {
    return {
        type: 'COMPLETE-AUTH-USER',
        payload: {
            id, email, login, isAuth, error
        }
    } as const
}


// types

export type AuthUserType = ReturnType<typeof setAuthUser>

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    error: string
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: ''
}
