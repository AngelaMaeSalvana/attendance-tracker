import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import '../../App.css';

import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import ustp from '../Assets/ustp.jpg';
import ustplogo from '../Assets/ustplogo.png';

const Register = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the data to the admin (e.g., API call)
    console.log({ userId, name, email, department });
  };

  return (
    <div className='registerPage flex'>
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
                    <span className="text">Already have an account?</span>
                    <Link to={'/login'}><button className='btn'>Log In</button></Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <h1>Request an Account</h1>
                </div>

                <form onSubmit={handleSubmit} className='form grid'>
                    <div className="inputDiv">
                        <label htmlFor="userid">User ID</label>
                        <div className="input flex">
                            <FaUserShield className='icon' />
                            <input 
                                type="text" 
                                id='userid' 
                                placeholder='User ID' 
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="name">Full Name</label>
                        <div className="input flex">
                            <input 
                                type="text" 
                                id='name' 
                                placeholder='Full Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <input 
                                type="email" 
                                id='email' 
                                placeholder='Email Address' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="department">Department</label>
                        <div className="input flex">
                            <input 
                                type="text" 
                                id='department' 
                                placeholder='Department' 
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Request</span>
                        <AiOutlineSwapRight className='icon' />
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Register;
