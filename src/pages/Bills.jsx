import React from "react";
import { useLoaderData } from "react-router";

const Bills = () => {
  const bills = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-3 gap-3.5">
        {bills.map((bill) => (
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 overflow-hidden">
            {/* Image */}
            <img src={bill.image} className="w-full h-48 object-cover" />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {bill.title}
              </h2>

              <div className="text-gray-600 text-sm space-y-1 mb-4">
                <p>
                  <span className="font-medium text-gray-700">Category:</span>{" "}
                  {bill.category}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Location:</span>{" "}
                  {bill.location}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Amount:</span> ৳
                  {bill.amount}
                </p>
              </div>

              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bills;
