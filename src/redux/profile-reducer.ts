import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {CutomFormData} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {AppThunk, RootReducersType} from "./redux-store";

export type  UserProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
    aboutMe: string
}

export type ProfilePageType = {
    imageLink: string
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    profileUpdateStatus: boolean
    statusError: string[] | null

}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}


const ADD_POST = 'ADD-POST' // не сработала фича с константой
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' // не сработала фича с константой
const SET_USER_PROFILE = 'SET-USER-PROFILE' // не сработала фича с константой

let initialState: ProfilePageType = {
    imageLink: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posts: [
        {id: '1', message: 'Hello! How are you?', likesCount: 15},
        {id: '2', message: 'This is my first post!', likesCount: 11},
        {id: '3', message: 'This is my second post!', likesCount: 15},
        {id: '4', message: 'This is my third post!', likesCount: 1},
        {id: '5', message: 'This is my fourth post!', likesCount: 8},
        {id: '6', message: 'This is my fifth post!', likesCount: 155},
    ],
    newPostText: '',
    profile: {} as UserProfileType,
    status: '',
    updateUserStatus: () => {
    },
    isOwner: false,
    profileUpdateStatus: false,
    statusError: null as string[] | null
}

export const profile_Reducer = (state: ProfilePageType = initialState, action: AllProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: action.newPost,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost],}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: state.newPostText = action?.newText || ''}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.newUserProfile}
        }
        case "SET-USER-STATUS": {
            return {...state, status: action.userStatus}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        case "CHANGE-PROFILE-PHOTO": {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case "CHANGE-PROFILE-UPDATE-STATUS": {
            return {...state, profileUpdateStatus: action.newStatus}
        }
        case "SET-STATUS-PROFILE-ERROR": {
            return {...state, statusError: action.error}
        }
        default:
            return state
    }
}

//actionCreators

export const changeProfilePhotoAC = (photos: { small: string, large: string }) => {
    return {
        type: 'CHANGE-PROFILE-PHOTO',
        photos
    } as const
}
export const addPostActionCreator = (newPost: string) => ({type: ADD_POST, newPost} as const)


export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)


export const deletePostAC = (postId: string) => {
    return {
        type: "DELETE-POST",
        postId
    } as const
}


export const setUsersProfileAC = (newUserProfile: UserProfileType) => {
    return {type: SET_USER_PROFILE, newUserProfile} as const
}


export const setUserStatusAC = (userStatus: string) => {
    return {
        type: 'SET-USER-STATUS',
        userStatus
    } as const
}

export const changeProfileUpdateStatusAC = (newStatus: boolean) => {
    return {
        type: 'CHANGE-PROFILE-UPDATE-STATUS',
        newStatus
    } as const
}

export const setStatusProfileErrorAC = (error: string[]) => {
    return {
        type: "SET-STATUS-PROFILE-ERROR",
        error
    } as const
}



//thunks
export const profileThunkCreator = (userId: number): AppThunk => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(`${userId}`)
        dispatch(setUsersProfileAC(response.data))
    }
}

export const profileStatusTC = (userId: number): AppThunk => async (dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(res.data))
}

export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

export const updateProfilePhotoTC = (file: string): AppThunk => (dispatch) => {
    profileAPI.updateProfilePhoto(file)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(changeProfilePhotoAC(res.data.data.photos))
            }
        })
}

export const updateProfileDataTC = (data: CutomFormData): AppThunk => (dispatch, getState: () => RootReducersType) => {
    const id = getState().profilePage.profile.userId
    profileAPI.updateProfileData(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(profileThunkCreator(+id))
                dispatch(changeProfileUpdateStatusAC(false))
            } else {
                if (res.data.messages.length > 0) {
                    dispatch(changeProfileUpdateStatusAC(true))
                    dispatch(setStatusProfileErrorAC(res.data.messages))
                }
                //return Promise.reject(res.data.messages)
            }
        })
}


//types

export type setUsersACType = ReturnType<typeof setUsersProfileAC>
export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export type DeletePostACType = ReturnType<typeof deletePostAC>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostACType = ReturnType<typeof addPostActionCreator>
export type ChangeProfilePhotoACType = ReturnType<typeof changeProfilePhotoAC>
export type ChangeProfileUpdateStatusACType = ReturnType<typeof changeProfileUpdateStatusAC>
export type setStatusProfileErrorACType = ReturnType<typeof setStatusProfileErrorAC>


export type AllProfileType =
    AddPostACType
    | UpdateNewPostTextACType
    | setUsersACType
    | SetUserStatusACType
    | DeletePostACType
    | ChangeProfilePhotoACType
    | ChangeProfileUpdateStatusACType
    | setStatusProfileErrorACType

