import React from "react";
import {addPostActionCreator, PostsType} from "../../../redux/profile-reducer";
import {AllActionTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReducersType} from "../../../redux/redux-store";


export type MapStatePropsType = {
    postsData: PostsType[]
    value: string
}

export type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}
export type PostsContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducersType): MapStatePropsType => {
    return {
        postsData: state.profilePage.posts,
        value: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: AllActionTypes) => void): MapDispatchPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)