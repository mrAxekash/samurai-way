import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {AllActionTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    postsData: Array<MyPostPropsType>
    dispatch: (action: AllActionTypes) => void
    newPostText: string
}

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPostsContainer: React.FC<MyPostsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (newMessage: string) => {
        let action = updateNewPostTextActionCreator(newMessage)
        props.dispatch(action)
    }

    return (
        <MyPosts
            onPostChange={onPostChange}
            postsData={props.postsData}
            addPost={addPost}
            value={props.newPostText}/>
    )
}