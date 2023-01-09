import React from 'react'

export type SidebarType = {
    bestFriend: BestFriendsType[]
}
export type BestFriendsType = {
    id: string
    name: string
    src: string
    imageUrl: string
}



let initialState: SidebarType = {
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

export const sidebar_Reducer = (state: SidebarType  = initialState, action: any): SidebarType => {
    return state
}