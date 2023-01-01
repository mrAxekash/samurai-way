import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionTypes, ProfilePageType} from "../../redux/store";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";



type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: AllActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo imageLink={props.profileState.imageLink}/>
            <MyPostsContainer postsData={props.profileState.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profileState.newPostText}
            />
        </div>
    )
}