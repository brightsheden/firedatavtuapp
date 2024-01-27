'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const AirtimeToCashScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState('07064857695'); // Default value for receiver phone number
  const [senderPhoneNumber, setSenderPhoneNumber] = useState('');
  const [airtimeAmount, setAirtimeAmount] = useState('');
  const [amountToReceive, setAmountToReceive] = useState('');
  const [transactionPin, setTransactionPin] = useState('');

  const operators = ['MTN', 'Glo', 'Airtel', '9Mobile'];

  const handleOperatorChange = (operator) => {
    setSelectedOperator(operator);
  };

  const handleSenderPhoneNumberChange = (e) => {
    setSenderPhoneNumber(e.target.value);
  };

  const handleAirtimeAmountChange = (e) => {
    const inputValue = e.target.value;
    setAirtimeAmount(inputValue);

    // Calculate the amount to receive (deducting 20%)
    const deductedAmount = inputValue * 0.2;
    setAmountToReceive(inputValue - deductedAmount);
  };

  const handleTransactionPinChange = (e) => {
    setTransactionPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform airtime to cash conversion logic here
    console.log(`
      Operator: ${selectedOperator},
      Receiver Phone Number: ${receiverPhoneNumber},
      Sender Phone Number: ${senderPhoneNumber},
      Airtime Amount: ${airtimeAmount},
      Amount to Receive: ${amountToReceive},
      Transaction Pin: ${transactionPin}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Airtime to Cash'} />
      <div className="bg-white mt-8 p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Airtime to Cash</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Operator</label>
            <select
              value={selectedOperator}
              onChange={(e) => handleOperatorChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select operator</option>
              {operators.map((operator) => (
                <option key={operator} value={operator}>{operator}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="receiverPhoneNumber" className="block text-base font-bold text-gray-600">
              Receiver Phone Number:
            </label>
            <input
              type="text"
              id="receiverPhoneNumber"
              name="receiverPhoneNumber"
              value={receiverPhoneNumber}
              onChange={() => {}}
              readOnly // Make it unchangeable
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senderPhoneNumber" className="block text-base font-bold text-gray-600">
              Sender Phone Number:
            </label>
            <input
              type="text"
              id="senderPhoneNumber"
              name="senderPhoneNumber"
              value={senderPhoneNumber}
              onChange={handleSenderPhoneNumberChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter sender's phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="airtimeAmount" className="block text-base font-bold text-gray-600">
              Airtime Amount:
            </label>
            <input
              type="number"
              id="airtimeAmount"
              name="airtimeAmount"
              value={airtimeAmount}
              onChange={handleAirtimeAmountChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter airtime amount"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amountToReceive" className="block text-base font-bold text-gray-600">
              Amount to Receive:
            </label>
            <input
              type="number"
              id="amountToReceive"
              name="amountToReceive"
              value={amountToReceive}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
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
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default AirtimeToCashScreen;
