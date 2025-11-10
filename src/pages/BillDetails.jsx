import React from "react";
import { useLoaderData, useParams } from "react-router";

const BillDetails = () => {
  const bill = useLoaderData();
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
//   const{_id}= useParams()
  console.log(bill._id);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md w-full">
          <img src={image} alt={title} className="w-full h-64 object-cover" />

          <div className="p-6 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Amount:</span> ৳{amount}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Date:</span> {date}
            </p>

            <p className="text-gray-700 mt-2">{description}</p>

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
              Pay Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
