import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainpage from './Views/Mainpage';
import HomePage from './Views/PaginaInicial';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/mainpage' component={Mainpage}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;