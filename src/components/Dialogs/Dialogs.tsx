import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog} >
                    <NavLink to={'/dialogs/1'} activeClassName={classes.active}>Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/2'}>Karina</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/3'}>Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/4'}>Ilya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/5'}>Kristina</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hello!
                </div>
                <div className={classes.message}>
                    Are you here?
                </div>
                <div className={classes.message}>
                    This is Alex from IT-Kamasutra?
                </div>
                <div className={classes.message}>
                    This is great!
                </div>
            </div>
        </div>
    )
}