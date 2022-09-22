import React from "react";
import styles from './Nav.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a className={`${styles.item} ${styles.active}`} href="src/components/Navbar/Nav#">Profile</a>
            </div>
            <div>
                <a className={styles.item} href="src/components/Navbar/Nav#">Messages</a>
            </div>
            <div>
                <a className={styles.item} href="src/components/Navbar/Nav#">News</a>
            </div>
            <div>
                <a className={styles.item} href="src/components/Navbar/Nav#">Music</a>
            </div>
            <div>
                <a className={styles.item} href="src/components/Navbar/Nav#">Settings</a>
            </div>
        </nav>
    )
}