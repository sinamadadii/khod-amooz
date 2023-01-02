import React from 'react';
import Courses from './components/common/Courses';
import MainLayout from './components/Layouts/MainLayout';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom'

const KhodAmooz = (props) => {
    return (
        <MainLayout>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' exact component={Courses} />
            </Switch>
        </MainLayout>

    );
}

export default KhodAmooz;