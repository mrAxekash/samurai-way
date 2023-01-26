import React from 'react'
import style from "./users.module.css";
import img from "./img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import {AllUsersStateType} from "./UsersContainer";
import axios from "axios";
import {RootReducersType} from "../../redux/redux-store";
import {UserStateType} from "../../redux/users-reducer";

class UsersClass extends React.Component<AllUsersStateType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response => {
                        this.props.setUsers(response.data.items)
                    }
                )
            )
    }


    render() {
        return (
            <div>
                <h2>Users</h2>

                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {this.props.users?.users.map((u: UserStateType) => {
                    return (
                        <div key={u.id}>
                            <div className={style.usersContainer}>
                                <div>
                                    <div>
                                        <img src={img} alt="avatar" className={style.usersAvatar}/>
                                    </div>
                                    {u.followed ?
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button> :
                                        <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>}
                                </div>
                                <div className={style.usersContainer}>
                                    <div>
                                        <h3>{u.name}</h3>
                                        <span>{u.status}</span>
                                    </div>
                                    <div>
                                        <div>{'u.location.country'}</div>
                                        <div>{'u.location.city'}</div>

                                    </div>
                                </div>

                            </div>
                            <span>

                        </span>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UsersClass