import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {

    return (<section className="terms-items">
        <header>
            <h2> آخرین دوره های خودآموز </h2>
            <NavLink to="/archive"> مشاهده همه دوره ها </NavLink>
        </header>
        <div className="row">

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/1.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> رایگان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/2.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> رایگان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/3.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> 150.000 تومان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/4.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> رایگان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/5.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> 15.000 تومان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/6.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> رایگان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/7.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> 20.000 تومان </span>
                    <i>1:52:32</i>
                </article>
            </div>


            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                <article>
                    <NavLink to="/course" className="img-layer"><img src="images/pic/8.jpg" /></NavLink>
                    <h2><NavLink to="/course"> آموزش متریال دیاین در زامارین </NavLink></h2>
                    <span> 75.000 تومان </span>
                    <i>1:52:32</i>
                </article>
            </div>

        </div>
    </section>);
}

export default Courses;