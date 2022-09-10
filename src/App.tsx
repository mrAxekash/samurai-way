import React from 'react';
import './App.css';
import { Technologies } from './Technologies.';
import { Header } from './Header';

function App() { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>

    )
        ;
}

export default App;
