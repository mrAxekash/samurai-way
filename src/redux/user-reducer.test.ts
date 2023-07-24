import React from "react";
import {followAC, InitialStateType, users_Reducer} from "./users-reducer";
import {isUndefined} from "util";

test('testing user-reducer', () => {

    let initialState: InitialStateType = {
        users: [
            {
                id: 1,
                photos: {
                    small: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg',
                    large: undefined
                },
                followed: true,
                name: 'Alexandr',
                location: {country: 'Belarus', city: 'Minsk'},
                status: 'I am a boss'
            },
            {
                id: 2,
                photos: {
                    small: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg',
                    large: undefined
                },
                followed: true,

                name: 'Karina',
                location: {country: 'Belarus', city: 'Minsk'},
                status: 'I am a boss too'
            },
            {
                id: 3,
                photos: {
                    small: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg',
                    large: undefined
                },
                followed: false,
                name: 'Ilya',
                location: {country: 'Belarus', city: 'Minsk'},
                status: 'I am a boss too'
            },
            {
                id: 4,
                photos: {
                    small: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg',
                    large: undefined
                },
                followed: false,
                name: 'Dmitry',
                location: {country: 'Poland', city: 'Varshava'},
                status: 'I am a boss too'
            }
        ],
        pageSize: 10,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        totalUsersCount: 10,
    }

    let newState = users_Reducer(initialState, followAC(3))


    expect(newState.users[0].followed).toBe(true)
})