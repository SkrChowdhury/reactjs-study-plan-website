import './StudyPlan.css';
import React from 'react';
import StudyCalculation from '../StudyCalculation/StudyCalculation';
import Subjects from '../Subjects/Subjects';

const StudyPlan = () => {
  return (
    <div className="study-plan-container">
      <div className="subjects">
        <Subjects></Subjects>
      </div>

      <div className="study-calculation">
        <StudyCalculation></StudyCalculation>
      </div>
    </div>
  );
};

export default StudyPlan;
