import './Subject.css'

import React from 'react';

const Subject = () => {
    return (
      <div class="col">
        <div class="card">
          <img src="..." class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title fw-bold fs-4">Card title</h5>
            <p class="card-text text-justify">
              This is a longer card with supporting text below as a natural
            </p>
            <p class="card-text fs-5 fw-bold">Time Required:</p>

            <button className="btn-add-to-list">Add to List</button>
          </div>
        </div>
      </div>
    );
};

export default Subject;