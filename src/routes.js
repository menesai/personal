import React from 'react';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Create from './components/Create/Create';
import {Switch, Route} from 'react-router-dom';
import Register from './components//SignUp/Register';
import Details from './components/Home/HomeComp/Details';
import Application from './components/Home/Application/Application'

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/create' component={Create}/>
        <Route path='/register' component={Register}/>
        <Route path='/projects/:id' component={Details}/>
        <Route path='/application/:id' component={Application}/>
    </Switch>
)