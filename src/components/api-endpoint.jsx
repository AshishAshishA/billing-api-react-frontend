import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import apiurls from "../data/apiurls";

const ApiEndpoint = () => {
  const [copied, setCopied] = useState(-1);
  return (
    <div
      name="api-endpoint"
      className="w-full h-screen bg-slate-600 text-gray-200 "
    >
      <div className="flex mx-auto justify-center items-center sm:pb-4">
        <p className="text-2xl border-b-4 font-bold inline border-pink-600 text-gray-300">
          API Endpoints
        </p>
      </div>

      {apiurls.map((url) => (
        <div className="flex flex-col justify-center items-center gap-4 sm:p-2 mx-2 sm:mx-8 text-sm sm:text-base">
          <p className="text-gray-300">{url.description}</p>
          <p className="text-blue-700 bg-gray-400 sm:font-semibold sm:px-2 bg-cover sm:w-[700px]">
            {url.endpoint}
            <span className="mr-0">
              <div className="inline mx-auto">
                <CopyToClipboard
                  text={url.endpoint}
                  onCopy={() => setCopied(url.id)}
                  className="text-black hover:text-red-600"
                >
                  <button>
                    <FaCopy />
                  </button>
                </CopyToClipboard>

                {copied === url.id && (
                  <span className="font-bold text-green-400">Copied.</span>
                )}
              </div>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ApiEndpoint;
