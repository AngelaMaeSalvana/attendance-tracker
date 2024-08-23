import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import '../../App.css'

import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import {AiOutlineSwapRight} from "react-icons/ai"
import ustp from '../../LoginAssets/ustp.jpg'
import ustplogo from '../../LoginAssets/ustplogo.png'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            {/* <div className="blob"></div> */}

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

                <form action="" className='form grid'>

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
        {/* <div className="blob2"></div> */}
    </div>
    
  )
}

export default Login