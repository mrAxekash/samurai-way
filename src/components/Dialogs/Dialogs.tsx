import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addMessageAC, AllActionTypes, DialogsPageType, updateNewMessageAC} from "../../redux/state";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: AllActionTypes) => void
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
        let action = addMessageAC()
        props.dispatch(action)
    }
    const onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = updateNewMessageAC(e.currentTarget.value)
        props.dispatch(action)
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