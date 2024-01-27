import Link from 'next/link'

import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-none md:justify-center relative">

      <div className="bg-white p-2 md:p-8 rounded sm:shadow-none md:shadow-md w-full sm:w-96 relative z-10">
        <div className='text-center mb-[70px]'>
          <h2 className='font-bold text-3xl text-primary'>Forgot Password?</h2>
          <span className='text-gray-500 font-bold text-sm tex-blue-800'>
            Enter your email address to reset your password.
          </span>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-none rounded-md bg-blue-100 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Reset Password
          </button>
        </form>
        <div className='text-center my-2 '>
          <span className='font-base   font-semibold'>
            Remember your password? <span className='font-bold text-primary'><Link href='/login'>Login</Link></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
