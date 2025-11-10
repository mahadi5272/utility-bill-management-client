import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer"

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
        </footer>

    </div>
  </>;
};

export default LayOut;
