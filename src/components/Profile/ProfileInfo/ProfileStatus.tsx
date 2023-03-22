import * as React from 'react';


type ProfileStatusPropsType = {
    userStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
    }

    activateMode () {
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