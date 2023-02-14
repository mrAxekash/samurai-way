import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfileAC, UserProfileType} from "../../redux/profile-reducer";
import {RootReducersType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type AllProfileType = MapStateToPropsType & MapDispatchToPropsType
class ProfileContainer extends React.Component<AllProfileType > {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
//export default ProfileContainer;