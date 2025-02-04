import { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1.00");
  const [exchangeRate, setExchangeRate] = useState("0.08965");
  const [result, setResult] = useState("1.00 Euro = 1.1154 US Dollars");

  const handleConvert = () => {
    // Logic for currency conversion
    setResult("Conversion result here");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">From</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">To</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="USD">USD</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">Exchange Rate</span>
        <span className="text-sm font-medium text-gray-900">{exchangeRate}</span>
      </div>
      <button
        onClick={handleConvert}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Convert
      </button>
      <div className="mt-4 text-center text-sm text-gray-700">{result}</div>
    </div>
  );
};

export default CurrencyConverter;