import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";
import {RootReducersType} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";


export const Profile = (props: ProfilePageType) => {
    //const profilePage = useSelector<RootReducersType, ProfilePageType>(state => state.profilePage)
    {if (!props.profile) return <Preloader/>}
    return (
        <div>
            <ProfileInfo imageLink={props.imageLink} profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}