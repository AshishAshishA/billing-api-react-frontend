import React from "react";
import BillImage from "../assets/billing-image1.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-600">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl items-start mt-[50px]">Fake Customer API</h1>
        <p className="text-gray-300 text-center py-4">
          Fake store rest API for your e-commerce or shopping website prototype
        </p>
        <img
          src={BillImage}
          alt="billImage"
          style={{ height: "200px", width: "200px" }}
        />

        <p className="text-pink-600 font-bold text-xl sm:text-2xl">
          Didn't you find any free customer API?!
        </p>
        <p className="text-gray-300 py-4 max-w-[700px] text-center">
          fakeCustomerApi is a free online REST API that you can use whenever
          you need Pseudo-real data for your e-commerce or shopping website
          without running any server-side code. It's awesome for teaching and
          testing purposes, sample codes, tests, etc.
        </p>
      </div>
    </div>
  );
};

export default Home;
