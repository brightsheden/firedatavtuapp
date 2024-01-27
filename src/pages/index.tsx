
import React from 'react'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurService from '@/components/OurService'
import WhyChooseUs from '@/components/WhyChooseUs'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
function index() {
  return (
   <>
   <Navbar/>
    <Hero/>
    <AboutUs/>
    <OurService/>
    <WhyChooseUs/>
    <Reviews/>
    <Faq/>
    <ContactUs/>
    <Footer/>

   </>
  )
}

export default index