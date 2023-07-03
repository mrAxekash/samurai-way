import React from 'react'
import {
    addPostActionCreator,
    deletePostAC,
    profile_Reducer,
    ProfilePageType,
    UserProfileType
} from "../redux/profile-reducer";

let state: ProfilePageType = {
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
    updateUserStatus: () => {}
}
test('message of new post should be "IT-INCUBATOR"', () => {

    let action = addPostActionCreator('IT-INCUBATOR')


    let newState = profile_Reducer(state, action)

    expect(newState.posts[6].message).toBe('IT-INCUBATOR')

})

test('posts length should be 7', () => {

    let action = addPostActionCreator('IT-INCUBATOR')

    let newState = profile_Reducer(state, action)

    expect(newState.posts.length).toBe(7)
})

test('after delete, posts length should be decrement', () => {

    let action = deletePostAC("6")

    let newState = profile_Reducer(state, action)

    expect(newState.posts.length).toBe(5)
});

test('after delete, posts length should be not changed if id incorrect', () => {

    let action = deletePostAC("1000")

    let newState = profile_Reducer(state, action)

    expect(newState.posts.length).toBe(6)
});

