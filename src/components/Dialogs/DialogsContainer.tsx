import React, {ChangeEvent} from "react";
//import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AllActionTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import { store } from "../../redux/redux-store";


// type DialogsPropsType = {
//     store: any
// }

export const DialogsContainer = () => {

    return (<StoreContext.Consumer>
            {(store: any) => {
                let state = store.getState()
                    const addSendMessage = () => {
                        let action = addMessageAC()
                        store.dispatch(action)
                    }
                    const addNewMessage = (newMessage: string) => {
                        let action = updateNewMessageAC(newMessage)
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs
                            dialogsData={state.dialogsPage}
                            addSendMessage={addSendMessage}
                            addNewMessage={addNewMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}