import React, { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const Form = () => {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { username, email, password } = formData;
      const response = await axios.post(
        "https://billing-system-api-1.onrender.com/apis/register/",
        {
          username,
          email,
          password,
        }
      );
      setLoading(false);
      setApiKey(response.data.token);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div
      name="form"
      className="w-full h-screen bg-slate-600 flex justify-center items-center p-4"
    >
      {!apiKey ? (
        <form
          action=""
          className="flex flex-col max-w-[600px] w-full justify-center"
          onSubmit={handleSubmit}
        >
          <div className="pb-8 flex flex-col justify-center items-center ">
            <p className="text-2xl border-b-4 font-bold inline border-pink-600 text-gray-300">
              API KEY FORM
            </p>
            <p className="text-gray-300 py-4">
              // Submit the form below to generate the api_key
            </p>
          </div>

          <input
            className="bg-[#ccd6f6]"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            className="p-2 bg-[#ccd6f6]"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="px-4 py-2 my-4 border-4 border-pink-600 mx-auto hover:bg-pink-600"
          >
            Genearte Key
          </button>
        </form>
      ) : (
        <div className="flex flex-col max-w-[600px] h-4 my-[30%] items-center">
          <div className="flex flex-col justify-center items-center p-4">
            <h3 className="text-xl font-bold ">API KEY GENERATED</h3>
            <p className="text-center text-pink-600 p-2">
              Please Copy the api-key. You will have only one API Key on one
              username and email
            </p>
          </div>

          <div className="flex flex-row">
            <input
              value={apiKey}
              className="sm:min-w-[400px] w-full px-2 border-2 border-black rounded"
            />

            <div>
              <CopyToClipboard
                text={apiKey}
                onCopy={() => setCopied({ copied: true })}
              >
                <button>
                  <FaCopy />
                </button>
              </CopyToClipboard>

              {copied && (
                <span className="font-bold text-green-400">Copied.</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
