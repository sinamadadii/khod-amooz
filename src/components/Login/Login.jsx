import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { login, loginUser } from '../../services/userService';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const reset = () => {
        setEmail('');
        setPassword('');
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const user = { email, password };

        try {

            const { status, data } = await loginUser(user);
            if (status === 200) {
                toast.success("ورود موفقیت آمیز بود.", {
                    position: "top-right",
                    closeOnClick: true
                });
                localStorage.setItem("token", data.token);
                reset();
            }

        } catch (ex) {
            console.log(ex);
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
        }
    };

    return (
        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit={handleSubmit} action="" method="">

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

                        <div className="remember-me">
                            <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                        </div>

                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>
    );
}

export default Login;