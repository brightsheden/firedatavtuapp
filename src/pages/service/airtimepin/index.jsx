'use client'
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar';


const BuyAirtimePinScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [amountToPay, setAmountToPay] = useState('');

  const operators = [
    { id: 1, name: 'MTN', image: 'https://th.bing.com/th/id/R.9572624ec517cc7b49921cd2fad6298d?rik=36frak%2bLfv0rsQ&pid=ImgRaw&r=0' },
    { id: 2, name: 'Glo', image: 'https://th.bing.com/th/id/R.9ea644021aebcc1fca42d10895674d50?rik=hZ4lODNZiW7m3Q&pid=ImgRaw&r=0' },
    { id: 3, name: 'Airtel', image: 'https://th.bing.com/th/id/R.b44e6b76634acff08eb1d7ee33b942a7?rik=YmGPaxytcshrQw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-MwiDHXtIf-s%2fTjKbVxripeI%2fAAAAAAAAAKw%2fRsU0xbTPvsI%2fs1600%2fairtel-logo.jpg&ehk=rMuDpEXN942zcnobX%2b2kXeNO5EdLEQsLJ6P%2fV%2fc9GsM%3d&risl=&pid=ImgRaw&r=0' },
    { id: 4, name: '9Mobile', image: 'https://cvnewsng.com/wp-content/uploads/2022/02/9mobile-logo.png' },
  ];

  const amounts = [100, 200, 500, 1000];

  const handleOperatorChange = (operatorId) => {
    setSelectedOperator(operatorId);
  };

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);

    // Calculate the amount to pay based on selected amount and quantity
    const calculatedAmount = selectedAmount * newQuantity;
    setAmountToPay(calculatedAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform airtime pin purchase logic here
    console.log(`
      Operator: ${selectedOperator},
      Amount: ${selectedAmount},
      Quantity: ${quantity},
      Amount to Pay: ${amountToPay}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Buy Airtime Pin'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Buy Airtime Pin</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Operator</label>
            <div className="flex items-center  space-x-4">
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
                    className={`w-12 h-12 ${selectedOperator === operator.id ? 'border-primary border' : 'border-gray-300'} rounded`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Amount</label>
            <div className="flex items-center  space-x-4">
              {amounts.map((amount) => (
                <label key={amount} className="cursor-pointer">
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    checked={selectedAmount === amount}
                    onChange={() => handleAmountChange(amount)}
                    className="hidden"
                  />
                  <div className={`w-12 h-12 ${selectedAmount === amount ? 'border-primary border' : 'border-gray-300'} rounded flex items-center justify-center bg-gray-100`}>
                    <span className="text-sm font-bold">{amount}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-base font-bold text-gray-600">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter quantity"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="amountToPay" className="block text-base font-bold text-gray-600">
              Amount to Pay:
            </label>
            <input
              type="number"
              id="amountToPay"
              name="amountToPay"
              value={amountToPay}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base font-bold text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyAirtimePinScreen;
