import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsType = {
    postsData: Array<MyPostPropsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <button>Remove post</button>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
}