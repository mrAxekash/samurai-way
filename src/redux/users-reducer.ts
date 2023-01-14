export type InitialStateType = {
    users: UserStateType[]
}
export type UserStateType = {
    id: number
    avatar: string
    followed: boolean
    fullname: string
    location: LocationUserType
    status: string
}
type LocationUserType = {
    country: string
    city: string
}

let initialState: InitialStateType = {
    users: [
     // { id: 1, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Alexandr', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss' },
     // { id: 2, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Karina', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
     // { id: 3, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Ilya', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
     // { id: 4, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Dmitry', location: {country: 'Poland', city: 'Varshava'}, status: 'I am a boss too' }
    ]
}

export type AllUsersType = SetUsersACType | FollowACType | UnfollowACType

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
        default: {
            return state
        }
    }
}
