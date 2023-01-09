import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {RootReducersType} from "./redux/redux-store";
import {useSelector} from "react-redux";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { SidebarType } from './redux/sidebar-reducer';

// type AppType = {
//     state: RootStateType
//     dispatch: (action: AllActionTypes) => void
// }
// type AppType = {
//     store: StoreStateType
// }

const App = () => { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    const sidebarState = useSelector<RootReducersType, SidebarType>(state => state.sidebar)

    return (
        <div className={'app-wrapper'}>
            <Header/>

            <Navbar friends={sidebarState.bestFriend}/>
            <div className={'app-wrapper-content'}>
                <Route exact path={'/profile'}
                       render={() => <Profile/>}
                />
                {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                <Route exact path={'/dialogs'}
                       render={() => <DialogsContainer/>}
                />
                <Route exact path={'/news'} component={News}/>
                <Route exact path={'/music'} component={Music}/>
                <Route exact path={'/settings'} component={Settings}/>
            </div>
        </div>
        //<BrowserRouter> {/*BrowserRouter - обёртка для ссылок в документе. Применяется для работы компонент Route */}
//        </BrowserRouter>
    );
}

export default App;
