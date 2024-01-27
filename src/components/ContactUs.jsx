'use clients'


import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';


import { FaLocationPin } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';


const ContactUsSection = () => {
  return (
    <section id='contact' className="bg-purple-200 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Container 1: Farewell Message with Social Media Icons */}
          <div className="mb-8 md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Farewell Message</h3>
            <p className="text-gray-700 mb-4">
              Thank you for considering us. Feel free to connect with us on social media for the latest updates and news.
            </p>
            {/* Add social media icons here */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-700 hover:text-blue-700 text-xl">
                <FaFacebook/>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-700 text-xl">
                <FaTwitter/>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-700 text-xl">
               <FaInstagram/>
              </a>
           
            </div>
          </div>

          {/* Container 2: Location Details */}
          <div className="mb-8 md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="text-gray-700 mb-2">
                <ul className='space-y-8'>
                    <li className='flex items-center space-x-2'> <FaLocationPin className='text-4xl text-white bg-primary p-2 shadow-md rounded-md'/> 
                    <span className='text-xl'> Abuja Fct Nigeria</span></li>
                    <li className='flex items-center space-x-2'><FaPhone  className='text-4xl text-white bg-primary p-2 shadow-md rounded-md'/> <a className='text-xl link' href='tel:+2349015096067'> +234 (09015096067)</a></li>
                    <li className='flex items-center space-x-2'><MdMail  className='text-4xl text-white bg-primary p-2 shadow-md rounded-md'/> <a href='mailto:info.firedata@gmail.com' className='text-xl link'> info.firedata@gmail.com</a></li>
                </ul>
            </p>
           
           
          </div>

          {/* Container 3: Contact Form */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            {/* Add your contact form component here */}
            <form>
              {/* Your form fields go here */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message:</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 p-2 rounded-md"></textarea>
              </div>
              <div className="border-2 w-full">
              <button type="submit" className="btn bg-primary w-full text-white px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
