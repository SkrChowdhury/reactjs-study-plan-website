import './Subjects.css';

import React from 'react';

const Subjects = (props) => {
  const { subjectName, subjectDetails, time, img } = props.subject;
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img srcSet={img} className="card-img-top rounded shadow-lg" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">{subjectName}</h5>
            <p className="card-text text-justify text-gray">
              {subjectDetails.slice(0, 110) + ' ... See More ...'}
            </p>
            <p className="card-text fs-5 fw-bold">
              Time Required: {time} hours{' '}
            </p>

            <button className="btn-add-to-list">Add to List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
