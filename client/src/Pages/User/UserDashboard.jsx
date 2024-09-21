import React from 'react';
import './UserDashboard.css'

import Sidebar from './Components/Sidebar';
import DashHeader from './Components/DashHeader';
import DailySchedule from './Components/DailySchedule';
import Statistics from './Components/Statistics';
import Updates from './Components/Updates';

const UserDashboard = () => {
  return (
    <div className='dash-con'>
		<Sidebar/>

		<div className='dash-board'>
			<DashHeader/>
			<div className='dash-body'>
				<div className='two-col'>
					<DailySchedule/>
					<Statistics/>

				</div>
				<Updates/>
				
			</div>
		</div>

    </div>
  );
};

export default UserDashboard;
