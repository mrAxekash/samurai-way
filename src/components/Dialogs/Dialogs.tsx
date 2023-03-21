import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {StateDialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs: React.FC<StateDialogsPropsType> = (props) => {
    //let [newMessage, setNewMessage] = useState('')
    //!!!written in the old: let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()!!!

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                       id={d.id}
                                                                       isActive={d.isActive}
                                                                       key={d.id}
                                                                       srcImg={d.avatar}/>)

    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message}
                                                                      key={m.id}
                                                                      myMessage={m.myMessage}
                                                                      avatar={m.avatar}/>)

    const onSendMessageClickHandler = () => {
        props.addSendMessage()
    }
    const onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewMessage(e.currentTarget.value)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={onNewMessageChangeHandler}
                              placeholder={'Enter your message'}></textarea>
                    {/* !!! writting in the old: <textarea ref={newMessage}></textarea>*/}!!!
                    <button onClick={onSendMessageClickHandler}>Send message</button>
                </div>
            </div>
        </div>
    )
}