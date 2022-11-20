import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, RootStateType} from "./redux/state";


export const renderEntireTree = (state: RootStateType) => {

    return (ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>, document.getElementById('root')
        )
    )
}