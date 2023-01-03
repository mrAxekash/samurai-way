import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {
    AllActionTypes, ProfilePageType,
    RootStateType, SidebarType, StoreStateType,
} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {RootReducersType, store} from "./redux/redux-store";
import {useSelector} from "react-redux";
import {StoreContext} from "./StoreContext";

// type AppType = {
//     state: RootStateType
//     dispatch: (action: AllActionTypes) => void
// }
// type AppType = {
//     store: StoreStateType
// }

const App = () => { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    console.log('App render')
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
                       render={() => <DialogsContainer />}
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
