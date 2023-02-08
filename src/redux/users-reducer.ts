export type InitialStateType = {
    users: UserStateType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
    currentPage: 1
}

export type AllUsersType = SetUsersACType | FollowACType | UnfollowACType | SetChangeUsersPageACType | SetTotalUsersCountType

type FollowACType = ReturnType<typeof FollowAC>
export const FollowAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}

type UnfollowACType = ReturnType<typeof UnfollowAC>
export const UnfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

type SetUsersACType = ReturnType<typeof SetUsersAC>
export const SetUsersAC = (users: UserStateType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type SetChangeUsersPageACType = ReturnType<typeof SetChangeUsersPageAC>
export const SetChangeUsersPageAC = (newUsersPage: number) => {
    return {
        type: 'CHANGE-USERS-PAGE',
        payload: {
            newUsersPage
        }
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof SetTotalUsersCountAC>
export const SetTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalUsersCount
        }
    } as const
}
export const users_Reducer = (state: InitialStateType = initialState, action: AllUsersType):InitialStateType  => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: true} : user) }
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(user => user.id === action.payload.userID ? {...user, followed: false} : user) }
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
        default: {
            return state
        }
    }
}
