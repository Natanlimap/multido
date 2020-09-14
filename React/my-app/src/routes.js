import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './Views/Login';
import Mainpage from './Views/Mainpage';
import HomePage from './Views/PaginaInicial';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/mainpage' component={Mainpage}></Route>
            <Route exact path='/loginpage' component={LoginPage}></Route>

        </Switch>
    </BrowserRouter>
)

export default Routes;