import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllActionTypes, DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: AllActionTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    //let [newMessage, setNewMessage] = useState('')
    //!!!written in the old: let newMessage: RefObject<HTMLTextAreaElement> = React.createRef()!!!

    let dialogElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id} isActive={d.isActive} key={d.id} srcImg={d.avatar}/>)

    let messageElement = props.dialogsData.messages.map(m => <Message message={m.message} key={m.id} myMessage={m.myMessage} avatar={m.avatar}/>)

    const onClickHandler = () => {
        props.dispatch({type: "ADD-MESSAGE"})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: e.currentTarget.value})
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
                <textarea value={props.dialogsData.newMessageText} onChange={onChangeHandler}></textarea>
                {/* !!! writting in the old: <textarea ref={newMessage}></textarea>*/}!!!
                <button onClick={onClickHandler}>Send message</button>
            </div>

        </div>
    )
}