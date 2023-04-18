import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Redirect, Route} from "react-router-dom";
import {RootReducersType} from "./redux/redux-store";
import {useSelector} from "react-redux";
//import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { SidebarType } from './redux/sidebar-reducer';
//import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    const sidebarState = useSelector<RootReducersType, SidebarType>(state => state.sidebar)


    return (
        <div className={'app-wrapper'}>

            <HeaderContainer />

            <Navbar friends={sidebarState.bestFriend}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'}
                       component={ProfileContainer}
                />
                {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                <Route exact path={'/dialogs'}
                       component={Dialogs}
                />
                <Route exact path={'/users'} component={UsersContainer} />
                <Route exact path={'/news'} component={News}/>
                <Route exact path={'/music'} component={Music}/>
                <Route exact path={'/settings'} component={Settings}/>
                <Route exact path={'/login'} component={Login}/>
            </div>
        </div>
        //<BrowserRouter> {/*BrowserRouter - обёртка для ссылок в документе. Применяется для работы компонент Route */}
//        </BrowserRouter>
    );
}

export default App;
