
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../routes/AuthProvider";

const BillCard = ({ bill }) => {
  const {  loading } = useContext(AuthContext);
    if (loading) {
    return (
      <div className="flex justify-center items-center h-[60px] bg-black text-white">
        <span className="loading loading-spinner loading-md"></span>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

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
    <div className=" rounded-xl shadow-md p-5 bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300">
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
