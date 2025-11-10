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
 
    </div>
  );
};

export default BillCard;
