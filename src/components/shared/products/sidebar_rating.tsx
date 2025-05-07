import React from 'react'

interface SidebarRatingProps {
  ratingOptions: { id: string; label: string }[];
  selectedRatings: string[];
  handleRatingCheckbox: (id: string) => void;
}

const sidebar_rating: React.FC<SidebarRatingProps> = ({ratingOptions, selectedRatings, handleRatingCheckbox}) => {
  return (
    <div className="py-6">
    <h5 className="text-lg font-semibold mb-4">Rating</h5>
    {ratingOptions.map((rating) => (
      <div key={rating.id} className="flex items-center mb-2">
        <input
          type="checkbox"
          id={rating.id}
          checked={selectedRatings.includes(rating.id)}
          onChange={() => handleRatingCheckbox(rating.id)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor={rating.id}
          className="ml-2 text-yellow-400"
        >
          {rating.label}
        </label>
      </div>
    ))}
  </div>
  )
}

export default sidebar_rating
