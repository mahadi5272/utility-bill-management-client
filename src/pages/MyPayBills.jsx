import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../routes/AuthProvider";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";

const MyPayBills = () => {
  const { user, loading } = useContext(AuthContext);
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);

  useEffect(() => {
    document.title = "MyPay Bills | UBM System";
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://bill-management-server-indol.vercel.app/myBills?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setBills(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60px] bg-black text-white">
        <span className="loading loading-spinner loading-md"></span>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  // ✅ Update bill
  const handleUpdate = (id, e) => {
    e.preventDefault();
    const updatedBill = {
      amount: e.target.amount.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      date: e.target.date.value,
    };

    fetch(`https://bill-management-server-indol.vercel.app/myBills/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBill),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.matchedCount > 0) {
          setBills((prev) =>
            prev.map((bill) =>
              bill._id === id ? { ...bill, ...updatedBill } : bill
            )
          );
        }
        if (modalRef.current) modalRef.current.close();
        setSelectedBill(null);
        toast.success("Data Updated Successfully!");
      })
      .catch((err) => console.log(err));
  };

  // ✅ Delete bill
  const handleDelete = (id) => {
    fetch(`https://bill-management-server-indol.vercel.app/myBills/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setBills((prev) => prev.filter((bill) => bill._id !== id));
          toast.success("Bill Deleted Successfully!");
        }
      })
      .catch((err) => console.log(err));
  };

  // ✅ Open modals safely
  const openUpdateModal = (bill) => {
    setSelectedBill(bill);
    if (modalRef.current) modalRef.current.showModal();
  };

  const openDeleteModal = (bill) => {
    setSelectedBill(bill);
    if (deleteModalRef.current) deleteModalRef.current.showModal();
  };

  // ✅ Download PDF
  const PdfDownload = () => {
    const doc = new jsPDF();
    doc.text("My Pay Bills", 10, 10);

    const tableColumn = [
      "Username",
      "Email",
      "Amount",
      "Address",
      "Phone",
      "Date",
    ];
    const tableRows = bills.map((bill) => [
      bill.username,
      bill.email,
      `৳${bill.amount}`,
      bill.address,
      bill.phone,
      bill.date,
    ]);

    autoTable(doc, { head: [tableColumn], body: tableRows, startY: 20 });
    doc.save(`${user?.displayName || "User"}_bills_report.pdf`);
  };

  const totalBills = bills.length;
  const totalAmount = bills.reduce((sum, bill) => sum + Number(bill.amount), 0);

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-6 md:py-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
        My Paid Bills
      </h1>

      {totalBills > 0 && (
        <div className="text-center mb-8 text-gray-700 text-lg font-medium">
          <p>Total Bills Paid: {totalBills}</p>
          <p>Total Amount: ৳{totalAmount.toLocaleString()}</p>
        </div>
      )}

      {bills.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          No bills found for this account.
        </p>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:block w-full overflow-x-hidden">
            <table className="w-full border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill._id} className="hover:bg-gray-50 transition">
                    <td className="border p-3">{bill.username}</td>
                    <td className="border p-3">{bill.email}</td>
                    <td className="border p-3">৳{bill.amount}</td>
                    <td className="border p-3">{bill.address}</td>
                    <td className="border p-3">{bill.phone}</td>
                    <td className="border p-3">{bill.date}</td>
                    <td className="border p-3 text-center space-x-2">
                      <button
                        onClick={() => openUpdateModal(bill)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => openDeleteModal(bill)}
                        className="bg-red-500 text-shadow-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden space-y-3 w-full">
            {bills.map((bill) => (
              <div
                key={bill._id}
                className="border rounded-lg p-3 shadow bg-white hover:shadow-md transition"
              >
                <p>
                  <strong>Username:</strong> {bill.username}
                </p>
                <p>
                  <strong>Email:</strong> {bill.email}
                </p>
                <p>
                  <strong>Amount:</strong> ৳{bill.amount}
                </p>
                <p>
                  <strong>Address:</strong> {bill.address}
                </p>
                <p>
                  <strong>Phone:</strong> {bill.phone}
                </p>
                <p>
                  <strong>Date:</strong> {bill.date}
                </p>
                <div className="text-right space-x-2 mt-2">
                  <button
                    onClick={() => openUpdateModal(bill)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => openDeleteModal(bill)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* PDF Button */}
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary" onClick={PdfDownload}>
          Download PDF
        </button>
      </div>

      {/* ✅ Update Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={(e) => handleUpdate(selectedBill._id, e)}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4">Update Bill</h2>
            <input
              type="number"
              name="amount"
              defaultValue={selectedBill?.amount}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="address"
              defaultValue={selectedBill?.address}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              defaultValue={selectedBill?.phone}
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="date"
              defaultValue={selectedBill?.date}
              className="input input-bordered w-full"
            />
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => modalRef.current.close()}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* ✅ Delete Modal */}
      <dialog
        ref={deleteModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">You want to delete this bill?</p>
          <div className="modal-action">
            <button
              className="btn btn-error"
              onClick={() => {
                handleDelete(selectedBill._id);
                deleteModalRef.current.close();
              }}
            >
              Yes
            </button>
            <button
              className="btn btn-primary"
              onClick={() => deleteModalRef.current.close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyPayBills;
