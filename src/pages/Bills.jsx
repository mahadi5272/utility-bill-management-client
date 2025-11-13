import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../routes/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Bills = () => {
  const bills = useLoaderData();
  const [selectcategory, setSelectcategory] = useState("");
  const [filtterdBills, setFiltteredBills] = useState(bills);

  useEffect(() => {
    if (selectcategory === "") {
      setFiltteredBills(bills);
    } else {
      setFiltteredBills(
        bills.filter((bill) => bill.category === selectcategory)
      );
    }
  }, [selectcategory, bills]);
  const { loading } = useContext(AuthContext);
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

  return (
    <>
      <div>
        <div className="mb-4">
          <select
            value={selectcategory}
            onChange={(e) => {
              setSelectcategory(e.target.value);
            }}
            className="border rounded p-2"
          >
            <option value="">All Categories</option>
            <option value="Electricity">Electricity</option>
            <option value="Gas">Gas</option>
            <option value="Water">Water</option>
            <option value="Internet">Internet</option>
          </select>
        </div>
        <div className="grid  gap-6 p-20 md:grid-cols-3">
          {filtterdBills.map((bill) => (
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
                <Link to={`/billDetails/${bill._id}`}>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bills;
