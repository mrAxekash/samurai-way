import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfilePageType,
    profileStatusTC,
    profileThunkCreator, updateStatusTC,
    UserProfileType
} from "../../redux/profile-reducer";
import {RootReducersType} from "../../redux/redux-store";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type AllProfileType = MapStateToPropsType & MapDispatchToPropsType

type userIdType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<userIdType> & AllProfileType

class ProfileContainer extends React.Component<RouterPropsType> {


    componentDidMount() {
        // let userId = !this.props.match.params.userId ? '27215' :
        //     this.props.match.params.userId

        // let userId = !this.props.match.params.userId ? '27215' :
        //     this.props.match.params.userId


        //? this.props.history.push('/login') :

        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorisedUserId + ''
            if(!userId) {
                this.props.history.push('/login')
            }
            // if(!userId) {
            //     this.props.history.push('/login')
            // }
        }
        this.props.profileThunkCreator(+userId)
        this.props.setUserStatus(+userId)
    }

    render() {
        console.log('render mapStateToProps Profile')
        return (
            <>
                <Profile {...this.props.profile} updateUserStatus={this.props.updateUserStatus}/>
            </>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfilePageType
    authorisedUserId: number | null

}

type MapDispatchToPropsType = {
    setUserProfile: (profileData: UserProfileType) => void
    profileThunkCreator: (userId: number) => void
    setUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

const mapStateToProps = (state: RootReducersType): MapStateToPropsType => {
    console.log('MapStateToProps change profile')
    return {
        profile: state.profilePage,
        authorisedUserId: state.auth.id
    }
}


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         setUserProfile: (userProfile: UserProfileType) => {
//             dispatch(setUsersProfileAC(userProfile))
//         },
//         profileThunkCreator: profileThunkCreator,
//         setUserStatus: profileStatusTC
//     }
// }

//export default compose<React.FC>(withRouter, WithAuthRedirect, connect(mapStateToProps, {profileThunkCreator: profileThunkCreator}))(ProfileContainer)

export default compose<React.ComponentType>(connect(mapStateToProps, {
    profileThunkCreator: profileThunkCreator,
    setUserStatus: profileStatusTC,
    updateUserStatus: updateStatusTC
}), WithAuthRedirect, withRouter)(ProfileContainer)

// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
//
// const ProfileUserIdCount = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {profileThunkCreator: profileThunkCreator})(ProfileUserIdCount);
