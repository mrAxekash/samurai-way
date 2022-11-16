import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: string,
    isActive: boolean
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + (props.isActive ? ' ' + s.active : '')}>
            <NavLink to={path} className={s.dialogItems}>{props.name}</NavLink>
        </div>
    )
}
