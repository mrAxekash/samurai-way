import {AllUsersStateType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import img from './img/pngtree-user-vector-avatar-png-image_1541962.jpg'

export const UsersFunctionComponent: React.FC<AllUsersStateType> = (props) => {

    const getUsers = () => {
        if (props.users.users.length === 0) {
            const promise: any = axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response => {
                        console.log(response.data.items)
                        props.setUsers(response.data.items)
                    })
                )
        }
    }


    return (
        <div>
            <h2>Users</h2>

            <button onClick={getUsers}>Get users</button>

            {props.users.users.map(u => {
                return (
                    <div key={u.id}>
                        <div className={style.usersContainer}>
                            <div>
                                <div>
                                    <img src={img} alt="avatar" className={style.usersAvatar}/>
                                </div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
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
};