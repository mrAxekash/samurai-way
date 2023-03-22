import React from 'react'
import {AllActionTypes} from "./store";
import {v1} from "uuid";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type  UserProfileType = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
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
    aboutMe: null | ''
}

export type ProfilePageType = {
    imageLink: string
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType
    status: string
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
    status: ''
}

export type AllProfileType = AddPostACType | UpdateNewPostTextACType | setUsersACType | SetUserStatusACType

export const profile_Reducer = (state: ProfilePageType = initialState, action: AllProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
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

        default:
            return state
    }
}

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({type: ADD_POST} as const)

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)

export type setUsersACType = ReturnType<typeof setUsersProfileAC>
export const setUsersProfileAC = (newUserProfile: UserProfileType) => {
    return {type: SET_USER_PROFILE, newUserProfile} as const}

export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export const setUserStatusAC = (userStatus: string) => {
    return {
        type: 'SET-USER-STATUS',
        userStatus
    } as const
}

export const profileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(`${userId}`).then((response => {
                        dispatch(setUsersProfileAC(response.data))
                    }
                )
            )
    }
}

export const profileStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setUserStatusAC(res.data))
        })
}