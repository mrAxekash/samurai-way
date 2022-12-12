import React from 'react';
import './index.css';
import {store} from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const renderEntireTree = () => {
    console.log('I am rendered')
    return (ReactDOM.render(
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>, document.getElementById('root')
        )
    )
}

renderEntireTree()
store.subscriber(renderEntireTree)

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );