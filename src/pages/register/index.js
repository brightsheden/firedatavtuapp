

import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-none md:justify-center bg-white md:bg-gray-100">
      <div className="bg-white p-2 md:p-8 rounded sm:shadow-none md:shadow-md w-full sm:w-96 ">
        <div className='text-center  mb-[70px]'>
            <h2 className='font-bold text-4xl'>Welcome!</h2>
            <p className='text-gray-500 font-bold ml-8 text-[12px]  w-[80%]'>Please provide the following details for your new account</p>
        </div>
        <form>

        <div className="mb-4">
          
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
            placeholder="Enter your username"
          />
        </div>
          <div className="mb-4">
          
            <input
              type="email"
              id="email"
              name="email"
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
         
          <button
            type="submit"
            className="btn w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
          <div className='text-center my-2 '>
            <span className='font-base text-gray-500  font-semibold'>Already have an account? <span className='font-bold'>Login</span></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
