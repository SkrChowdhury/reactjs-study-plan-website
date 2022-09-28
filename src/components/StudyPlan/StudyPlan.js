import './StudyPlan.css';
import React from 'react';

import StudyCalculation from '../StudyCalculation/StudyCalculation';
import Subjects from '../Subjects/Subjects';

const StudyPlan = () => {
  return (
    <div>

      <div className="study-plan-container">
        <div className="subjects row row-cols-1 row-cols-md-3 g-4">
          <Subjects></Subjects>
        </div>

        <div className="study-calculation">
          <StudyCalculation></StudyCalculation>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
