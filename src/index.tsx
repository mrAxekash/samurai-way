import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";



export const renderEntireTree = () => {
    console.log('rerender entiteTree')
    return (ReactDOM.render( <SamuraiJSApp />, document.getElementById('root')
        )
    )
}

renderEntireTree()
