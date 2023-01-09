import React from "react";
import {addMessageAC, DialogsPageType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";


// type DialogsPropsType = {
//     store: any
// }

// export const DialogsContainer = () => {
//
//     return (<StoreContext.Consumer>
//             {(store: any) => {
//                 let state = store.getState()
//                 const addSendMessage = () => {
//                     let action = addMessageAC()
//                     store.dispatch(action)
//                 }
//                 const addNewMessage = (newMessage: string) => {
//                     let action = updateNewMessageAC(newMessage)
//                     store.dispatch(action)
//                 }
//                 return (
//                     <Dialogs
//                         dialogsData={state.dialogsPage}
//                         addSendMessage={addSendMessage}
//                         addNewMessage={addNewMessage}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

export type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
export type MapDispatchPropsType = {
    addSendMessage: () => void
    addNewMessage: (newMessage: string) => void
}

export type StateDialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducersType): MapStatePropsType  => {
    return {
        dialogsPage: state.dialogsPage
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        addSendMessage: () => {
            dispatch(addMessageAC())
        },
        addNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)