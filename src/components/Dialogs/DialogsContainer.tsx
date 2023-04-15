import React from "react";
import {addMessageAC, DialogsPageType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


export type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
export type MapDispatchPropsType = {
    addSendMessage: () => void
    addNewMessage: (newMessage: string) => void
}

export type StateDialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducersType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addSendMessage: () => {
            dispatch(addMessageAC())
        },
        addNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageAC(newMessage))
        }
    }
}
//compose работает как 2 функции (похож на connect). В первый вызов функиии вместо аргументов вписываем с конца те хоки, которыми нужно будет обернуть компоненту. С конца потому что при втором вызове передаётся компонента, которую необходимо обернуть в эти хоки. И выполнение оборачивания будет начинаться с конца вызова 1 функии: сначала WithAuthRedirect, затем connect(mapStateToProps, mapDispatchToProps). connect это не HOC, а функция, которая возвращает HOK.

export default compose<React.FC>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
