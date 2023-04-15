import * as React from 'react';


type ProfileStatusPropsType = {
    userStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    // в классовой компоненте есть свое свойство stste для хранения данных внутри классовой компоненты
    state = {
        editMode: false,
    }

    // в объекте для изменения стейта внутри объекта есть метод setState. Сам метод асинхронен, т.е. снаачла отработает функция, и отправит данные для изменения стейта в event loop. Затем, когда цикл дойдёт до выполнения этой задачи, выполнится функция, что приведет к изменению данных, и начнётся перерисовка React-ом приложения.
    activateMode = () => {
        debugger
        console.log('this', this)
        this.setState({                           // setState works asynchony
            editMode: true
        })
    }

    deactivateMode () {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode ?  <div>
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.props.userStatus}</span>
                </div> : <div>
                    <input onBlur={this.deactivateMode.bind(this)} autoFocus value={this.props.userStatus}/>
                </div>}
            </div>
        );
    }

};