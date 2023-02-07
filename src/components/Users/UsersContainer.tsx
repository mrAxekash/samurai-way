import {connect} from "react-redux";
import {Users} from "./Users";
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
import  UsersClass  from "./UsersClass";


export type AllUsersStateType = MapStateToPropsType & MapDispatchToPropsType

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

//export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);