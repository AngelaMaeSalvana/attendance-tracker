import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import ustp from '../Assets/ustp.jpg';
import ustplogo from '../Assets/ustplogo.png';
import {jwtDecode} from 'jwt-decode';

const Login = ({ setUserRole }) => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = document.getElementById('userid').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:5002/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, password }),
            });

            const data = await response.json();

            if (response.ok) {
                const decodedToken = jwtDecode(data.token);
                setUserRole(decodedToken.role); // Set user role based on token
                localStorage.setItem('token', data.token);

                // Redirect based on user role
                if (decodedToken.role === 'admin') {
                    navigate('/admin-dashboard');
                } if (decodedToken.role === 'instructor') {
                    navigate('/user-dashboard');
                }
            } else {
                alert(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className='loginPage flex'>
            <div className="container flex">
                <div className="imgDiv">
                    <img src={ustp} alt="" />
                    <div className="logoImg">
                        <img src={ustplogo} alt="" />
                    </div>
                    <div className="textDiv">
                        <h2 className="title">Attendance Tracker</h2>
                        <p>Automate and Manage Class Attendance</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Don't have an account?</span>
                        <Link to={'/register'}> <button className='btn'>Request</button></Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <h1>Welcome!</h1>
                    </div>

                    <form onSubmit={handleSubmit} className='form grid'>
                        <div className="inputDiv">
                            <label htmlFor="userid">User ID</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='userid' placeholder='User ID' />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' placeholder='Password' />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Log In</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        <a href='' className='forgotPass'>Forgot Password?</a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
