import React from 'react';
import './index.css';
import {state, subscriber} from './redux/state'
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

subscriber(renderEntireTree)

renderEntireTree(state)


// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );