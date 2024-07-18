import React from "react";

const UseCases = () => {
  return (
    <div
      name="use_cases"
      className="w-full h-screen bg-slate-600 sm:py-4 py-[45%]"
    >
      <div className="flex mx-auto justify-center items-center py-8">
        <p className="text-2xl border-b-4 font-bold inline border-pink-600 text-gray-300">
          Use Cases
        </p>
      </div>

      <div className="flex flex-col justify-center items-center text-sm sm:text-base">
        <p className="text-2xl font-bold mb-4">Using Fetch API</p>
        <div>
          <p className="text-center font-bold">JavaScript</p>
          <p className=" bg-cover bg-gray-200 text-center max-w-[500px] border-4 rounded-xl">
            <pre>
              <code>
                {`fetch('url')
.then(response => response.json())
.then(data => console.log(data));`}
              </code>
            </pre>
          </p>
        </div>

        <div>
          <p className="text-center font-bold pt-2">React</p>
          <p className="bg-cover bg-gray-200 text-center max-w-[500px] border-4 rounded-xl ">
            <pre>
              <code>
                {`
const response = await fetch("url");
const result = await response.json();
                `}
              </code>
            </pre>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4 text-sm sm:text-base">
        <p className="text-2xl font-bold sm:mb-4 sm:pt-4">Example</p>
        <p>Replace url with</p>
        <p className="bg-cover bg-gray-200 text-center max-w-[550px] sm:px-2 sm:font-semibold rounded text-blue-900">
          http://127.0.0.1/bills/localhost/apis?api-key=2ab0e3066cb7586dd
        </p>
        <p>Or</p>
        <p className="bg-cover bg-gray-200 text-center max-w-[650px] sm:px-2 sm:font-semibold rounded text-blue-900">
          http://127.0.0.1/bills/localhost/apis?api-key=2ab0e3066cb7586dd&limit=10
        </p>
      </div>
    </div>
  );
};

export default UseCases;
