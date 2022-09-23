import React from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a className={`${styles.item} ${styles.active}`} href="/profile">Profile</a>
            </div>
            <div>
                <a className={styles.item} href="/dialogs">Messages</a>
            </div>
            <div>
                <a className={styles.item} href="/news">News</a>
            </div>
            <div>
                <a className={styles.item} href="/music">Music</a>
            </div>
            <div>
                <a className={styles.item} href="/settings">Settings</a>
            </div>
        </nav>
    )
}