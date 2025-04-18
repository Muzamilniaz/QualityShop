import React from "react";
import { IconType } from "react-icons";

interface CategoryProps {
  icon: IconType;
  title: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon: Icon, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl text-green-500 mb-3">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default CategoryCard;
