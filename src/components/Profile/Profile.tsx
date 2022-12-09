import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";


type ProfilePropsType = {
    imageLink: string
    postsData: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    // let postsData: PostsDataPropsType[] = [
    //     {id: '1', message: 'Hello! How are you?', likesCount: 15},
    //     {id: '2', message: 'This is my first post!', likesCount: 11},
    //     {id: '3', message: 'This is my second post!', likesCount: 15},
    //     {id: '4', message: 'This is my third post!', likesCount: 1},
    //     {id: '5', message: 'This is my fourth post!', likesCount: 8},
    //     {id: '6', message: 'This is my fifth post!', likesCount: 155},
    // ]
    // let imageLink = "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    return (
        <div>
            <ProfileInfo imageLink={props.imageLink}/>
            <MyPosts postsData={props.postsData} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}