import './StudyPlan.css';
import React, { useEffect, useState } from 'react';
import logo from '../../logo.webp';
import StudyCalculation from '../StudyCalculation/StudyCalculation';
import Subjects from '../Subjects/Subjects';
import Blogs from '../Blogs/Blogs';

const StudyPlan = () => {
  const [subjects, setSubjects] = useState([]);
  const [studyTimes, setStudyTimes] = useState([]);
  useEffect(() => {
    fetch('subjects.json')
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const handleAddToList = (subject) => {
    const newStudyTimes = [...studyTimes, subject];
    setStudyTimes(newStudyTimes);
  };

  return (
    <div>
      <div className="web-main">
        <div className="web-name">
          <img srcSet={logo} alt="" />
          <h4>Study Plan</h4>
        </div>
        <p className="web-title text-center text-lg-start ms-lg-5 mt-3 mb-0">
          Select Todays Study Plan
        </p>
      </div>
      <div className="study-plan-container">
        <div className="subjects row row-cols-1 row-cols-md-3 g-4">
          {subjects.map((subject) => (
            <Subjects
              key={subject.id}
              subject={subject}
              handleAddToList={handleAddToList}
            ></Subjects>
          ))}
        </div>

        <div className="study-calculation">
          <StudyCalculation studyTimes={studyTimes}></StudyCalculation>
        </div>
      </div>
      <Blogs></Blogs>
    </div>
  );
};

export default StudyPlan;
