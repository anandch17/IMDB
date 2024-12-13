// src/Login.js
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-600 mb-2">Username</label>
          <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your username" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Login</button>
      </form>
    </div>
  );
};

export default Login;
