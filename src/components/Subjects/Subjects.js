import './Subjects.css';
import React from 'react';
const Subjects = ({ handleAddToList, subject }) => {
  const { subjectName, subjectDetails, time, img } = subject;

  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img
            srcSet={img}
            className="card-img-top srounded shadow-sm"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">{subjectName}</h5>
            <p className="card-text text-justify text-gray">
              {subjectDetails.slice(0, 110) + ' .. See More ..'}
            </p>
            <p className="card-text fw-bold">
              Time Required: {time} Minutes{' '}
            </p>

            <button
              onClick={() => handleAddToList(subject)}
              className="btn-add-to-list"
            >
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
