import {connect} from "react-redux";
import {RootReducersType} from "../../redux/redux-store";
import {
    follow,
    followingInProgressAC, getUsersReduxThunk,
    InitialStateType, isFetchingAC,
    setChangeUsersPageAC, setTotalUsersCountAC,
    setUsersAC, unfollow,
    UserStateType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from "../../redux/users-selectors";

export type AllUsersStateType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIContainer extends React.Component<AllUsersStateType> {

    componentDidMount() {
        this.props.getUsersReduxThunk(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (p: number) => {
        this.props.getUsersReduxThunk(this.props.pageSize, p)
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
                isFetching={this.props.isFetching}
                followInPropgress={this.props.followInPropgress}
                followingInProgress={this.props.followingInProgress}
            />
        );
    }
}

type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
// const mapStateToProps = (state: RootReducersType): MapStateToPropsType => {
//     return {
//         users: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: RootReducersType): MapStateToPropsType => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserStateType[]) => void
    changeUsersPage: (newUsersPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followInPropgress: (progressFetching: boolean, userId: number) => void
    getUsersReduxThunk: (pageSize: number, currentPage: number) => void
}

export default compose<React.FC>(
    //WithAuthRedirect,
    connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsersAC,
    changeUsersPage: setChangeUsersPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: isFetchingAC,
    followInPropgress: followingInProgressAC,
    getUsersReduxThunk: getUsersReduxThunk
}))(UsersAPIContainer)

// export const UsersContainer = connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsersAC,
//     changeUsersPage: setChangeUsersPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     toggleIsFetching: isFetchingAC,
//     followInPropgress: followingInProgressAC,
//     getUsersReduxThunk: getUsersReduxThunk
// })(UsersAPIContainer);
