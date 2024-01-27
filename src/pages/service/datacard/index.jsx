
import React, { useState } from 'react';
import TopBar from '../../../components/TopBar'

const DataCardScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [amountToPay, setAmountToPay] = useState('');



  const plans = [
    { id: 1, name: 'MTN-100MB', value: 100 },
    { id: 1, name: 'MTN-750MB', value: 200 },
    { id: 1, name: 'MTN-750MB', value: 200 },
    { id: 1, name: 'MTN-750MB', value: 200 },
    { id: 1, name: 'MTN-750MB', value: 200 },
    // Add more plans as needed
  ];

  const handleOperatorChange = (operatorId) => {
    setSelectedOperator(operatorId);
  };

  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);

    // Calculate the amount to pay based on selected plan value and quantity
    const calculatedAmount = selectedPlan ? selectedPlan.value * newQuantity : 0;
    setAmountToPay(calculatedAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform data card purchase logic here
    console.log(`
      Operator: ${selectedOperator},
      Plan: ${selectedPlan ? selectedPlan.name : ''},
      Quantity: ${quantity},
      Amount to Pay: ${amountToPay}
    `);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-center">
      <TopBar title={'Buy Data Card'} />
      <div className="bg-white p-4 md:p-8 rounded md:shadow-md w-full md:w-96">
        <h2 className="hidden md:block text-2xl font-semibold mb-6 text-center">Buy Data Card</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Operator</label>
            <div className="flex items-center justify-center space-x-4">
           <select className="select select-bordered w-full max-w-xs">
             <option disabled selected>Select Operator</option>
             <option>Mtn</option>
             <option>Glo</option>
             <option>Airtel</option>
             <option>9mobile</option>
           </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-base font-bold text-gray-600">Select Plan</label>
            <div className="flex  space-x-4">
            <select className="select select-bordered w-full max-w-xs"  onChange={(e) => handlePlanChange(e.target.value)}>
              {plans.map((plan) => (
             
                    
                      <option  value={plan.id} selected key={plan.id} >{plan.name}</option>
                     
           
                 
                      
                  
              
                
            
              ))}
                </select>
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

export default DataCardScreen;
