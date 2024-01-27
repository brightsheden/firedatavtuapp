'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';
import { Modal } from 'flowbite-react';

const TransferScreen = () => {
  const [recipientNumber, setRecipientNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionPin, setTransactionPin] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleRecipientNumberChange = (e) => {
    setRecipientNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransactionPinChange = (e) => {
    setTransactionPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform transfer logic here
    setShowConfirmationModal(true);
  };

  const handleConfirm = () => {
    // Perform confirmation logic here
    setShowConfirmationModal(false);
  };

  const handleCancel = () => {
    // Perform cancellation logic here
    setShowConfirmationModal(false);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Transfer Funds'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Transfer Funds</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label htmlFor="recipientNumber" className="block text-base font-bold text-gray-600">
              Recipient Phone Number:
            </label>
            <input
              type="text"
              id="recipientNumber"
              name="recipientNumber"
              value={recipientNumber}
              onChange={handleRecipientNumberChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter recipient's phone number"
            />
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
              placeholder="Enter amount to transfer"
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
              placeholder="Enter your transaction pin"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Confirm
          </button>
        </form>

        {showConfirmationModal && (
          <Modal>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Confirm Transfer</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to send {amount} to {recipientNumber}?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="btn bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
                <button
                  className="btn bg-gray-300 text-gray-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default TransferScreen;
