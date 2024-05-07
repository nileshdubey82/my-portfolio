import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className=" sm:p-0 sticky top-0 z-10">
      <div className="navbar bg-[#5F0BB8] p-4 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"} className="">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#aboutme" className="">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#contactme" className="">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="/#projects" className="">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-[#FFD700]">NILESH</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className="text-[#fff] text-xl focus:text-white ">
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#aboutme"
                className="text-[#B4B4B4] text-xl focus:text-white"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/#contactme"
                className="text-[#B4B4B4] text-xl focus:text-white"
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="text-[#B4B4B4] text-xl focus:text-white"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-md text-[#5F0BB8]font-bold"
            href="/Images/nilesh_Resume_final.pdf"
            target="_blank"
            download
          >
            Hire me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
