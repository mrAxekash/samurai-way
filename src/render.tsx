import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./redux/state";


export const renderEntireTree = (state: RootStateType) => {

    return (ReactDOM.render(
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>, document.getElementById('root')
        )
    )
}