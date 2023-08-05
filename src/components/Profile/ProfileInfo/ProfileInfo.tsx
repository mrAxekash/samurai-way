import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.css';
import {
    UserProfileType
} from "../../../redux/profile-reducer";
import {ProfileStatusFC} from "./ProfileStatusFC";
import img from "../../Users/img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {useDispatch} from "react-redux";
import {CutomFormData, ProfileDataForm} from "./ProfileDataForm";


type ProfileInfoType = {
    imageLink: string
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
    updateProfileData: (data: CutomFormData) => void
    profileUpdateStatus: boolean
    statusError: null | string[]
    changeProfileUpdateStatusAC: (newStatus: boolean) => void
}


export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const setPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const editModeHandler = (editMode: boolean) => {
        props.changeProfileUpdateStatusAC(editMode)
    }

    const onSubmit = async (data: CutomFormData) => {
        props.updateProfileData(data)
    }

    return (
        <div>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos?.large || img} className={classes.mainPhoto} alt="#"/>
                {props.isOwner && <input type={"file"} onChange={setPhoto}/>}

                {props.profileUpdateStatus ?
                    <ProfileDataForm
                        onSubmit={onSubmit}
                        profile={props.profile}
                        isOwner={props.isOwner}
                        toEditMode={editModeHandler}
                        profileUpdateStatus={props.profileUpdateStatus}
                        changeProfileUpdateStatusAC={props.changeProfileUpdateStatusAC}
                        statusError={props.statusError}
                    />
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        toEditMode={editModeHandler}  />}

                <ProfileStatusFC
                    userStatus={props.status}
                    updateUserStatus={props.updateUserStatus} />
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
    profileUpdateStatus?: boolean
    changeProfileUpdateStatusAC?: (newStatus: boolean) => void
    statusError?: null | string[]
}
export type KeyType = 'github' &
    'vk' &
    'facebook' &
    'instagram' &
    'twitter' &
    'website' &
    'youtube' &
    'mainLink'