import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import {BestFriendsType, SidebarType} from "../../redux/sidebar-reducer";
import {useSelector} from "react-redux";
import {RootReducersType} from "../../redux/redux-store";



type NavBarType = {

}
export const Navbar: React.FC<NavBarType> = (props) => {

    const friends = useSelector<RootReducersType, BestFriendsType[]>(state => state.sidebar.bestFriend)

    //NavLink нужен для изменения адресной строки в браузере, чтобы потом компонента route отрисовала нужную компоненту по адресу
    return (
        <aside>
            <nav className={styles.nav}>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/profile"}>Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/dialogs"} /*"/dialogs" без точки, т.к. тут корневая система сайта*/>Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/users"}>Users
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/news"}>News
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/music"}>Music
                    </NavLink>
                </div>
                <div>
                    <NavLink className={styles.item}
                             activeClassName={styles.active}
                             to={"/settings"}>Settings
                    </NavLink>
                </div>
            </nav>
            <Sidebar friends={friends}/>
        </aside>

    )
}