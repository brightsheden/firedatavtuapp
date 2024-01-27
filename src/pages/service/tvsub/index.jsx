'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const TvSubscriptionScreen = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [iucPinNumber, setIucPinNumber] = useState('');

  const types = ['Gotv', 'Dstv', 'StarTime'];

  const plans = {
    Gotv: ['Gotv Plan 1', 'Gotv Plan 2', 'Gotv Plan 3'],
    Dstv: ['Dstv Plan 1', 'Dstv Plan 2', 'Dstv Plan 3'],
    StarTime: ['StarTime Plan 1', 'StarTime Plan 2', 'StarTime Plan 3'],
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedPlan('');
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform TV subscription logic here
    console.log(`
      Type: ${selectedType},
      Plan: ${selectedPlan},
      IUC/PIN Number: ${iucPinNumber}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'TV Subscription'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">TV Subscription</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Type</label>
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

          {selectedType && (
            <div className="mb-4">
              <label className="block text-base font-bold text-gray-600">Select Plan</label>
              <select
                value={selectedPlan}
                onChange={(e) => handlePlanChange(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>Select plan</option>
                {plans[selectedType].map((plan) => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="iucPinNumber" className="block text-base font-bold text-gray-600">
              IUC/PIN Number:
            </label>
            <input
              type="text"
              id="iucPinNumber"
              name="iucPinNumber"
              value={iucPinNumber}
              onChange={(e) => setIucPinNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter IUC/PIN Number"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default TvSubscriptionScreen;
