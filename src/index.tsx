import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const renderEntireTree = () => {
    console.log('rerender entiteTree')
    return (ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>, document.getElementById('root')
        )
    )
}

renderEntireTree()
// store.subscribe(renderEntireTree)
