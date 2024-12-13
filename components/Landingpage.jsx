import React from 'react';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <div className="container mt-5">
      <h2>Welcome to Our App</h2>
      <p>Please choose an option:</p>
      <Link to="/login" className="btn btn-primary mr-2">Login</Link>
      <Link to="/signup" className="btn btn-secondary">Signup</Link>
    </div>
  );
}

export default Landingpage;
