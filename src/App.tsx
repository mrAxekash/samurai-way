import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPost: (newPost: string) => void
}

const App: React.FC<AppType> = (props) => { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friends={props.state.sidebar.bestFriend}/>
            <div className={'app-wrapper-content'}>
                <Route exact path={'/profile'}
                       render={() => <Profile postsData={props.state.profilePage.posts}
                                              imageLink={props.state.profilePage.imageLink}
                                              addPost={props.addPost}/>}/>
                {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                <Route exact path={'/dialogs'}
                       render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                              messages={props.state.dialogsPage.messages}/>}/>
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
