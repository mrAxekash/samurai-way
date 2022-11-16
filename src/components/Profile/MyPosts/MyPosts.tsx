import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    postsData: Array<MyPostPropsType>

}

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likesCount}/>)

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
}