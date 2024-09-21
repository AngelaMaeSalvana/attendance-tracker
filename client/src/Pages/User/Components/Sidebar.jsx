import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className='nav-menu'>
        <a href='/user-dashboard' className={location.pathname === '/user-dashboard' ? 'active' : ''}>
          <i className='bx bx-home-alt'></i> 
        </a>
        <a href='/user-attendance' className={location.pathname === '/user-attendance' ? 'active' : ''}>
          <i className='bx bx-list-ul'></i> 
        </a>
        <a href='/user-class' className={location.pathname === '/user-class' ? 'active' : ''}>
          <i className='bx bx-user'></i> 
        </a>
        <a href='/user-notify' className={location.pathname === '/user-notify' ? 'active' : ''}>
          <i className='bx bxs-bell-ring'></i> 
        </a>
      </div>

      <div className='nav-user'>
        <a href='/user-settings' className={location.pathname === '/user-settings' ? 'active' : ''}>
          <i className='bx bxs-cog'></i> 
        </a>
        <a href='/user-logout' className={location.pathname === '/user-logout' ? 'active' : ''}>
          <i className='bx bx-log-out'></i> 
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
