import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" alt="logo"/>
            <span className={styles.login}>
                {props.isAuth ? props.login : <NavLink to={'/auth'} className={styles.login}> Login </NavLink> }

            </span>
        </header>
    )
}

