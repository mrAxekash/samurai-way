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
    AllActionTypes,
    RootStateType,
} from "./redux/state";

type AppType = {
    state: RootStateType
    dispatch: (action: AllActionTypes) => void
}

const App: React.FC<AppType> = (props) => { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friends={props.state.sidebar.bestFriend}/>
            <div className={'app-wrapper-content'}>
                <Route exact path={'/profile'}
                       render={() => <Profile profileState={props.state.profilePage}
                                              dispatch={props.dispatch}
                       />}/>
                {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                <Route exact path={'/dialogs'}
                       render={() => <Dialogs
                           dialogsData={props.state.dialogsPage}
                           dispatch={props.dispatch}
                       />}/>
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
