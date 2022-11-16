import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataPropsType, MessagesDataPropsType} from "../../App";

type DialogsPropsType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id} isActive={d.isActive} key={d.id}/> )

    let messageElement = props.messagesData.map( m =>  <Message message={m.message} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogElement}

            </div>
            <div className={s.messages}>

                {messageElement}
            </div>
        </div>
    )
}