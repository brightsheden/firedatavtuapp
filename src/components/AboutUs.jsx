import React from 'react'

function AboutUs() {
  return (
    <div id='about'>
          <section className="bg-gray-100 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
            <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            ABOUT US
          </h2>
          <p className="text-md md:text-xl lg:text-2xl text-gray-700 max-w-prose text-start mb-8">
            FireData is a cutting-edge web and mobile platform offering a diverse range of services including internet data bundles, VTU Airtime, and utility bill payments such as electricity bills and TV subscriptions.
          </p>
          <p className="text-md md:text-xl lg:text-2xl text-gray-700 max-w-prose text-start mb-8">
            At FireData, we've meticulously designed our platform to cater to the diverse needs of our users. Our goal is to provide a cost-effective, fast, secure, efficient, and rewarding experience for purchasing and paying bills.
          </p>
          <p className="text-md md:text-xl lg:text-2xl text-gray-700 max-w-prose text-start mb-8">
            Whether you're using Android, iPhone, computers, modems, or any other device, our internet and mobile data plans are compatible. Plus, enjoy the flexibility of data rollover when you re-subscribe before the expiry date of your current plan.
          </p>
            </div>
         
          <img
            className="w-full max-w-lg mx-auto rounded-lg shadow-md"
            src="https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?w=740&t=st=1705576170~exp=1705576770~hmac=ffc8e0d19590bd06f438fbba14f43b304090c17900b503de471658262be52c26"
            alt="About Us Image"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default AboutUs