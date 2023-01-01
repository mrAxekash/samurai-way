import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllActionTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    addSendMessage: () => void
    addNewMessage: (newMessage: string) => void

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    //let [newMessage, setNewMessage] = useState('')
    //!!!written in the old: let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()!!!

    let dialogElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name}
                                                                       id={d.id}
                                                                       isActive={d.isActive}
                                                                       key={d.id}
                                                                       srcImg={d.avatar}/>)

    let messageElement = props.dialogsData.messages.map(m => <Message message={m.message}
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
                    <textarea value={props.dialogsData.newMessageText}
                              onChange={onNewMessageChangeHandler}
                              placeholder={'Enter your message'}></textarea>
                    {/* !!! writting in the old: <textarea ref={newMessage}></textarea>*/}!!!
                    <button onClick={onSendMessageClickHandler}>Send message</button>
                </div>
            </div>

        </div>
    )
}