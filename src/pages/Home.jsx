import BillCard from "../component/BillCard";
import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Cetagory from "./Cetagory";
import { useContext, useEffect } from "react";
import { AuthContext } from "../routes/AuthProvider";

const Home = () => {
  useEffect(()=>{
    document.title = "Home | UBM System"
  },[])
  const bill = useLoaderData();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60px] bg-black text-white">
        <span className="loading loading-spinner loading-md"></span>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  console.log(bill);
  return (
    <div>
      <Banner />
      <Cetagory />

      {/* Recent Bills Section */}
      <div className="grid  gap-6 p-20 md:grid-cols-3 ">
        {bill.map((bill) => (
          <BillCard bill={bill} key={bill._id} />
        ))}
      </div>

      {/* ----------------- Extra Section 1: How It Works ----------------- */}
      <section className="py-20 ">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="p-6 bg-gray-100 rounded-xl text-center shadow-md">
            <h3 className="text-xl font-semibold mb-2">Select Bill Type</h3>
            <p>Choose your category: Electricity, Gas, Water, or Internet.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl text-center shadow-md">
            <h3 className="text-xl font-semibold mb-2">Enter Details</h3>
            <p>Provide your account info, address, and phone number.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl text-center shadow-md">
            <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
            <p>Pay securely online and get your receipt instantly.</p>
          </div>
        </div>
      </section>

      {/* ----------------- Extra Section 2: Testimonials ----------------- */}
      <section className="py-20 ">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic text-gray-700 mb-3">
              “Paying my electricity and water bills online has never been this
              easy!”
            </p>
            <h4 className="font-semibold">Rahim</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic text-gray-700 mb-3">
              “Fast, secure, and convenient — I love this website!”
            </p>
            <h4 className="font-semibold">Karim</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic text-gray-700 mb-3">
              “All my utility payments now happen in minutes, no hassle at all.”
            </p>
            <h4 className="font-semibold">Amina</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
