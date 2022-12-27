import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const renderEntireTree = () => {
    return (ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App state={store.getState()}
                         dispatch={store.dispatch.bind(store)}
                    />
                </Provider>

            </BrowserRouter>, document.getElementById('root')
        )
    )
}

renderEntireTree()
store.subscribe(renderEntireTree)

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );