import React from "react";
import style from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {BestFriendsType} from "../../redux/state";


type SidebarType = {
    friends: BestFriendsType[]
}
export const Sidebar: React.FC<SidebarType> = (props) => {
    let friendsLinks = props.friends.map(frd => {
        return (
            <NavLink key={frd.id} to={frd.src} className={style.sidebarUser}>
                <img src={frd.imageUrl} alt="avatar" className={style.avatar}/>
                <span>{frd.name}</span>
            </NavLink>
        )
    })
    return (
        <div className={style.sidebar}>
            <h2 className={style.sidebarTitle}>Friends</h2>
            <div className={style.sidebar_wrapper}>

                {friendsLinks}
            </div>

        </div>
    )
}