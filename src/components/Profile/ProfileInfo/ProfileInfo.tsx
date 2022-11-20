import React from "react";
import classes from './ProfileInfo.module.css';


type ProfileInfoType = {
    imageLink: string
}
export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div className={classes.profile_imgWrapper}>
                <img src={props.imageLink} alt="image"/>
            </div>
            <div className={classes.profileDescription}>
                avatar + description ++++
            </div>
        </div>
    )
}