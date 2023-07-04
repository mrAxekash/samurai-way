import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialStateType = {
    users: UserStateType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type PhotosUserType = {
    small: string | undefined
    large: string | undefined
}

export type UserStateType = {
    id: number
    photos: PhotosUserType
    followed: boolean
    name: string
    location: LocationUserType
    status: string
}
type LocationUserType = {
    country: string
    city: string
}

let initialState: InitialStateType = {
    users: [] as UserStateType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type AllUsersType =
    SetUsersACType
    | FollowACType
    | UnfollowACType
    | SetChangeUsersPageACType
    | SetTotalUsersCountType
    | IsFetchingACType
    | FollowingInProgressACType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserStateType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type SetChangeUsersPageACType = ReturnType<typeof setChangeUsersPageAC>
export const setChangeUsersPageAC = (newUsersPage: number) => {
    return {
        type: 'CHANGE-USERS-PAGE',
        payload: {
            newUsersPage
        }
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}

type IsFetchingACType = ReturnType<typeof isFetchingAC>
export const isFetchingAC = (fetching: boolean) => {
    return {
        type: 'CHANGE-FETCHING',
        payload: {
            fetching
        }
    } as const
}

type FollowingInProgressACType = ReturnType<typeof followingInProgressAC>
export const followingInProgressAC = (isFething: boolean, userId: number) => {
    return {
        type: 'FOLLOW-IN-PROGRESS',
        payload: {
            isFething, userId
        }
    } as const
}

export const users_Reducer = (state: InitialStateType = initialState, action: AllUsersType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: true} : user)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: false} : user)
            }
        }
        case 'SET-USERS': {

            return {...state, users: action.payload.users}
        }
        case 'CHANGE-USERS-PAGE': {
            return {...state, currentPage: action.payload.newUsersPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "CHANGE-FETCHING": {
            return {...state, isFetching: action.payload.fetching}
        }
        case 'FOLLOW-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.payload.isFething ? [...state.followingInProgress, action.payload.userId] : state.followingInProgress.filter(userId => userId !== action.payload.userId)
            }
        }
        default: {
            return state
        }
    }
}

export const getUsersReduxThunk = (pageSize: number, currentPage: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(isFetchingAC(true))
        dispatch(setChangeUsersPageAC(currentPage))
        const data = await usersAPI.getUsers(pageSize, currentPage);
        dispatch(isFetchingAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUsersCountAC(data.totalCount))
    }
}


const followUnfollowMethod = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any ) => {

    dispatch(followingInProgressAC(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followingInProgressAC(false, userId))

}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
    followUnfollowMethod(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowAC )

        // dispatch(followingInProgressAC(true, userId))
        //
        // const response = await usersAPI.unfollow(userId)
        // if (response.data.resultCode === 0) {
        //     dispatch(unfollowAC(userId))
        // }
        // dispatch(followingInProgressAC(false, userId))
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {

        followUnfollowMethod(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC)
        // dispatch(followingInProgressAC(true, userId))
        // const response = await usersAPI.follow(userId)
        // if (response.data.resultCode === 0) {
        //     dispatch(followAC(userId))
        // }
        // dispatch(followingInProgressAC(false, userId))
    }
}
