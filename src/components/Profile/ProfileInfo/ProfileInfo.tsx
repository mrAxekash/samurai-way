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

const Contact: React.FC<{ contactTitle: string | null, contactValue: any }> = (props) => {
    return (
        <div>
            <b>{props.contactTitle}: </b> {props.contactValue}
        </div>

    )
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const dispatch = useDispatch()

    const setPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos?.large || img} className={classes.mainPhoto} alt="#"/>
                {props.isOwner && <input type={"file"} onChange={setPhoto}/>}
                <div>
                    <h2>{props.profile.fullName}</h2>
                </div>
                <div>
                    <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div><b> Looking for a job description: </b> {props.profile.lookingForAJobDescription}  </div>

                <ProfileStatusFC
                    userStatus={props.status} updateUserStatus={props.updateUserStatus}/>
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

                    {/*{props.profile.contacts}*/}
                    {/*<ul>*/}
                    {/*    {props.profile?.contacts?.facebook ? <li>{props.profile.contacts.facebook}</li> : <>Facebook:*/}
                    {/*        -</>}*/}
                    {/*    {props.profile?.contacts?.github ? <li>{props.profile.contacts.github}</li> : <>Github: -</>}*/}
                    {/*    {props.profile?.contacts?.vk ? <li>{props.profile.contacts.vk}</li> : <>VK: -</>}*/}
                    {/*    {props.profile?.contacts?.twitter ? <li>{props.profile.contacts.twitter} </li> : <>Twitter: -</>}*/}
                    {/*    {props.profile?.contacts?.instagram ? <li>{props.profile.contacts.instagram}</li> : <>Instagram: -</>}*/}
                    {/*    {props.profile?.contacts?.mainLink ? <li>{props.profile.contacts.mainLink}</li> : <>-</>}*/}
                    {/*    {props.profile?.contacts?.website ? <li>{props.profile.contacts.website}</li> : <>-</>}*/}
                    {/*    {props.profile?.contacts?.youtube ? <li>{props.profile.contacts.youtube}</li> : <>-</>}*/}
                    {/*</ul>*/}
                </div>
            </div>
        </div>
    )
}


// type Props = {
//     contacts: ContactsType
// }
// const Contacts: React.FC<Props>= (props) => {
//     const contactsKeys = Object.keys(props.contacts)
//
//     return <div>
//         {contactsKeys.map((contact) => {
//             debugger
//             return <div key={contact}>
//                 <b>{contact}:</b> {props.contacts[contact]}
//             </div>
//         })}
//     </div>
//
// }


//types

export type KeyType = 'github' &
    'vk' &
    'facebook' &
    'instagram' &
    'twitter' &
    'website' &
    'youtube' &
    'mainLink'