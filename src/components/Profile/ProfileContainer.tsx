import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RootReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type AllProfileType = MapStateToPropsType & MapDispatchToPropsType

type userIdType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<userIdType> & AllProfileType

class ProfileContainer extends React.Component<RouterPropsType > {

    componentDidMount() {

        let userId =  !this.props.match.params.userId ? '2' : this.props.match.params.userId
        //userId: this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response => {
                    this.props.setUserProfile(response.data)
                    //console.log(response.data)

                    }
                )
            )
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

const mapStateToProps = (state: RootReducersType ): MapStateToPropsType => {
    return {
        profile: state.profilePage
    }
}
type MapDispatchToPropsType = {
    setUserProfile: (profileData: UserProfileType) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUserProfile: (userProfile: UserProfileType) => {
            dispatch(setUsersProfileAC(userProfile))
        }
    }
}



const ProfileUserIdCount = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProfileUserIdCount);
//export default ProfileContainer;