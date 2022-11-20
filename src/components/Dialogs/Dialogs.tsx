import React, {ChangeEvent, RefObject, useState} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../redux/state";


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let [newMessage, setNewMessage] = useState('')
    //!!!written in the old: let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()!!!

    let dialogElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} isActive={d.isActive} key={d.id} srcImg={d.avatar}/>)

    let messageElement = props.messages.map(m => <Message message={m.message} key={m.id} myMessage={m.myMessage} avatar={m.avatar}/>)

    const onClickHandler = () => {
        alert(newMessage)
        setNewMessage('')
        //!!! writting in the old: alert(newMessage.current?.value)!!!
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>

                </div>
                <textarea value={newMessage} onChange={onChangeHandler}></textarea>
                {/* !!! writting in the old: <textarea ref={newMessage}></textarea>*/}!!!
                <button onClick={onClickHandler}>Send message</button>
            </div>

        </div>
    )
}