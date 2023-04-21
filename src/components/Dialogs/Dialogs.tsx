import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {StateDialogsPropsType} from "./DialogsContainer";
import {Form} from "../common/Form";


export const Dialogs: React.FC<StateDialogsPropsType> = (props) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                       id={d.id}
                                                                       isActive={d.isActive}
                                                                       key={d.id}
                                                                       srcImg={d.avatar}/>)

    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message}
                                                                      key={m.id}
                                                                      myMessage={m.myMessage}
                                                                      avatar={m.avatar}/>)

    const onSendMessageClickHandler = (newPostMessage: string) => {
        props.addSendMessage(newPostMessage)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <Form sendMessage={onSendMessageClickHandler}/>
                </div>
            </div>
        </div>
    )
}