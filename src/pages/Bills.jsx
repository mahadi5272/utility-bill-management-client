import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { AuthContext } from "../routes/AuthProvider";
import { motion } from "framer-motion";

const Bills = () => {
  const bills = useLoaderData();
  const [selectCategory, setSelectCategory] = useState("");
  const [filteredBills, setFilteredBills] = useState(bills);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    if (selectCategory === "") {
      setFilteredBills(bills);
    } else {
      setFilteredBills(
        bills.filter((bill) => bill.category === selectCategory)
      );
    }
  }, [selectCategory, bills]);

  useEffect(() => {
    document.title = "Bills | UBM System";
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60px] bg-black text-white">
        <span className="loading loading-spinner loading-md"></span>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }
  const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
     
      duration: 3,
    },
  },
};

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-6"
       variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="mb-4">
        <select
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Electricity">Electricity</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
          <option value="Internet">Internet</option>
        </select>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {filteredBills.map((bill) => (
          <motion.div
            key={bill._id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={bill.image} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {bill.title}
              </h2>
              <p>
                <span className="font-medium">Category:</span> {bill.category}
              </p>
              <p>
                <span className="font-medium">Location:</span> {bill.location}
              </p>
              <p>
                <span className="font-medium">Amount:</span> ৳{bill.amount}
              </p>
              <Link to={`/billDetails/${bill._id}`}>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2 hover:bg-blue-600 transition">
                  See Details
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Bills;
