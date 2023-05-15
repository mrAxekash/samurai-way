import * as React from 'react';
import {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    userStatus: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusFC = (props: ProfileStatusPropsType) =>  {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.userStatus)

    useEffect(() => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    // в объекте для изменения стейта внутри объекта есть метод setState. Сам метод асинхронен, т.е. снаачла отработает функция, и отправит данные для изменения стейта в event loop. Затем, когда цикл дойдёт до выполнения этой задачи, выполнится функция, что приведет к изменению данных, и начнётся перерисовка React-ом приложения.

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode =  () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    //     let state = this.state.status
    //     if(this.props.userStatus !== prevProps.userStatus) {
    //         this.setState({
    //             status: this.props.userStatus
    //         })
    //     }
    // }

        return (
            <div>
                {!editMode && <div>
                    <span
                        onDoubleClick={activateMode}
                        >
                        {props.userStatus || '----------'}
                    </span>
                </div>}

                {editMode && <div>
                    <input
                        onBlur={deactivateMode}
                        autoFocus
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>}
            </div>
        )
};