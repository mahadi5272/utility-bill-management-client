import React, { useContext, useRef } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../routes/AuthProvider";
import { toast } from "react-toastify";

const BillDetails = () => {
    const {user} =useContext(AuthContext)
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
  console.log(email)
  //   const{_id}= useParams()
  console.log(bill._id);
  const modalRef = useRef(null);
  const handleModal = () => {
    modalRef.current.showModal();
  };
  //   cellculate Current Month
  const currentDate = new Date();
  const BillDate = new Date(date);
  const isCurrentMonth =
    currentDate.getMonth() === BillDate.getMonth() &&
    currentDate.getFullYear() === BillDate.getFullYear();
  const handlePayBill = (e) => {
    e.preventDefault();
    const email = e.target.e.value;
    const username = e.target.u.value;
    const billId = e.target.i.value;
    const address = e.target.ad.value;
    const amount = e.target.a.value;
    const phone = e.target.p.value;
    const date = e.target.d.value;
    const payBillDeta = {
      email,
      username,
      billId,
      address,
      amount,
      phone,
      date,
      
    };
    // post pay Bill
    fetch("https://bill-management-server-indol.vercel.app/payBill", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payBillDeta),
    }).then(res=>res.json()).then(data=>{
        console.log(data)
    })
    toast("success save bill data to MongoDB.!");
  };


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
            <button
              onClick={handleModal}
              disabled={!isCurrentMonth}
              className={`w-full py-2 rounded-lg mt-4 transition duration-300 ${
                isCurrentMonth
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Pay Bill
            </button>
            {/* ✅ Show message if not current month */}
            {!isCurrentMonth && (
              <p className="text-red-500 text-sm text-center mt-2">
                {" "}
                Only current month bills can be paid.
              </p>
            )}
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={modalRef} className="modal">
              <div className="modal-box rounded-xl bg-white shadow-lg">
                <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">
                  Pay Your Bill
                </h3>

                <form onSubmit={handlePayBill} className="space-y-3">
                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
                      value={user?.email}
                      type="text"
                      name="e"
                      readOnly
                    />
                  </div>

                  {/* Bill ID */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Bill ID
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
                      value={_id}
                      type="text"
                      name="i"
                      readOnly
                    />
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Amount
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
                      value={amount}
                      type="text"
                      name="a"
                      readOnly
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Username
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      type="text"
                      name="u"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Address
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      value={location}
                      type="text"
                      name="ad"
                      readOnly
                      placeholder="Enter your address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                      type="text"
                      name="p"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="d"
                      value={date}
                      readOnly
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Additional Info
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Write any extra note (optional)"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => modalRef.current.close()}
                      className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Pay Bill
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
