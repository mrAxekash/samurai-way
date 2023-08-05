import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    changeProfileUpdateStatusAC, ChangeProfileUpdateStatusACType,
    ProfilePageType,
    profileStatusTC,
    profileThunkCreator, updateProfileDataTC, updateProfilePhotoTC,
    updateStatusTC,
    UserProfileType
} from "../../redux/profile-reducer";
import {RootReducersType} from "../../redux/redux-store";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {CutomFormData} from "./ProfileInfo/ProfileDataForm";

class ProfileContainer extends React.Component<RouterPropsType> {


    refreshProfile() {

        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorisedUserId + ''
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileThunkCreator(+userId)
        this.props.setUserStatus(+userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<RouterPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props.profile}
                    updateUserStatus={this.props.updateUserStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    updateProfileData={this.props.updateProfileData}
                    profileUpdateStatus={this.props.profileUpdateStatus}
                    statusError={this.props.statusError}
                    changeProfileUpdateStatusAC={this.props.changeProfileUpdateStatusAC}
                />
            </>
        )
    }
}


const mapStateToProps = (state: RootReducersType): MapStateToPropsType => {
    console.log('MapStateToProps change profile')
    return {
        profile: state.profilePage,
        authorisedUserId: state.auth.id,
        statusError: state.profilePage.statusError,
        profileUpdateStatus: state.profilePage.profileUpdateStatus
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
    profileThunkCreator: profileThunkCreator,
    setUserStatus: profileStatusTC,
    updateUserStatus: updateStatusTC,
    savePhoto: updateProfilePhotoTC,
    updateProfileData: updateProfileDataTC,
    changeProfileUpdateStatusAC: changeProfileUpdateStatusAC

}), WithAuthRedirect, withRouter)(ProfileContainer)


//types

type AllProfileType = MapStateToPropsType & MapDispatchToPropsType

type userIdType = {
    userId: string
}

type RouterPropsType = RouteComponentProps<userIdType> & AllProfileType

type MapStateToPropsType = {
    profile: ProfilePageType
    authorisedUserId: number | null
    profileUpdateStatus: boolean
    statusError: string[] | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profileData: UserProfileType) => void
    profileThunkCreator: (userId: number) => void
    setUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: any) => void
    updateProfileData: (data: CutomFormData) => void
    changeProfileUpdateStatusAC: (newStatus: boolean) => void
}