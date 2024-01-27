// AirtimePurchaseScreen.js

import React, { useState } from 'react';

const AirtimePurchaseScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const operators = [
    { id: 1, name: 'MTN', image: 'https://th.bing.com/th/id/R.9572624ec517cc7b49921cd2fad6298d?rik=36frak%2bLfv0rsQ&pid=ImgRaw&r=0' },
    { id: 2, name: 'Glo', image: 'https://th.bing.com/th/id/R.9ea644021aebcc1fca42d10895674d50?rik=hZ4lODNZiW7m3Q&pid=ImgRaw&r=0' },
    { id: 3, name: 'Airtel', image: 'https://th.bing.com/th/id/R.b44e6b76634acff08eb1d7ee33b942a7?rik=YmGPaxytcshrQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-MwiDHXtIf-s%2fTjKbVxripeI%2fAAAAAAAAAKw%2fRsU0xbTPvsI%2fs1600%2fairtel-logo.jpg&ehk=rMuDpEXN942zcnobX%2b2kXeNO5EdLEQsLJ6P%2fV%2fc9GsM%3d&risl=&pid=ImgRaw&r=0' },
    { id: 4, name: '9Mobile', image: 'https://cvnewsng.com/wp-content/uploads/2022/02/9mobile-logo.png' },
  ];

  const handleOperatorChange = (operatorId) => {
    setSelectedOperator(operatorId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform airtime purchase logic here
    console.log(`Operator: ${selectedOperator}, Phone Number: ${phoneNumber}, Amount: ${amount}`);
  };

  return (
    <div className="min-h-screen md:bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Airtime Purchase</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Network
            </label>
            <div className='mb-4'>
                    <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>Select Operator</option>
        <option>Mtn</option>
        <option>Glo</option>
        <option>Airtel</option>
        <option>9mobile</option>
        </select>
                    </div>
    <div className='flex items-center  space-x-4'>
            
            {operators.map((operator) => (
              <label key={operator.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="operator"
                  value={operator.id}
                  checked={selectedOperator === operator.id}
                  onChange={() => handleOperatorChange(operator.id)}
                  className="hidden"
                />
                <img
                  src={operator.image}
                  alt={operator.name}
                  className={`w-12 h-12 ${selectedOperator === operator.id ? 'border-primary border-4' : 'border-gray-300'} rounded-full`}
                />
              </label>
            ))}
            </div>
          
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number:
            </label>
            
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Amount:
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the amount"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default AirtimePurchaseScreen;
