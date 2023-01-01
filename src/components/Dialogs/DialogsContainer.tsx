import React, {ChangeEvent} from "react";
//import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllActionTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: AllActionTypes) => void
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const addSendMessage = () => {
        let action = addMessageAC()
        props.dispatch(action)
    }
    const addNewMessage = (newMessage: string) => {
        let action = updateNewMessageAC(newMessage)
        props.dispatch(action)
    }

    return (
        <Dialogs dialogsData={props.dialogsData} addSendMessage={addSendMessage} addNewMessage={addNewMessage}/>
    )
}