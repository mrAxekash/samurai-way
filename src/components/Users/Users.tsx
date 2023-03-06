import * as React from 'react';
import style from './Users.module.css'
import {follow, unfollow, UserStateType} from "../../redux/users-reducer";
import img from "./img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type Props = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: UserStateType[]
    onPageChanged: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followInPropgress: (progressIsFetching: boolean, userId: number) => void
    followingInProgress: number[]
};

export const Users = (props: Props) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}

            {pages.map((p) => {
                return (
                    <span key={p} className={props.currentPage === p ? style.selectedPage : ''} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                )
            })}

            <h2>Users</h2>

            {props.users.map((u: UserStateType) => {
                return (
                    <div key={u.id}>
                        <div className={style.usersContainer}>
                            <div>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small === null ? img : u.photos.small} alt="avatar"
                                             className={style.usersAvatar}/>
                                    </NavLink>
                                </div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(userId => userId === u.id)}
                                            onClick={() => {
                                                props.follow(u.id)
                                            }}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(userId => userId === u.id)}
                                            onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Follow</button>}
                            </div>
                            <div className={style.usersContainer}>
                                <div>
                                    <h3>{u.name}</h3>
                                    <span>{u.status}</span>
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
            })}
        </div>
    );
};