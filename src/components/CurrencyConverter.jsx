import { useState } from "react"

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1.00")
  const [exchangeRate, setExchangeRate] = useState("0.08965")
  const [result, setResult] = useState("1.00 Euro = 1.1154 US Dollars")

  const handleConvert = () => {
    // Logic for currency conversion
    setResult("Conversion result here")
  }

  return (
    <div className="bg-theme text-white shadow-md rounded-lg p-6 mb-6 font-montserrat">
      <div className="mb-4">
        <label className="block text-sm font-medium">From</label>
        <select className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white focus:border-white focus:ring-white">
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">To</label>
        <select className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white focus:border-white focus:ring-white">
          <option value="USD">USD</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md bg-white/10 border border-white/20 text-white focus:border-white focus:ring-white"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-white/70">Exchange Rate</span>
        <span className="text-sm font-medium">{exchangeRate}</span>
      </div>
      <button
        onClick={handleConvert}
        className="w-full bg-white text-theme py-2 px-4 rounded-md shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Convert
      </button>
      <div className="mt-4 text-center text-sm">{result}</div>
    </div>
  )
}

export default CurrencyConverter