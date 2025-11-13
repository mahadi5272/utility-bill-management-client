import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer"
import { ToastContainer } from "react-toastify";

const LayOut = () => {
  return <>
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
            <ToastContainer />
        </footer>

    </div>
  </>;
};

export default LayOut;
