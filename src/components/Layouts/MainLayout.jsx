import React, { useEffect, useState } from 'react';
import MainNav from './../common/MainNav';
import Footer from './../common/Footer';
import TopNav from './../common/TopNav';
import Header from './../common/Header';
import { withRouter } from 'react-router-dom'
import Archive from './../common/Archive';
import Course from './../common/Course';

const MainLayout = (props) => {
    const { pathname } = props.location;
    return (
        <React.Fragment>
            <div className="landing-layer">
                <div className="container">

                    <TopNav />

                    {pathname === '/' ? <Header /> : null}
                    {/* <Header /> */}
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">
                    {props.children}
                    {pathname === '/archive' ? <Archive /> : null}
                    {pathname === '/course' ? <Course /> : null}
                </div>
            </main>

            <Footer />

        </React.Fragment>

    );
}

export default withRouter(MainLayout);