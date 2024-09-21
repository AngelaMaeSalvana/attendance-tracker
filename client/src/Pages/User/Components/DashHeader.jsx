import React, { useEffect, useState } from 'react';
import '../UserDashboard.css';

const DashHeader = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };

      setCurrentDate(now.toLocaleDateString('en-US', dateOptions));
      setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className='header-con'>
      <div className='header-title'>
        <h1>Dashboard</h1>
        <p>{currentDate}</p> {/* Display current date */}
        <p>{currentTime}</p> {/* Display current time */}
      </div>
      <div className='header-user'>
        <img 
          src='https://www.icon0.com/free/static2/preview2/stock-photo-avatar-male-in-glasses-people-icon-character-cartoon-33223.jpg' 
          alt='User Avatar' 
        />
        <div className='user-profile'>
          <h4>Philip James B. Solana</h4> {/* Username */}
          <p>EMT</p> {/* Department */}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
