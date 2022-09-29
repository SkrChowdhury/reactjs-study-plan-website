import './StudyCalculation.css';
import React, { useEffect, useState } from 'react';
import userImage from '../../user-image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudyCalculation = (props) => {
  const { studyTimes } = props;

  const notify = () => toast.success('Congratulations! Study Completed!');

  let totalStudyTime = 0;
  for (const breakTime of studyTimes) {
    totalStudyTime = totalStudyTime + breakTime.time;
  }

  const [breakTimes, setBreakTimes] = useState(0);
  const breakTimeShow = (e) => {
    const breakTime = e.target.innerHTML;
    localStorage.setItem('break-time', JSON.stringify(breakTime));
    setBreakTimes(breakTime);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('break-time'));
    if (items) {
      setBreakTimes(items);
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="user">
        <img className="w-25" srcSet={userImage} alt="" />
        <div>
          <h5>Sakkar Chowdhury</h5>
          <p>Chattogram,Bangladesh</p>
        </div>
      </div>

      <p className="fs-5 fw-bold text-start">Add a Break (Minutes)</p>

      <div className="add-break">
        <ul className="nav justify-content-center">
          <li onClick={breakTimeShow} className="nav-item">
            <a className="nav-link" aria-current="page">
              10
            </a>
          </li>
          <li onClick={breakTimeShow} className="nav-item">
            <a className="nav-link">20</a>
          </li>
          <li onClick={breakTimeShow} className="nav-item">
            <a className="nav-link">30</a>
          </li>
          <li onClick={breakTimeShow} className="nav-item">
            <a className="nav-link">40</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="fs-5 fw-bold text-start">Study Details</p>
        <p className="time-style">Selected Subjects : {studyTimes.length} </p>

        <p className="time-style">Study Time : {totalStudyTime} Minutes </p>
        <p className="time-style">Break Time: {breakTimes} Minutes</p>
      </div>

      <button onClick={notify} className="btn-study-complete">
        Study Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default StudyCalculation;
