import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {SamuraiJSApp} from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const renderEntireTree = () => {
    console.log('rerender entiteTree')
    return (ReactDOM.render( <SamuraiJSApp />, document.getElementById('root')
        )
    )
}

renderEntireTree()
// store.subscribe(renderEntireTree)
