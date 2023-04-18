import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsContainerType} from "./MyPostsContainer";
import {useForm} from "react-hook-form";

// type MyPostsType = {
//     postsData: Array<MyPostPropsType>
//     onPostChange: (newMessage: string) => void
//     addPost: () => void
//     value: string
// }
//
// type MyPostPropsType = {
//     id: string
//     message: string
//     likesCount: number
// }

export const MyPosts: React.FC<PostsContainerType> = (props) => {

    const {
        register, handleSubmit, formState: {
            errors
        }
    } = useForm()

    let postsElement = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likesCount}/>)

    const onClickHandler = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.value} onChange={onPostChange}></textarea>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea {...register('userPost')} placeholder={'Input new post'} ></textarea>
                        <input type="submit"/>
                    </form>
                </div>
                <button onClick={onClickHandler}>Add post</button>
                <button>Remove post</button>
            </div>

            {postsElement}
            {/*тут сидят компоненты, которые поочередно проходят через map и преобразуются с учётом полученных значений из BLL*/}
        </div>
    )
}