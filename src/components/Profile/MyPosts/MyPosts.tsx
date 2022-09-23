import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={classes.item}>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post message={'Hello! How are you?'} likes={15}/>
            <Post message={'This is my first post!'} likes={20}/>

        </div>
    )
}