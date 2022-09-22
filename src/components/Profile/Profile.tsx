import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    )
}