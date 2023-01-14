import {AllUsersStateType} from "./UsersContainer";
import style from './users.module.css'

export const Users: React.FC<AllUsersStateType> = (props) => {
    if (props.users.users.length === 0) {
        props.setUsers([
            { id: 1, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Alexandr', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss' },
            { id: 2, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: true, fullname: 'Karina', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
            { id: 3, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Ilya', location: {country: 'Belarus', city: 'Minsk'}, status: 'I am a boss too' },
            { id: 4, avatar: 'https://www.vokrug.tv/pic/product/b/5/d/1/b5d17062ea05487b643b631114a09845.jpeg', followed: false, fullname: 'Dmitry', location: {country: 'Poland', city: 'Varshava'}, status: 'I am a boss too' }
        ])
    }
    return (
        <div>
            <h2>Users</h2>

            {props.users.users.map(u => {
                return (
                    <div key={u.id}>
                        <div className={style.usersContainer}>
                            <div>
                                <div>
                                    <img src={u.avatar} alt="avatar" className={style.usersAvatar}/>
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
                                    <h3>{u.fullname}</h3>
                                    <span>{u.status}</span>
                                </div>
                                <div>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>

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