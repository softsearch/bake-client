import React from 'react';
import './index.scss';

const LandingPage = () => (
  <div>
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Welcome to Flora</h1>
        <h3 className="mb-5">
          <em>It's fun whether it's baking bread or cookies. With baking, you have to be exact when it comes to ingredients </em>
        </h3>
        <a className="btn btn-primary btn-xl">Get started</a>
      </div>
      <div className="overlay" />
    </header>
  </div>
);

export default LandingPage;
