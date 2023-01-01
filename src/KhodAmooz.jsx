import React from 'react';
import Courses from './components/common/Courses';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import MainNav from './components/common/MainNav';
import TopNav from './components/common/TopNav';

const KhodAmooz = (props) => {
    return (
        <React.Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">
                    <Courses />
                </div>
            </main>

            <Footer />

        </React.Fragment>
    );
}

export default KhodAmooz;