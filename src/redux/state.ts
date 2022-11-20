import {renderEntireTree} from "../render";
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type ProfilePageType = {
    imageLink: string
    posts: PostsType[]
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
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type BestFriendsType = {
    id: string
    name: string
    src: string
    imageUrl: string
}
export type SidebarType = {
    bestFriend: BestFriendsType[]
}


export let state: RootStateType = {
    profilePage: {
        imageLink: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        posts: [
            {id: '1', message: 'Hello! How are you?', likesCount: 15},
            {id: '2', message: 'This is my first post!', likesCount: 11},
            {id: '3', message: 'This is my second post!', likesCount: 15},
            {id: '4', message: 'This is my third post!', likesCount: 1},
            {id: '5', message: 'This is my fourth post!', likesCount: 8},
            {id: '6', message: 'This is my fifth post!', likesCount: 155},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Ilya', isActive: false, avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"},
            {id: '2', name: 'Dima', isActive: true, avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"},
            {id: '3', name: 'Karina', isActive: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'},
            {id: '4', name: 'Kristina', isActive: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'}
        ],
        messages: [
            {id: '1', message: 'Hello!', myMessage: true, avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"},
            {id: '2', message: 'How are you?!', myMessage: true, avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"},
            {id: '3', message: 'Thanks!', myMessage: false, avatar:'https://wallpapercave.com/wp/wp5082196.jpg'},
            {id: '4', message: 'Yohohohoho!', myMessage: false, avatar: 'https://wallpapercave.com/wp/wp5082196.jpg'},
            {id: '5', message: 'You are narcoman!', myMessage: true, avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"}
        ],
    },
    sidebar: {
        bestFriend: [
            {
                id: '1', name: 'Karina', src: '/dialogs/3', imageUrl: "https://wallpapercave.com/wp/wp5082196.jpg" },
            {
                id: '2', name: 'Ilya', src: '/dialogs/1', imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
            },
            {
                id: '3', name: 'Dima', src: '/dialogs/2', imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1981871a-1560281723.jpg?crop=1.00xw:0.749xh;0,0.183xh&resize=768:*"
            }
        ]
    }
}

//export type addPostType = () => void

export const addPost= (addNewPost: string) => {
    let newPost = {
        id: '5',
        message: addNewPost,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}