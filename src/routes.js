import React from 'react';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Create from './components/Create/Create';
import {Switch, Route, } from 'react-router-dom';
import Register from './components//SignUp/Register';

export default (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/create' component={Create}/>
        <Route path='/register' component={Register}/>
    </Switch>
)