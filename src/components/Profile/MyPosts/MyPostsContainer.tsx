import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {AllActionTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type MyPostsType = {
//     postsData: Array<MyPostPropsType>
//     dispatch: (action: AllActionTypes) => void
//     newPostText: string
// }


// type MyPostPropsType = {
//     id: string
//     message: string
//     likesCount: number
// }

export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
            {(store: any) => {
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const onPostChange = (newMessage: string) => {
                        let action = updateNewPostTextActionCreator(newMessage)
                        store.dispatch(action)
                    }

                    return (
                        <MyPosts
                            onPostChange={onPostChange}
                            addPost={addPost}
                            postsData={store.getState().profilePage.posts}
                            value={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
}