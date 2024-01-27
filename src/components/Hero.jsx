

const Hero = () => {
  return (
    <div>
      <section className="bg-primary  text-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Instant Data Plans at the cheapest price
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We offer you the most affordable and most cheapest data, airtime, Dstv, Gotv and Startimes subscription. Here is the right place for your Electricity subscription and also Convert your Airtime to Cash...



            </p>
           <div className="flex space-x-2 ">
           <a
              href="#"
              className="bg-white  text-primary inline-flex items-center justify-center px-5 py-3 text-base w-full font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-white hover:text-primary focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Get Started
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-gray-200 border border-gray-300 rounded-lg hover:bg-white hover:text-primary focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Login
            </a>
           </div>
          

            
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>
      <div className="container mx-auto bg-white flex flex-wrap justify-center items-center my-5 p-4">
      <div className="flex space-x-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src='https://myvtu.com/assets/img/clients/mtn.png' alt="MTN" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYYDf1lShHCM_QqLZ0jn-ki9uLvaUyoNYyXzMjbWoIg&s" alt="Glo" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src="https://myvtu.com/assets/img/clients/airtel-logo.png" alt="Airtel" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src="https://myvtu.com/assets/img/clients/9mobile.png" alt="9mobile" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src='https://myvtu.com/assets/img/clients/dstv_logo.png' alt="DSTV" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
          <img className="w-full" src='https://myvtu.com/assets/img/clients/gotv-logo.png' alt="GoTV" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
