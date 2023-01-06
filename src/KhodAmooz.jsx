import React from 'react';
import Courses from './components/common/Courses';
import MainLayout from './components/Layouts/MainLayout';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom'
import Register from './components/Login/Register';
import Archive from './components/common/Archive';
import Course from './components/common/Course';
const KhodAmooz = (props) => {
    return (
        <MainLayout>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/archive' component={Archive} />
                <Route path='/course' component={Course} />
                <Route path='/' exact component={Courses} />
            </Switch>
        </MainLayout>

    );
}

export default KhodAmooz;