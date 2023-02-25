import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {RootReducersType} from "./redux/redux-store";
import {useSelector} from "react-redux";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { SidebarType } from './redux/sidebar-reducer';
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


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
            <HeaderContainer />

            <Navbar friends={sidebarState.bestFriend}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'}
                       component={ProfileContainer}
                />
                {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                <Route exact path={'/dialogs'}
                       component={DialogsContainer}
                />
                <Route exact path={'/users'} component={UsersContainer} />
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
