import {Action, AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppThunk, RootReducersType, RootStateType} from "./redux-store";

export const auth_Reducer = (state: InitialStateType = initialState, action: AllAuthActionType): InitialStateType => {
    switch (action.type) {
        case 'COMPLETE-AUTH-USER': {
            return {
                ...state, ...action.payload,
                isAuth: action.payload.isAuth,
                id: action.payload.id,
                error: action.payload.error
            }
        }
        case 'SET-CAPTCHA-URL': {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}
//:ThunkAction<any, RootReducersType, unknown, AnyAction>


// thunks
export const authThunkCreator = (): AppThunk => {
    return async (dispatch) => {
        const data = await authAPI.getAuth()
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthUser(id, email, login, true, ''))
        }
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean, captcha: string | null = null): AppThunk => {
    return async (dispatch) => {
        const res = await authAPI.login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            dispatch(authThunkCreator()) //заглушка
        } else {
            if(res.data.resultCode === 10) {
                dispatch(setCaptchaUrl())
            }
            if (res.data.messages.length > 0) {
                dispatch(setAuthUser(null, null, null, false, res.data.messages[0]))
            }
        }
    }
}

export const logOutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false, ''))
        dispatch(setCaptchaUrlAC(null))
    }
}

export const setCaptchaUrl = (): AppThunk => async (dispatch) => {
    const response = await authAPI.getCaptchaUrl();
    const captchaUrl = response.url
    dispatch(setCaptchaUrlAC(captchaUrl))
}

// action creators


export const setCaptchaUrlAC = (captcha: string | null) => {
    return {
        type: "SET-CAPTCHA-URL",
        payload: {
            captcha
        }
    } as const
}
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
export type SetCaptchaUrlACType = ReturnType<typeof setCaptchaUrlAC>
export type AllAuthActionType = AuthUserType | SetCaptchaUrlACType
export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    error: string
    captcha: string | null
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: '',
    captcha: null
}
