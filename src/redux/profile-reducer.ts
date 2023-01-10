import React from 'react'
import {AllActionTypes} from "./store";
import {v1} from "uuid";

export type ProfilePageType = {
    imageLink: string
    posts: PostsType[]
    newPostText: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}


const ADD_POST = 'ADD-POST' // не сработала фича с константой
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' // не сработала фича с константой

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
    newPostText: ''
}

export const profile_Reducer = (state: ProfilePageType = initialState, action: AllActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            // let newState = {...state}
            // newState.posts = [...state.posts, newPost]
            // return newState
            return {...state, posts: [...state.posts, newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
            // let newState = {...state}
            // newState.newPostText = action?.newText || ''
            // return newState
            return {...state, newPostText: state.newPostText = action?.newText || ''}
        }
        default:
            return state
    }
}

//export type AllProfileACTypes = AddPostACType | UpdateNewPostTextACType

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({type: ADD_POST} as const)

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)