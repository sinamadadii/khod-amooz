import React from 'react';

const Header = () => {
    return (
        <React.Fragment>

            <header>
                <a href="" className="logo"><img src="images/logo.png" alt='' /></a>
                <h2> باخودآموز </h2>
                <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
            </header>
            <div className="search-form">
                <form>
                    <input type="text" name="" placeholder="چی دوست داری یاد بگیری ؟" />
                    <button><i className="zmdi zmdi-search"></i></button>
                </form>

            </div>
        </React.Fragment>
    );
}

export default Header;