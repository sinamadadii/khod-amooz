import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {

    const perosn = () => {
        const res = axios
            // .get(`https://jsonplaceholder.typicode.com/posts`)
            .get(`http://localhost:4000/users`)
            .then((response) => {
                return response
            })
            .catch((err) => {
                return err.response
            })
        return res
    }
    const [posts, setpost] = useState([]);
    useEffect(() => {
        // console.log("object");
        perosn().then((response) => {
            if (response.status === 200) {
                setpost(response.data)
            }
            console.log(response.data);
            // console.log("obaject");
        })
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }, [])



    return (<section className="terms-items">
        <header>
            <h2> آخرین دوره های خودآموز </h2>
            <NavLink to="/archive"> مشاهده همه دوره ها </NavLink>
        </header>
        <div className="row">

            {posts.map((post, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                    <article>
                        <NavLink to="/course/1" className="img-layer"><img src="images/pic/1.jpg" /></NavLink>
                        <h2><NavLink to="/course/1"> fdd </NavLink></h2>
                        <span> رایگان </span>
                        <i>1:52:32</i>
                    </article>
                </div>

            ))}

        </div>
    </section>);
}

export default Courses;