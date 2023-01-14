import {connect} from "react-redux";
import {Users} from "./Users";
import {RootReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, InitialStateType, SetUsersAC, UnfollowAC, UserStateType} from "../../redux/users-reducer";


export type AllUsersStateType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: InitialStateType
}
const mapStateToProps = (state: RootReducersType):MapStateToPropsType => {

    return {
        users: state.usersPage
    }
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserStateType[]) => void
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);