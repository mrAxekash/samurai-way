import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";
import {RootReducersType} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/profile-reducer";

// postsData={props.profileState.posts}
// dispatch={props.dispatch}
// newPostText={props.profileState.newPostText}

// type ProfilePropsType = {
//     store: any
// }

export const Profile = () => {

    const profilePage = useSelector<RootReducersType, ProfilePageType>(state => state.profilePage)

    return (
        <div>
            <ProfileInfo imageLink={profilePage.imageLink}/>
            <MyPostsContainer />
        </div>
    )
}