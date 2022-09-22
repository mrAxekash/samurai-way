import React from "react";
import classes from './Post.module.css';

type PostType = {
    message: string,
    likes: number,
}

export const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://img.lovepik.com/original_origin_pic/18/08/08/0aaca4059b482f768b87625f9fd241e3.png_wh860.png"
                alt="avatar"/>
            {props.message}
            <div>+{props.likes} Like</div>
        </div>
    )
}