'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const AirtimePurchaseScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const operators = [
    { id: 1, name: 'MTN', image: 'https://th.bing.com/th/id/R.9572624ec517cc7b49921cd2fad6298d?rik=36frak%2bLfv0rsQ&pid=ImgRaw&r=0' },
    { id: 2, name: 'Glo', image: 'https://th.bing.com/th/id/R.9ea644021aebcc1fca42d10895674d50?rik=hZ4lODNZiW7m3Q&pid=ImgRaw&r=0' },
    { id: 3, name: 'Airtel', image: 'https://th.bing.com/th/id/R.b44e6b76634acff08eb1d7ee33b942a7?rik=YmGPaxytcshrQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-MwiDHXtIf-s%2fTjKbVxripeI%2fAAAAAAAAAKw%2fRsU0xbTPvsI%2fs1600%2fairtel-logo.jpg&ehk=rMuDpEXN942zcnobX%2b2kXeNO5EdLEQsLJ6P%2fV%2fc9GsM%3d&risl=&pid=ImgRaw&r=0' },
    { id: 4, name: '9Mobile', image: 'https://cvnewsng.com/wp-content/uploads/2022/02/9mobile-logo.png' },
  ];
  const types = ['SME', 'Gifting', 'Cooperations'];

  const plans = [
    { id: 1, name: 'MTN 500MB', amount: 700 },
    { id: 2, name: 'MTN 1GB', amount: 390 },
  ];

  const handleOperatorChange = (operatorId) => {
    setSelectedOperator(operatorId);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handlePlanChange = (planId) => {
    const selectedPlan = plans.find((plan) => plan.id === planId);
    setSelectedPlan(selectedPlan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform airtime purchase logic here
    console.log(`
      Operator: ${selectedOperator},
      Phone Number: ${phoneNumber},
      Amount: ${amount},
      Type: ${selectedType},
      Plan: ${selectedPlan ? `${selectedPlan.name} (${selectedPlan.amount})` : 'Not selected'},
      Pin: ${pin}
    `);
  };

  return (
    <div className="min-h-screen mt-8 bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Purchase Data'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Airtime Purchase</h2>

        <form onSubmit={handleSubmit} className='mt-8'>
          <label className='font-bold text-gray-500'>Select Network</label>
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
                  className={`w-12 h-12 ${selectedOperator === operator.id ? 'border-primary border-2' : 'border-gray-300'} rounded`}
                />
              </label>
            ))}
            </div>

          <label className='font-bold text-gray-500'>Select Type</label>
          <div className="mb-4">
            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select type</option>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <label className='font-bold text-gray-500'>Select Plan</label>
          <div className="mb-4">
            <select
              value={selectedPlan ? selectedPlan.id : ''}
              onChange={(e) => handlePlanChange(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select plan</option>
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>{`${plan.name} (${plan.amount})`}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-base font-bold text-gray-600">
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
            <label htmlFor="amount" className="block text-base font-bold text-gray-600">
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

          <div className="mb-4">
            <label htmlFor="Transaction Pin" className="block text-base font-bold text-gray-600">
              Pin:
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
              placeholder="txn pin"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default AirtimePurchaseScreen;
