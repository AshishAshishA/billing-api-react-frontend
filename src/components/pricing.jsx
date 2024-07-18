import React from "react";

const Pricing = () => {
  return (
    <div
      name="pricing"
      className="w-full h-screen flex flex-col justify-center bg-slate-600 text-gray-400 text-2xl font-bold pt-[20%] sm:pt-2"
    >
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-center text-gray-300 border-b-4 border-pink-600 inline">
          Pricing
        </h1>
        <h3 className="text-center text-xl  p-4">
          Currently no premium feature available for this API store. If we will
          have in future you will be notified.
        </h3>
      </div>
    </div>
  );
};

export default Pricing;
