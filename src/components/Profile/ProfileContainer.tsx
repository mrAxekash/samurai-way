import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, profileThunkCreator, setUsersProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RootReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type AllProfileType = MapStateToPropsType & MapDispatchToPropsType

type userIdType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<userIdType> & AllProfileType

class ProfileContainer extends React.Component<RouterPropsType> {

    componentDidMount() {
        let userId = !this.props.match.params.userId ? '2' : this.props.match.params.userId
        this.props.profileThunkCreator(+userId)
    }

    render() {
        return (
            <>
                <Profile {...this.props.profile} />
            </>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profileData: UserProfileType) => void
    profileThunkCreator: (userId: number) => void
}

const mapStateToProps = (state: RootReducersType): MapStateToPropsType => {
    return {
        profile: state.profilePage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (userProfile: UserProfileType) => {
            dispatch(setUsersProfileAC(userProfile))
        },
        profileThunkCreator: profileThunkCreator
    }
}


const ProfileUserIdCount = withRouter(ProfileContainer)
export default connect(mapStateToProps, {profileThunkCreator: profileThunkCreator})(ProfileUserIdCount);