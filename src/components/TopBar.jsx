'use client'
import {  useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";



const TopBar = ({ title }) => {

 const router = useRouter()
  const handleBack  = ()=>{
    router.back()

  }

    return(

        
  <div className=" md:hidden bg-primary text-white fixed top-0 left-0 right-0 h-16 flex  items-center px-4 shadow-md">
  <button className="text-lg mr-4 hover:opacity-70 " onClick={handleBack}>
   <FaArrowLeft className=""/>
   
  </button>
  <h1 className="text-lg font-bold">{title}</h1>
</div>
    )

    };

export default TopBar;