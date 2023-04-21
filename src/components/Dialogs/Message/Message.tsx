import React from "react";
import s from '../Dialogs.module.css'

type MessageType = {
    message: string
    myMessage: boolean
    avatar: string
}
export const Message = (props: MessageType) => {
    return (
        <>
            {props.myMessage ? <div className={s.message}>
                <img src={props.avatar} alt="userAvatar"/>
                <div>{props.message}</div>
            </div> : <div className={s.friendMessage}>
                <div>{props.message}</div>
                <img src={props.avatar} alt="userAvatar"/>
            </div>
            }
        </>)
}
