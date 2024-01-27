import Link from 'next/link'
import React, { useState } from 'react'
import {FaArrowDown, FaArrowUp, FaEye, FaEyeDropper, FaGraduationCap, FaLightbulb, FaMessage, FaMoneyBill, FaMoneyBillWave, FaNairaSign, FaNetworkWired, FaPhone, FaPlus, FaPrint, FaReceipt, FaSimCard, FaTrash, FaTv, FaUser, FaWifi} from 'react-icons/fa6'

export default function index() {
  const [showBalance,setShowBalance] = useState(true)


  const showButtonhandler = ()=>setShowBalance(!showBalance)
  return (
    <div   className='min-h-screen'>
    
      <div className='bg-primary p-4 rounded-b-lg '>
        <div className='flex items-center justify-between'>
          <div className=' '>
            <span className='text-sm text-gray-50 flex items-center space-x-1'>Available Balance  <FaEye className='ml-1' onClick={showButtonhandler}/></span>
            <p className='flex items-center space-x-1'><span className='text-2xl text-white font-bold'>&#8358;</span> 
            {showBalance? (<span className='font-bold text-white text-2xl'>50,000</span>) : (
              <span className='font-bold text-white text-2xl'>***</span>
            ) }
            </p>
          </div>
          <div className='flex justify-center items-center my-4'>
            <FaUser className='text-white  border-2 rounded-full p-1 text-4xl'/>

          </div>
        
        </div>

        <div className='flex justify-between mt-8 '>
          <div className='flex justify-center flex-col'>
            
          <Link  href={'/fund'} className='text-3xl  '><FaPlus className='text-primary rounded-lg bg-white p-2'/></Link>
          <span className='text-[12px] text-white mt-1'>Fund</span>

          </div>
        
          <div className='flex justify-center flex-col'>
            
            <Link  href={'/fund'} className='text-3xl  '><FaArrowUp className='text-primary rounded-lg bg-white p-2'/></Link>
            <span className='text-[12px] text-white mt-1'>Transfer</span>
  
            </div>
            <div className='flex justify-center flex-col'>
            
            <Link  href={'/fund'} className='text-3xl  '><FaArrowDown className='text-primary rounded-lg bg-white p-2'/></Link>
            <span className='text-[12px] text-white mt-1'>Withdraw</span>
  
            </div>
        </div>

      </div>
      

      <div className='container mx-auto bg-white glass border rounded-t-lg space-y-2  p-4 mt-2'>
        <div>
          <h2 className='text-xl font-semibold'> Bills</h2>
        </div>

        <div className='grid  grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

          <Link href={'/service/buyairtime'}>
          <div className='border shadow-md rounded-md p-2 hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaPhone className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center'>Airtime</div>
          </div>

          </Link>
        

                <Link href={'/service/buydata'}>
                <div className='border shadow-md rounded-md p-2 hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaWifi className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center'>Data</div>
          </div>

                </Link>
        


            <Link href={'/service/bills'}>
            <div className='border shadow-md rounded-md p-2  overflow-hidden hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaLightbulb className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center'>Bills</div>
          </div>
            </Link>
          
          <Link href={'/service/airtimetocash'}>

          <div className='border shadow-md rounded-md p-2  text-wrap hover:bg-gray-50'>
            <div className='flex justify-center items-center flex-grow-1 aspect-ratio'>
              <FaMoneyBill className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center text-wrap'>Cash</div>
          </div>
          </Link>
        

          

              <Link href={'/service/exampin'}>
              <div className='border shadow-md rounded-md p-2 overflow-hidden hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaGraduationCap className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center text-wrap'>Exam pin</div>
          </div>
              </Link>

              <Link href={'/service/datacard'}>
              <div className='border shadow-md rounded-md p-2 overflow-hidden hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaReceipt className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center  '>Data Card</div>
          </div>
              </Link>
         

         

              <Link href={'/service/airtimepin'}>
              <div className='border shadow-md rounded-md p-2 overflow-hidden hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaPrint className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center'>Print Airtime</div>
          </div>
              </Link>
       


          <div className='border shadow-md rounded-md p-2 overflow-hidden hover:bg-gray-50'>
            <div className='flex justify-center'>
              <FaMessage className='bg-primary text-white p-1 rounded  text-2xl' />
            </div>
            <div className='text-[12px] text-primary text-center'>Bulk Sms</div>
          </div>



          


        </div>



        
      </div>

      <div className='container mx-auto bg-white p-2'>
        <div>
          <h2 className='font-bold'>Transactions</h2>
        </div>

        <div>


          <div className='flex justify-between border-b-2 pb-4'>
            <div className='flex justify-between items-center space-x-2'>
            <div className='bg-blue-200 p-3 w-10 rounded-full border-blue-500 border '>
                    <FaPhone className='text-1xl text-primary '/>

       </div>
             
              <div className='flex flex-col'>
                <div className='font-semibold text-gray-800'>Mtn Airtime</div>
                <span className='text-sm text-gray-500'>4:4pm</span>
              </div>
            </div>
            <div className='flex flex-col'>
            <span className='font-bold'>500</span>
                <span>2/3/2024</span>
            </div>
          </div>

            
          <div className='flex justify-between border-b-2 pb-4'>
            <div className='flex justify-between items-center space-x-2'>
            <div className='bg-blue-200 p-3 w-10 rounded-full border-blue-500 border '>
                    <FaPhone className='text-1xl text-primary '/>

       </div>
             
              <div className='flex flex-col'>
                <span className='font-semibold text-gray-800'>Mtn Airtime</span>
                <span className='text-sm text-gray-500'>4:4pm</span>
              </div>
            </div>
            <div className='flex flex-col'>
            <span className='font-bold'>500</span>
                <span>2/3/2024</span>
            </div>
          </div>

            
          <div className='flex justify-between border-b-2 pb-4'>
            <div className='flex justify-between items-center space-x-2'>
            <div className='bg-blue-200 p-3 w-10 rounded-full border-blue-500 border '>
                    <FaPhone className='text-1xl text-primary '/>

       </div>
             
              <div className='flex flex-col'>
                <span className='font-semibold text-gray-800'>Glo Airtime</span>
                <span className='text-sm text-gray-500'>4:4pm</span>
              </div>
            </div>
            <div className='flex flex-col'>
            <span className='font-bold'>500</span>
                <span>2/3/2024</span>
            </div>
          </div>

      






        </div>

      </div>

      



    </div>
  )
}
