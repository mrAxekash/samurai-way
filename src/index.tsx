import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {ProviderContext, StoreContext} from "./StoreContext";


export const renderEntireTree = () => {
    console.log('rerender entiteTree')
    return (ReactDOM.render(
            <BrowserRouter>
                <ProviderContext store={store}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </ProviderContext>
            </BrowserRouter>, document.getElementById('root')
        )
    )
}

renderEntireTree()
store.subscribe(renderEntireTree)


//
//

// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );