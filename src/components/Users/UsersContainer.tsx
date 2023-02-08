import {connect} from "react-redux";
import {UsersFunctionComponent} from "./UsersFunctionComponent";
import {RootReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    InitialStateType,
    SetChangeUsersPageAC, SetTotalUsersCountAC,
    SetUsersAC,
    UnfollowAC,
    UserStateType
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type AllUsersStateType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIContainer extends React.Component<AllUsersStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response => {
                        this.props.setUsers(response.data.items)
                        this.props.setTotalUsersCount(response.data.totalCount)
                    }
                )
            )
    }

    onPageChanged = (p: number) => {
        this.props.changeUsersPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then((response => {
                        this.props.setUsers(response.data.items)
                    }
                )
            )
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users?.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
const mapStateToProps = (state: RootReducersType):MapStateToPropsType => {

    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserStateType[]) => void
    changeUsersPage: (newUsersPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(UnfollowAC(userID))
        },
        setUsers: (users: UserStateType[]) => {
            dispatch(SetUsersAC(users))
        },
        changeUsersPage: (newUsersPage: number) => {
            dispatch(SetChangeUsersPageAC(newUsersPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        }
    }
}

//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFunctionComponent);
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
