import React from 'react'

const sidebar_price = () => {
  return (
    <div className="py-6">
    <h5 className="text-lg font-semibold mb-4">Price</h5>
    <div>
      <input
        type="range"
        min="0"
        max="100"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <small className="text-gray-500">
        Price: <span>$0 - $100</span>
      </small>
    </div>
  </div>
  )
}

export default sidebar_price
