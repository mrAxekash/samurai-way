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

type AppPropsType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
    postsData: PostsDataPropsType[]
    imageLink: string
}

export type DialogsDataPropsType = {
    id: string
    name: string
    isActive: boolean
}
export type MessagesDataPropsType = {
    id: string
    message: string
}
export type PostsDataPropsType = {
    id: string
    message: string
    likesCount: number
}

function App(props: AppPropsType) { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/

    const profileData = () => {
        return (
            <Profile postsData={props.postsData} imageLink={props.imageLink} />
        )
    }
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/profile'} render={ profileData }/>
                    {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                    <Route exact path={'/dialogs'} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
                    <Route exact path={'/news'} component={News} />
                    <Route exact path={'/music'} component={Music} />
                    <Route exact path={'/settings'} component={Settings} />
                </div>
            </div>
        </BrowserRouter>


        //<BrowserRouter> {/*BrowserRouter - обёртка для ссылок в документе. Применяется для работы компонент Route */}
//            <div className='app-wrapper'>
//                <Header/>
//                <Navbar/>
//                <div className={'app-wrapper-content'}>
//                    <Route exact path='/profile' component={Profile}/>
//                    <Route exact path='/dialogs' component={Dialogs}/>
//                    <Route path='/news' component={News}/>
//                    <Route path='/music' component={Music}/>
//                    <Route path='/settings' component={Settings}/>
//                    <Route />
//               </div>
//            </div>
//        </BrowserRouter>
    );
}

export default App;
