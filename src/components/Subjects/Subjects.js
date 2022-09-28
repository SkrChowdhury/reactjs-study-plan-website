import './Subjects.css';
import logo from '../../logo.webp';
import React from 'react';
import Subject from '../Subject/Subject';

const Subjects = () => {
  return (
    <div>
      <div className='web-main'>
        <div className="web-name">
          <img src={logo} alt="" srcset="" />
          <h4>Study Plan</h4>
        </div>
        <p className="web-title">Select Todays Study Plan</p>
      </div>
      <Subject></Subject>
    </div>
  );
};

export default Subjects;
