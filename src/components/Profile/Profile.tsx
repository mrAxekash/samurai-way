import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionTypes, ProfilePageType} from "../../redux/store";



type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: AllActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo imageLink={props.profileState.imageLink}/>
            <MyPosts postsData={props.profileState.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profileState.newPostText}
            />


        </div>
    )
}