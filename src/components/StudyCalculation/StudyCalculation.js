import './StudyCalculation.css';
import React from 'react';
import userImage from '../../user-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const StudyCalculation = () => {
  return (
    <div className="sidebar">
      <div className="user">
        <img className="w-25" src={userImage} alt="" />
        <div>
          <h5>Sakkar Chowdhury</h5>
          <p>Chattogram,Bangladesh</p>
        </div>
      </div>

      <p className="fs-5 fw-bold text-start">Add a Break</p>

      <div className="add-break">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              10m
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              20m
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              30m
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              40m
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="fs-5 fw-bold text-start">Study Details</p>

        <p className="time-style">Study Time : </p>
        <p className="time-style">Break Time: </p>
      </div>

      <button className="btn-study-complete">
        Study Completed
      </button>
    </div>
  );
};

export default StudyCalculation;
