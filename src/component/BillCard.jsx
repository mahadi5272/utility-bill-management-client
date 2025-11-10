import React from "react";

const BillCard = ({ bill }) => {
  const {
    amount,
    category,
    date,
    description,
    email,
    image,
    location,
    title,
    _id,
  } = bill;
  return (
    <div className="border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      <div className="space-y-1 text-gray-600 text-sm mb-4">
        <p>
          <span className="font-medium text-gray-700">Category:</span>{" "}
          {category}
        </p>
        <p>
          <span className="font-medium text-gray-700">Location:</span>{" "}
          {location}
        </p>
        <p>
          <span className="font-medium text-gray-700">Date:</span>{" "}
          {new Date(date).toLocaleDateString()}
        </p>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        See Details
      </button>
    </div>
  );
};

export default BillCard;
