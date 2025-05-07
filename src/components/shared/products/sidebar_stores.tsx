import React from 'react'

interface Store {
  name: string;
}

const sidebar_stores = ( { 
  stores, 
  selectedStores, 
  handleStoreCheckbox, 
  searchStore, 
  setSearchStore 
}: { 
  stores: Store[]; 
  selectedStores: string[]; 
  handleStoreCheckbox: (storeKey: string) => void; 
  searchStore: string; 
  setSearchStore: (value: string) => void; 
}) => {
  return (
    <div className="py-6">
    <h5 className="text-lg font-semibold mb-4">Stores</h5>
    <input
      type="search"
      value={searchStore}
      onChange={(e) => setSearchStore(e.target.value)}
      placeholder="Search by store"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
    />
    {stores.map((store) => {
      const storeKey = store.name.replace(/\s+/g, "-"); // to handle names like "Online Grocery"
      return (
        <div key={storeKey} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={storeKey}
            checked={selectedStores.includes(storeKey)}
            onChange={() => handleStoreCheckbox(storeKey)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor={storeKey}
            className="ml-2 text-gray-700"
          >
            {store.name}
          </label>
        </div>
      );
    })}
  </div>
  )
}

export default sidebar_stores
