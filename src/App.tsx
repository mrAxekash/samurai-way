import React from 'react';
import './App.css';

function App() { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>

    )
        ;
}

function Header() {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Messages</a>
        </div>
    )
}

function Technologies() {
    return (
        <div className="App">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )
}


export default App;
