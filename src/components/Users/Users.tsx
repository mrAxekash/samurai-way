import * as React from 'react';
import style from './Users.module.css'
import {follow, unfollow, unfollowAC, UserStateType} from "../../redux/users-reducer";
import img from "./img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Pagination} from "../../components/common/paginator/Pagination";
import {User} from "../../components/Users/User";

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
    const {
        pageSize,
        onPageChanged,
        isFetching,
        currentPage,
        followingInProgress,
        follow,
        followInPropgress,
        unfollow,
        users,
        totalUsersCount
    } = props

    return (
        <div>
            {props.isFetching ? <Preloader/> : null}

            <Pagination pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}
                        totalUsersCount={totalUsersCount}/>

            <h2>Users</h2>

            {props.users.map((u: UserStateType) => {
                return (<User key={u.id}
                              user={u}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}/>
                );
            })
            }
        </div>);
}