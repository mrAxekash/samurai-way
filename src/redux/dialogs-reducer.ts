import React from 'react'
import {AllActionTypes} from "./store";
import {v1} from "uuid";
import {AnyAction, Dispatch} from "redux";

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    //newMessageText: string
}
export type DialogsType = {
    id: string
    name: string
    isActive: boolean
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
    myMessage: boolean
    avatar: string
}

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState: DialogsPageType = {
    dialogs: [
        {
            id: '1',
            name: 'Ilya',
            isActive: false,
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
        },
        {
            id: '2',
            name: 'Dima',
            isActive: true,
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
        },

        {id: '3', name: 'Karina', isActive: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'},
        {id: '4', name: 'Kristina', isActive: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'}
    ] as Array<DialogsType>,
    messages: [
        {
            id: '1',
            message: 'Hello!',
            myMessage: true,
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
        },
        {
            id: '2',
            message: 'How are you?!',
            myMessage: true,
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
        },
        {id: '3', message: 'Thanks!', myMessage: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'},
        {
            id: '4',
            message: 'Yohohohoho!',
            myMessage: false,
            avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'
        },
        {
            id: '5',
            message: 'You are narcoman!',
            myMessage: true,
            avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
        }
    ] as Array<MessagesType>,
    //newMessageText: ''
}

export const dialogs_Reducer = (state: DialogsPageType = initialState, action: AllActionTypes):DialogsPageType  => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage: MessagesType = {
                id: v1(),
                message: action.message,
                myMessage: true,
                avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
            }
            return {...state, messages: [...state.messages, newMessage]}
        }

        default:
            return state
    }
}

export type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (message: string) => ({type: ADD_MESSAGE, message} as const)

//thunks

export const addMessageTC = (userMessage: string) => (dispatch: Dispatch) => {
    dispatch(addMessageAC(userMessage))
}