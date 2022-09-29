import './StudyCalculation.css';
import React from 'react';
import userImage from '../../user-image.png';

const StudyCalculation = (props) => {
  const { studyTimes } = props;

  let totalStudyTime = 0;
  for (const breakTime of studyTimes) {
    totalStudyTime = totalStudyTime + breakTime.time;
  }
  return (
    <div className="sidebar">
      <div className="user">
        <img className="w-25" srcSet={userImage} alt="" />
        <div>
          <h5>Sakkar Chowdhury</h5>
          <p>Chattogram,Bangladesh</p>
        </div>
      </div>

      <p className="fs-5 fw-bold text-start">Add a Break</p>

      <div className="add-break">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              10m
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              20m
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              30m
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              40m
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="fs-5 fw-bold text-start">Study Details</p>
        <p className="time-style">Selected Subjects: {studyTimes.length} </p>

        <p className="time-style">Study Time :{totalStudyTime} Minutes </p>
        <p className="time-style">Break Time: </p>
      </div>

      <button className="btn-study-complete">Study Completed</button>
    </div>
  );
};

export default StudyCalculation;
