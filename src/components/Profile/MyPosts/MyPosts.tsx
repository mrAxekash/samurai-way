import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPostsType = {
    postsData: Array<MyPostPropsType>
    onPostChange: (newMessage: string) => void
    addPost: () => void
    value: string
}

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={ p.likesCount}/>)

    const onClickHandler = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.value} onChange={onPostChange}></textarea>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <button>Remove post</button>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
}