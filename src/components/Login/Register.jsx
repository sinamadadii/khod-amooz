import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { register, registerr, registerUser } from './../../services/userService';


const Register = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const reset = () => {
        setFullname('');
        setEmail('');
        setPassword('');
    }

    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     // alert('submited')
    //     const user = {
    //         fullname,
    //         email,
    //         password
    //     }
    //     console.log('success');

    //     axios
    //         .post(`https://toplearnapi.ghorbany.dev/api/register`,
    //             JSON.stringify(user),
    //         )
    //         .then((result) => {
    //             console.log(result);
    //             return result
    //         }).catch((err) => {
    //             console.log(err);
    //             return err
    //         });
    // };
    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            fullname,
            email,
            password
        };

        try {

            const { status } = await registerUser(user);
            if (status === 201) {
                toast.success("کاربر با موفقیت ساخته شد.", {
                    position: "top-right",
                    closeOnClick: true
                });
                reset();
            }

        } catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
            console.log(ex);
        }
    };


    const [posts, setpost] = useState([]);

    return (


        <main className="client-page">
            <div className="container-content">
                {/* {posts.map((post, i) => (
                    <h2 key={i} ></h2>
                ))} */}
                <header><h2> عضویت در سایت </h2></header>

                <div className="form-layer">

                    <form action="" method="" onSubmit={handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="username"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}

                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}

                            />
                        </div>

                        <div className="accept-rules">
                            <label><input type="checkbox" name="" />  قوانین و مقررات سایت را میپذیرم </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                        </div>

                        <button className="btn btn-success" onClick={handleSubmit}> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>










    );
}

export default Register;