import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusFC} from "./ProfileStatusFC";
import img from "../../Users/img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {useDispatch} from "react-redux";
import {CutomFormData, ProfileDataForm} from "./ProfileDataForm";
import {Form} from "redux-form";


type ProfileInfoType = {
    imageLink: string
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    updateProfileData: (data: CutomFormData) => void
}


export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    const setPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const editModeHandler = (editMode: boolean) => {
        setEditMode(editMode)
    }

    const onSubmit = (data: CutomFormData) => {
        props.updateProfileData(data)
        // console.log(data)
    }


    return (
        <div>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos?.large || img} className={classes.mainPhoto} alt="#"/>
                {props.isOwner && <input type={"file"} onChange={setPhoto}/>}
                {/*<div>*/}
                {/*    {editMode ? <button onClick={editModeHandler}>Save profile</button> :<button onClick={editModeHandler}>Edit profile</button>}*/}
                {/*</div>*/}

                {editMode ?
                    <ProfileDataForm
                        onSubmit={onSubmit}
                        profile={props.profile}
                        isOwner={props.isOwner}
                        toEditMode={editModeHandler} />
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        toEditMode={editModeHandler}  />}

                <ProfileStatusFC userStatus={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}


export const Contact: React.FC<{ contactTitle: string | null, contactValue: any }> = (props) => {
    return (
        <div className={classes.contacts}>
            <b>{props.contactTitle}: </b> {props.contactValue}
        </div>

    )
}

export const ProfileData = (props: ProfileDataType) => {

    return (<>
            <div>
                {props.isOwner && <button onClick={() => props.toEditMode(true)}>Edit profile</button> }
            </div>
            <div>
                <h2>{props.profile.fullName}</h2>
            </div>
            <div>
                <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div><b> Looking for a job description: </b> {props.profile.lookingForAJobDescription}  </div>
            <div>
                <b>About me: </b> {props.profile.aboutMe}
            </div>
            <div>
                <b>My Contacts:</b>
                {props.profile.contacts && Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key}
                                    contactTitle={key}
                                    contactValue={props.profile?.contacts[key as KeyType]}/>
                })}

            </div>
        </>

    )
}


//types

export type ProfileDataType = {
    profile: UserProfileType
    isOwner: boolean
    toEditMode: (editMode: boolean) => void
    onSubmit?: (data: CutomFormData) => void

}
export type KeyType = 'github' &
    'vk' &
    'facebook' &
    'instagram' &
    'twitter' &
    'website' &
    'youtube' &
    'mainLink'