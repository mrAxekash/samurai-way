import React from "react";
// import {FollowAC, InitialStateType, users_Reducer} from "./users-reducer";
//
// test('testing user-reducer', () => {
//
//     let initialState: InitialStateType = {
//         users: [
//             { id: 1, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Alexandr', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss' },
//             { id: 2, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Karina', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
//             { id: 3, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Ilya', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
//             { id: 4, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Dmitry', location: {country: 'Poland', city: 'Varshava'}, status: 'I am a boss too' }
//         ]
//     }
//
//     let newState = users_Reducer(initialState, FollowAC(3))
//
//
//     expect(newState.users[0].followed).toBe(true)
// })