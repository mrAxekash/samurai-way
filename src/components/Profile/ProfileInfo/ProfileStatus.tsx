import * as React from 'react';
import {ChangeEvent} from "react";


type ProfileStatusPropsType = {
    userStatus: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    // в классовой компоненте есть свое свойство state для хранения данных внутри классовой компоненты
    state = {
        editMode: false,
        status: this.props.userStatus
    }

    // в объекте для изменения стейта внутри объекта есть метод setState. Сам метод асинхронен, т.е. снаачла отработает функция, и отправит данные для изменения стейта в event loop. Затем, когда цикл дойдёт до выполнения этой задачи, выполнится функция, что приведет к изменению данных, и начнётся перерисовка React-ом приложения.
    activateMode = () => {
        this.setState({                           // setState works asynchony
            editMode: true
        })
    }

    deactivateMode =  () => {
        this.props.updateUserStatus(this.state.status)
        this.setState({
            editMode: false
        })

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?  <div>
                    <span onDoubleClick={this.activateMode}>{this.props.userStatus}</span>
                </div> : <div>
                    <input
                        onBlur={this.deactivateMode}
                        autoFocus
                        value={this.state.status}
                        onChange={this.onStatusChange}/>
                </div>}
            </div>
        );
    }

};