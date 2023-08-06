import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {RootReducersType, store} from "./redux/redux-store";
import {connect, Provider} from "react-redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import Dialogs from "./components/Dialogs/DialogsContainer";
import {compose} from "redux";
import {Preloader} from "./components/common/preloader/Preloader";
import {initialised} from "./redux/app-reducer";
import {WithSuspens} from "./hoc/withSuspens";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";



type AllAppActionsType = mapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: RootReducersType) => ({
    isAuthorised: state.app.isAuthorised
})

type mapDispatchToPropsType = {
    initialisedApp: () => void
}
type MapStateToPropsType = {
    isAuthorised: boolean
}

const  ProfileContainer =  React.lazy(() => import('./components/Profile/ProfileContainer'));;
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component<AllAppActionsType> {

    componentDidMount() {
        this.props.initialisedApp()
    }

    render() { /*функция-компонента, которая возвращает разметку HTML. Компонента не вызывается через ()*/

        if(!this.props.isAuthorised) return <Preloader />

        return (
            <div className={'app-wrapper'}>

                <HeaderContainer/>

                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           component={ WithSuspens(ProfileContainer)}
                    />
                    {/*// передаём название компоненты, которая будет отрисовываться на основании ссылок (NavLink)*/}
                    <Route exact path={'/dialogs'}
                           component={WithSuspens(Dialogs)}
                    />
                    <Route exact path={'/users'} component={WithSuspens(UsersContainer)}/>
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
}

const AppContainer = compose(
    //withRouter,
    connect(mapStateToProps, {initialisedApp: initialised} )) (App) ;

export const SamuraiJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}
