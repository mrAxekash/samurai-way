import * as React from 'react';
import style from './Users.module.css'
import {UserStateType} from "../../redux/users-reducer";
import img from "./img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {NavLink} from "react-router-dom";

type Props = {
    user: UserStateType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
};

export const User = (props: Props) => {
    const {
        user,
        followingInProgress,
        follow, unfollow
    } = props

    return (<div key={user.id}>
            <div className={style.usersContainer}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small === null ? img : user.photos.small} alt="avatar"
                                 className={style.usersAvatar}/>
                        </NavLink>
                    </div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(userId => userId === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(userId => userId === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Follow</button>}
                </div>
                <div className={style.usersContainer}>
                    <div>
                        <h3>{user.name}</h3>
                        <span>{user.status}</span>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </div>
                </div>

            </div>
            <span>
            </span>
        </div>
    )
};