import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {authThunkCreator} from "../../redux/auth-reducer";
import {RootReducersType} from "../../redux/redux-store";



class HeaderContainer extends React.Component<AuthStateType> {
    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        return (<>
            <Header isAuth={this.props.isAuth} login={this.props.login} />
        </>)
    }
}

type AuthStateType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
const mapStateToProps = (state: RootReducersType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


type MapDispatchToProps = {
    authThunkCreator: () => void
}

//@ts-ignore
//export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

export default connect(mapStateToProps, {authThunkCreator: authThunkCreator})(HeaderContainer)