'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const ElectricityPaymentScreen = () => {
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [amount, setAmount] = useState('');
  const [meterNumber, setMeterNumber] = useState('');

  const agents = ['Lagos Electricity', 'Ibadan Electricity', 'Sokoto Electricity']; // Add more agents as needed

  const handleAgentChange = (agent) => {
    setSelectedAgent(agent);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    // Ensure the minimum amount is 1000
    setAmount(Math.max(1000, inputValue));
  };

  const handleMeterNumberChange = (e) => {
    setMeterNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform electricity payment logic here
    console.log(`
      Agent: ${selectedAgent},
      Type: ${selectedType},
      Amount: ${amount},
      Meter Number: ${meterNumber}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Electricity Payment'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Electricity Payment</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Agent</label>
            <select
              value={selectedAgent}
              onChange={(e) => handleAgentChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select agent</option>
              {agents.map((agent) => (
                <option key={agent} value={agent}>{agent}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Type</label>
            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select type</option>
              <option value="Prepaid">Prepaid</option>
              <option value="Postpaid">Postpaid</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-base font-bold text-gray-600">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter amount (minimum 1000)"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="meterNumber" className="block text-base font-bold text-gray-600">
              Meter Number:
            </label>
            <input
              type="text"
              id="meterNumber"
              name="meterNumber"
              value={meterNumber}
              onChange={handleMeterNumberChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter meter number"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ElectricityPaymentScreen;
