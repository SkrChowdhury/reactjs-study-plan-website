import './Blogs.css';

import React from 'react';

const Blogs = () => {
  return (
    <div className="mt-5">
      <h3 className="fs-4 fw-bold ms-lg-5 text-center text-lg-start">Blogs</h3>
      <div className="card p-5 mt-3 rounded-top ">
        <div className="card-horizontal shadow-lg">
          <div className="img-square-wrapper">
            <img
              className="img-fluid"
              srcSet="https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2021/09/01031030/ReactJS.png"
              alt=""
            ></img>
          </div>
          <div className="card-body">
            <h4 className="card-title">How Does React Works?</h4>
            <p className="card-text">
              <strong>Answer: </strong>
              <br />
              React uses a declarative paradigm that makes it easier to reason
              about your application and aims to be both efficient and flexible.
              It designs simple views for each state in your application, and
              React will efficiently update and render just the right component
              when your data changes.
            </p>
          </div>
        </div>

        <div className="card-horizontal shadow-lg mt-5">
          <div className="img-square-wrapper">
            <img
              className="img-fluid"
              srcSet="https://cdn.educba.com/academy/wp-content/uploads/2019/11/React-State-vs-Props-1.png.webp"
              alt=""
            ></img>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Differences between props and state in React?
            </h4>
            <p className="card-text">
              <strong>Answer: </strong>
              <br />
              <strong>State</strong> is the local state of the component which
              cannot be accessed and modified outside of the component. It's
              equivalent to local variables in a function.
              <br />
              <strong>Props</strong>, on the other hand, make components
              reusable by giving components the ability to receive data from
              their parent component in the form of props. They are equivalent
              to function parameters.
            </p>
          </div>
        </div>

        <div className="card-horizontal shadow-lg mt-5">
          <div className="img-square-wrapper">
            <img
              className="img-fluid"
              srcSet="https://daveceddia.com/images/useEffect-hook.png"
              alt=""
            ></img>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              Except data loading, where useEffect is used?
            </h4>
            <div className="card-text">
              <strong>Answer: </strong>
              <br />
              <p>useEffect use cases:</p>
              <ol>
                <li>Running on state change: validating input field</li>
                <li>Running on state change: live filtering</li>
                <li>Running on state change: live filtering</li>
                <li>
                  Running on props change: update paragraph list on fetched API
                  data update
                </li>
                <li>
                  Running on props change: updating fetched API data to get BTC
                  updated price
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
