import React from 'react'
import './Login.css'
import tour_set from '../Assets/tour_set_login.svg'
import logo from '../Assets/logo.svg'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
 

const Login = () => {
    return (
        <>
            <div className="mainCont">
                <div className="loginCont">

                    <form method="post" className='loginForm'>
                        <div className="header">
                            <div className="text">Login</div>
                            <p className='normaltext'>Enter your Account Details</p>
                        </div>

                        <div className="inputs">
                            <div className="input">
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className="input">
                                <input type="password" placeholder='Password' />
                            </div>
                        </div>

                        <Link to="/">Forget Password?</Link>
                        <button className='loginSubmit' type='submit'>Login</button>
                    </form>

                    <p className='normaltext' id='signupAcc'>Don't have an account? <Link to="/" className='signup'>Sign Up</Link></p>

                </div>


                <div className="logoCont">
                    <div>
                        <img src={logo} alt="" />
                        <h3 className='text'>Sign in to unlock</h3>
                        <p className='titletext'>best of Routier</p>
                    </div>
                    <img src={tour_set} alt="" className="tourSet" />
                </div>

                {/* for mobile view */}
                <div className="shortlogoCont">
                    <div>
                        <img src={logo} alt="" />
                        <h3 className='text'>Login to experience the</h3>
                        <p className='titletext'>best of Routier</p>
                    </div>
                </div>
               

            </div>
        </>
    );
}

export default Login;