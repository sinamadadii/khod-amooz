import React from 'react';
import Courses from './components/common/Courses';
import MainLayout from './components/Layouts/MainLayout';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom'
import Register from './components/Login/Register';

const KhodAmooz = (props) => {
    return (
        <MainLayout>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/' exact component={Courses} />
            </Switch>
        </MainLayout>

    );
}

export default KhodAmooz;