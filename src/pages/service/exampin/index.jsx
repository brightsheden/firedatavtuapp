'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const BuyExamPinScreen = () => {
  const [selectedExamType, setSelectedExamType] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionPin, setTransactionPin] = useState('');

  const examTypes = ['Waec', 'Neco', 'Nabteb'];
  const quantityOptions = [1, 2, 3, 4, 5];

  const handleExamTypeChange = (examType) => {
    setSelectedExamType(examType);
  };

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransactionPinChange = (e) => {
    setTransactionPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform exam pin purchase logic here
    console.log(`
      Exam Type: ${selectedExamType},
      Quantity: ${selectedQuantity},
      Amount: ${amount},
      Transaction Pin: ${transactionPin}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Buy Exam Pin'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Buy Exam Pin</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Exam Type</label>
            <select
              value={selectedExamType}
              onChange={(e) => handleExamTypeChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select exam type</option>
              {examTypes.map((examType) => (
                <option key={examType} value={examType}>{examType}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Quantity</label>
            <select
              value={selectedQuantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select quantity</option>
              {quantityOptions.map((quantity) => (
                <option key={quantity} value={quantity}>{quantity}</option>
              ))}
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
              placeholder="Enter amount"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="transactionPin" className="block text-base font-bold text-gray-600">
              Transaction Pin:
            </label>
            <input
              type="password"
              id="transactionPin"
              name="transactionPin"
              value={transactionPin}
              onChange={handleTransactionPinChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter transaction pin"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyExamPinScreen;
