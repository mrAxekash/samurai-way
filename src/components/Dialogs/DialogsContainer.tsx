import React from "react";
import {addMessageAC, DialogsPageType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";


export type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
export type MapDispatchPropsType = {
    addSendMessage: () => void
    addNewMessage: (newMessage: string) => void
}

export type StateDialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducersType): MapStatePropsType  => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        addSendMessage: () => {
            dispatch(addMessageAC())
        },
        addNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)