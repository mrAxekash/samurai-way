import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";
import {useSelector} from "react-redux";
import {RootReducersType} from "../../redux/redux-store";


export const Profile = (props: ProfilePageType) => {
    const profileStatus = useSelector<RootReducersType, any>(state => state.profilePage.status)
    console.log('RENDER PROFILE')
    console.log(props)
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <ProfileInfo
                imageLink={props.imageLink}
                profile={props.profile}
                status={profileStatus}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    )
}