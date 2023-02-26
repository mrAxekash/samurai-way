import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUser} from "../../redux/auth-reducer";
import {Dispatch} from "redux";
import {RootReducersType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<AuthStateType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        authAPI.getAuth()
            .then((data => {
                        if (data.resultCode === 0) {
                            const {id, email, login} = data.data
                            this.props.setAuthUser(id, email, login)
                        }
                    }
                )
            )
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
    setAuthUser: (id: number, email: string, login: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuthUser: (id: number, email: string, login: string) => {
            dispatch(setAuthUser(id, email, login))
        }
    }
}

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)