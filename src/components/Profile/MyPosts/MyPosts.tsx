import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsContainerType} from "./MyPostsContainer";
import {Form} from "../../common/Form";


export const MyPosts = React.memo ((props: PostsContainerType) => {

    console.log('RENDER MY POSTS')

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likesCount}/>)

    const onClickHandler = (newPost: string) => {
        props.addPost(newPost)
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <Form sendMessage={onClickHandler}/>
                </div>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
});