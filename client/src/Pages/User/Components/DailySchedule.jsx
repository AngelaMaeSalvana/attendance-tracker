import React, { useEffect, useState } from 'react';

const DailySchedule = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTime(now.toLocaleTimeString([], options));
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const schedule = [
    { time: '8:00 AM', subject: 'Mathematics', duration: 90 }, // Duration in minutes
    { time: '9:30 AM', subject: 'English', duration: 90 },
    { time: '11:00 AM', subject: 'Science', duration: 60 },
    { time: '1:00 PM', subject: 'History', duration: 60 },
    { time: '7:37 PM', subject: 'Physical Education', duration: 60 },
  ];

  const convertToMinutes = (timeString) => {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = (hours % 12) * 60 + minutes; // Convert to minutes
    if (period === 'PM') totalMinutes += 12 * 60; // Adjust for PM
    return totalMinutes;
  };

  const currentTimeInMinutes = convertToMinutes(currentTime);

  return (
    <div className='sched-con'>
      <h2>Today's Schedule</h2>
      <div className='sched'>
        {schedule.map((item, index) => {
          const startTimeInMinutes = convertToMinutes(item.time);
          const endTimeInMinutes = startTimeInMinutes + item.duration;

          let status;
          if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
            status = 'Ongoing'; // Currently in this class
          } else if (currentTimeInMinutes >= endTimeInMinutes) {
            status = 'Completed'; // Class has ended
          } else {
            status = 'Upcoming'; // Class has not started yet
          }

          return (
            <div key={index} className={`schedule-item ${status.toLowerCase()}`}>
              <span className="indicator">{status === 'Ongoing' ? '⏳' : status === 'Completed' ? '✅' : '🔜'}</span>
              <span className="time">{item.time}</span> - 
              <span className="subject">{item.subject}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailySchedule;
