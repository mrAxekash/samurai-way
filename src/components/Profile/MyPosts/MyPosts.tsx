import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";


type MyPostsType = {
    postsData: Array<MyPostPropsType>
    addPost: (newPost: string) => void

}

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likesCount}/>)

    let[newPostElement, setNewPostElement] = useState('')

    //устаревшая версия записи let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    // const onClickHandler = () => {
    //     alert(newPostElement.current?.value)
    // }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostElement(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addPost(newPostElement)
        setNewPostElement('')
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/* устаревшая версия записи <textarea ref={newPostElement}></textarea>*/}
                    <textarea value={newPostElement} onChange={onChangeHandler}></textarea>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <button>Remove post</button>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
}