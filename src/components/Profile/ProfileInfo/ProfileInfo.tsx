import React from "react";
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import { ProfileStatusFC } from "./ProfileStatusFC";


type ProfileInfoType = {
    imageLink: string
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    console.log('PROFILEINFO RENDER')
    console.log(props)
    return (
        <div>
            {/*<div className={classes.profile_imgWrapper}>*/}
            {/*    <img src={props.imageLink} alt="image"/>*/}
            {/*</div>*/}
            <div className={classes.profileDescription}>
                <img src={props.profile.photos?.large ? props.profile.photos.large : '#' } alt="#"/>

                <div>
                    <h2>{props.profile.fullName}</h2>
                </div>

                <ProfileStatusFC
                    userStatus={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <div>
                    My Contacts:
                        <ul>
                            {props.profile?.contacts?.facebook ? <li>{props.profile.contacts.facebook}</li> : <></> }
                            {props.profile?.contacts?.github ? <li>{props.profile.contacts.github}</li> : <></> }
                            {props.profile?.contacts?.vk ? <li>{props.profile.contacts.vk }</li> : <></> }
                            {props.profile?.contacts?.twitter ? <li>{props.profile.contacts.twitter } </li> : <></> }
                            {props.profile?.contacts?.instagram ? <li>{props.profile.contacts.instagram }</li> : <></> }
                            {props.profile?.contacts?.mainLink ? <li>{props.profile.contacts.mainLink }</li> : <></> }
                            {props.profile?.contacts?.website ? <li>{props.profile.contacts.website }</li> : <></> }
                            {props.profile?.contacts?.youtube ? <li>{props.profile.contacts.youtube }</li> : <></> }
                        </ul>
                </div>
                <div>
                    <h3>Job</h3>
                    {props.profile.lookingForAJob ? <p>I am looking for a job</p> : <p>I have a job</p> }
                    { props.profile.lookingForAJob ? <p>{props.profile.lookingForAJobDescription}</p> : <></> }
                </div>
            </div>
        </div>
    )
}