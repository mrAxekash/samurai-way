import React from "react";
import classes from './ProfileInfo.module.css';


type ProfileInfoPropsType = {
    imageLink: string
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
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