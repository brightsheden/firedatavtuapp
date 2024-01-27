// Login.js

import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-none md:justify-center bg-white md:bg-gray-100">
      <div className="bg-white p-2 md:p-8 rounded sm:shadow-none md:shadow-md w-full sm:w-96 ">
        <div className='text-center  mb-[70px] text-primary'>
            <h2 className='font-bold text-4xl'>Welcome!</h2>
            <span className='text-blue-800 font-bold text-sm'>Sign in to continue</span>
        </div>
        <form>
          <div className="mb-4">
          
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
           
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <div className='flex justify-between my-4'>
            <div className='space-x-2'>
            <input type='checkbox'/> <label>Remember me</label>
            </div>
          
            <span className='text-sm font-medium text-gray-500 link'>Forget password?</span>
          </div>
          <button
            type="submit"
            className="btn w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
          <div className='text-center my-2 '>
          
            <span className='font-base text-gray-500  font-semibold'>Dont have an account yet?  <span className='font-bold'>Sign Up</span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
