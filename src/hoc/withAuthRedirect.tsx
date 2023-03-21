import * as React from 'react';
import {Redirect} from "react-router-dom";
import {RootReducersType} from "../redux/redux-store";
import {connect} from "react-redux";
import {ComponentType} from "react";

type mapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: RootReducersType): mapStateToPropsRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>)  {

    function RedirectComponent(props: mapStateToPropsRedirectType) {

        if (!props.isAuth) return <Redirect to={'/login'}/>

        const {isAuth, ...restProps} = props

        return <Component {...restProps as T}/>
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent;
};