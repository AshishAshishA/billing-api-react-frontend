import React, { useState } from "react";
import logo from "../assets/icons8-half-rest-100.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <div
      name="navbar"
      className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0A192f] text-gray-300"
    >
      <div className=" ">
        <img src={logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="hidden sm:flex gap-4">
          <li>
            <Link to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="form" smooth={true}>
              Api Key
            </Link>
          </li>
          <li>
            <Link to="api-endpoint" smooth={true}>
              Api Endpoints
            </Link>
          </li>
          <li>
            <Link to="use_cases" smooth={true}>
              Use Cases
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="z-10">
        {isHidden ? (
          <TfiAlignJustify className="flex sm:hidden" />
        ) : (
          <IoClose />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          isHidden
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0A192f] gap-10 font-bold text-2xl"
        }
      >
        <li>
          <Link to="home" smooth={true} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="form" smooth={true} onClick={handleClick}>
            Api Key
          </Link>
        </li>
        <li>
          <Link to="api-endpoint" smooth={true} onClick={handleClick}>
            Api Endpoints
          </Link>
        </li>
        <li>
          <Link to="use_cases" smooth={true} onClick={handleClick}>
            Use Cases
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} onClick={handleClick}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
