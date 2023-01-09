import React from "react";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {AllActionTypes} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReducersType} from "../../../redux/redux-store";

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

// export const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//             {(store: any) => {
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     const onPostChange = (newMessage: string) => {
//                         let action = updateNewPostTextActionCreator(newMessage)
//                         store.dispatch(action)
//                     }
//
//                     return (
//                         <MyPosts
//                             onPostChange={onPostChange}
//                             addPost={addPost}
//                             postsData={store.getState().profilePage.posts}
//                             value={store.getState().profilePage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
// }

export type MapStatePropsType = {
    postsData: PostsType[]
    value: string
}

export type MapDispatchPropsType = {
    onPostChange: (newMessage: string) => void
    addPost: () => void
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
        onPostChange: (newMessage: string) => {
            let action = updateNewPostTextActionCreator(newMessage)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)