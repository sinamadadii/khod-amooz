import React from 'react';

const Header = () => {
    return (<div className="landing-layer">
        <div className="container">
            <nav>
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <ul>
                            <li>
                                <a href=""> همکاری در فروش </a>
                                <a href=""> درباره ما </a>
                                <a href=""> تماس با ما </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <div className="clientarea">
                            <div className="loggein ">
                                <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                            </div>
                            <div className="signin hidden">
                                <i className="zmdi zmdi-account"></i>
                                <a href=""> ورود </a> /
                                <a href=""> عضویت </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <a href="" className="logo"><img src="images/logo.png" /></a>
                <h1> با اساتید مجرب و کارآزموده در خودآموز </h1>
                <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
                <h3> با کمترین هزینه خودت یاد بگیر </h3>
            </header>
            <div className="search-form">
                <form>
                    <input type="text" name="" placeholder="چی دوست داری یاد بگیری ؟" />
                    <button><i className="zmdi zmdi-search"></i></button>
                </form>
            </div>
        </div>
    </div>);
}

export default Header;