import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number
}
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog} >
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemType = {
    message: string
}
const MessageItem = (props: MessageItemType) => {

    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}



export const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={'Alex'} id={1}/>
                <DialogItem name={'Karina'} id={2}/>
                <DialogItem name={'Dima'} id={3}/>
                <DialogItem name={'Ilya'} id={4}/>
                <DialogItem name={'Kristina'} id={5}/>
            </div>

            <div className={classes.messages}>
                <MessageItem message={'Hello!'} />
                <MessageItem message={'Are you here?!'} />
                <MessageItem message={'This is Alex from IT-Kamasutra?!'} />
                <MessageItem message={'This is great!!'} />
            </div>
        </div>
    )
}