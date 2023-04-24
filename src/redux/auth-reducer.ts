import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const auth_Reducer = (state: InitialStateType = initialState, action: AuthUserType): InitialStateType => {
    switch (action.type) {
        case 'COMPLETE-AUTH-USER': {
            return {...state, ...action.payload, isAuth: action.payload.isAuth, id: action.payload.id}
        }
        default: {
            return state
        }
    }
}

// thunks
export const authThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuth()
            .then((data => {
                        if (data.resultCode === 0) {
                            const {id, email, login} = data.data
                            dispatch(setAuthUser(id, email, login, true))
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
                }

            })
    }
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false))
            }
        })
}

// action creators

export const setAuthUser = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'COMPLETE-AUTH-USER',
        payload: {
            id, email, login, isAuth
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
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
