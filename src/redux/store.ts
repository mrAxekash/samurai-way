import {v1} from "uuid";
import {AddPostACType, profile_Reducer, setUsersACType, UpdateNewPostTextACType} from "./profile-reducer";
import {
    AddMessageACType,

    dialogs_Reducer,
    UpdateNewMessageACType,
} from "./dialogs-reducer";

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
type ProfilePageType = {
    imageLink: string
    posts: PostsType[]
    newPostText: string
}
type DialogsType = {
    id: string
    name: string
    isActive: boolean
    avatar: string
}
type MessagesType = {
    id: string
    message: string
    myMessage: boolean
    avatar: string
}
type PostsType = {
    id: string
    message: string
    likesCount: number
}
type BestFriendsType = {
    id: string
    name: string
    src: string
    imageUrl: string
}
type SidebarType = {
    bestFriend: BestFriendsType[]
}

export type AllActionTypes = AddMessageACType | UpdateNewMessageACType | AddPostACType | UpdateNewPostTextACType // типизация приходит из reducer-ов, и тут мы её соединяем, и передаём дальше в методе dispatch

export type StoreStateType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: AllActionTypes) => void
}

// const ADD_POST = 'ADD-POST' // не сработала фича с константой
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT' // не сработала фича с константой
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
// const ADD_MESSAGE = 'ADD-MESSAGE'

export let store: StoreStateType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
            ],
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
            ],
            newMessageText: ''
        },
        sidebar: {
            bestFriend: [
                {
                    id: '1', name: 'Karina', src: '/dialogs/3', imageUrl: "https://wallpapercave.com/wp/wp5082196.jpg"
                },
                {
                    id: '2',
                    name: 'Ilya',
                    src: '/dialogs/1',
                    imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
                },
                {
                    id: '3',
                    name: 'Dima',
                    src: '/dialogs/2',
                    imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:* "
                }
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    getState(): RootStateType {
        return this._state
    },
    dispatch(action) {
        //profile_Reducer(this._state.profilePage, action)
        dialogs_Reducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },
}

// функции для создания Action. ОБЯЗАТЕЛЬНО НУЖНО В КОНЦЕ СОЗДАНИЯ ACTION СТАВИТЬ AS CONST!!!! Это для создания константы. Если не будет константа, то диспатч не отреагирует, и выдаст ошибку!!!!!


// export const addPostActionCreator = () => ({type: ADD_POST} as const)
// export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)


// export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
// export const updateNewMessageAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage} as const)
// пример технического английского: updateNewMessageBodyCreator - создатель обновления нового сообщения тела, т.к. newMessage, body, creator - это существительные, то читается от последнего существительного, и потом идём читать в начало.
