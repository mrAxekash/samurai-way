import * as React from 'react';
import {UserStateType} from "../../redux/users-reducer";
import {Preloader} from "../common/preloader/Preloader";
import {Pagination} from "../../components/common/paginator/Pagination";
import {User} from "../../components/Users/User";
import styles from './Users.module.css'

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
        totalUsersCount,
    } = props

    return (
        <div className={styles.wrapper}>
            {props.isFetching ? <Preloader/> : null}

            <Pagination pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount}
                        portionSize={10}/>

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