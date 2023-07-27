import React, {ChangeEvent, MouseEvent} from "react";
import classes from './ProfileInfo.module.css';
import {updateProfilePhotoTC, UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusFC} from "./ProfileStatusFC";
import img from "../../Users/img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {useDispatch} from "react-redux";


type ProfileInfoType = {
    imageLink: string
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const dispatch = useDispatch()

    const setPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos?.large || img } className={classes.mainPhoto} alt="#"/>
                {props.isOwner && <input type={"file"} onChange={setPhoto}/>}
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