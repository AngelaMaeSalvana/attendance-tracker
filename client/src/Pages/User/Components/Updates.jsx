import React from 'react';

const Updates = ({ presentCount, lateCount, absentCount, droppedCount, excusedCount }) => {
  return (
    <div className='up-con'>
      <h2>Updates</h2>
      <div className='attendance-summary'>
        <div className='attendance-item present'>
          <h3>Present</h3>
          <p>{presentCount}</p>
        </div>
        <div className='attendance-item late'>
          <h3>Late</h3>
          <p>{lateCount}</p>
        </div>
        <div className='attendance-item absent'>
          <h3>Absent</h3>
          <p>{absentCount}</p>
        </div>
        <div className='attendance-item dropped'>
          <h3>Dropped</h3>
          <p>{droppedCount}</p>
        </div>
        <div className='attendance-item excused'>
          <h3>Excused Absences</h3>
          <p>{excusedCount}</p>
        </div>
      </div>
    </div>
  );
};

// Default props in case no values are passed
Updates.defaultProps = {
  presentCount: 50,
  lateCount: 5,
  absentCount: 3,
  droppedCount: 1,
  excusedCount: 2,
};

export default Updates;
