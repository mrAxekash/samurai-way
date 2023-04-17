// export type InitialStateType = {
//     users: UserStateType[]
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
// }
// export type PhotosUserType = {
//     small: string | undefined
//     large: string | undefined
// }
//
// export type UserStateType = {
//     id: number
//     photos: PhotosUserType
//     followed: boolean
//     name: string
//     location: LocationUserType
//     status: string
// }
// type LocationUserType = {
//     country: string
//     city: string
// }

// let initialState: InitialStateType = {
//     // users: [] as UserStateType[],
//     // pageSize: 100,
//     // totalUsersCount: 0,
//     // currentPage: 1,
//     // isFetching: false
// }

//export type AllUsersType = SetUsersACType | FollowACType | UnfollowACType | SetChangeUsersPageACType | SetTotalUsersCountType | IsFetchingACType

// type FollowACType = ReturnType<typeof followAC>
// export const followAC = (userID: number) => {
//     return {
//         type: 'FOLLOW',
//         payload: {
//             userID
//         }
//     } as const
// }
//
// type UnfollowACType = ReturnType<typeof unfollowAC>
// export const unfollowAC = (userID: number) => {
//     return {
//         type: 'UNFOLLOW',
//         payload: {
//             userID
//         }
//     } as const
// }
//
// type SetUsersACType = ReturnType<typeof setUsersAC>
// export const setUsersAC = (users: UserStateType[]) => {
//     return {
//         type: 'SET-USERS',
//         payload: {
//             users
//         }
//     } as const
// }
//
// type SetChangeUsersPageACType = ReturnType<typeof setChangeUsersPageAC>
// export const setChangeUsersPageAC = (newUsersPage: number) => {
//     return {
//         type: 'CHANGE-USERS-PAGE',
//         payload: {
//             newUsersPage
//         }
//     } as const
// }
//
// type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
// export const setTotalUsersCountAC = (totalUsersCount: number) => {
//     return {
//         type: 'SET-TOTAL-USERS-COUNT',
//         payload: {
//             totalUsersCount
//         }
//     } as const
// }
//
// type IsFetchingACType = ReturnType<typeof isFetchingAC>
// export const isFetchingAC = (fetching: boolean) => {
//     return {
//         type: 'CHANGE-FETCHING',
//         payload: {
//             fetching
//         }
//     } as const
// }

import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const auth_Reducer = (state: InitialStateType = initialState, action: AuthUserType): InitialStateType => {
    switch (action.type) {
        case 'COMPLETE-AUTH-USER': {
            return {...state, ...action.payload, isAuth: true}
        }
        case "SET-USER-LOGIN": {
            return {...state, ...action.payload}
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
                            dispatch(setAuthUser(id, email, login))
                        }
                    }
                )
            )
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => {
    console.log('loginUserTC is render')
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((res) => {
                console.log(res)
            })
    }
}

// action creators


export const setAuthUser = (id: number, email: string, login: string) => {
    return {
        type: 'COMPLETE-AUTH-USER',
        payload: {
            id, email, login
        }
    } as const
}

export const setLoginUser = (email: string, password: string, rememberMe: boolean) => {
    return {
        type: 'SET-USER-LOGIN',
        payload: {
            email,
            password,
            rememberMe
        }
    } as const
}


// types

export type AuthUserType = ReturnType<typeof setAuthUser> | ReturnType<typeof setLoginUser>

export type InitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    rememberMe: boolean
}
const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    rememberMe: false
}
