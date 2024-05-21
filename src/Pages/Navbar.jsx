import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../Redux/Slices/ThemeSlice";
function Navigation() {
  const theme = useSelector((state) => { return state.ThemeSlice });
  const dispatch = useDispatch();
  return (
    <div className=" sm:p-0 sticky top-0 z-10">
      <div className="navbar bg-[#5F0BB8] dark:bg-[#263238] p-4 rounded-xl dark:text-[#CFD8DC]">
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
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to={"/"} className="text-[#fff] dark:text-[#CFD8DC] text-xl focus:text-white ">
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#aboutme"
                className="text-[#B4B4B4] text-xl focus:text-white dark:text-[#CFD8DC]"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="/#contactme"
                className="text-[#B4B4B4] text-xl focus:text-white dark:text-[#CFD8DC]"
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="text-[#B4B4B4] text-xl focus:text-white dark:text-[#CFD8DC]"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="text-4xl text-white dark:text-[#CFD8DC]"
            onClick={() => {
              dispatch(changeTheme())
            }
            }

          >
            {theme ? <><CiLight /></> : <><MdDarkMode /></>}
          </button>
          <a
            className="btn btn-md text-[#5F0BB8] font-bold hireme dark:text-[#000000] "
            href="mailto:nileshdubey060@gmail.com"
            target="_blank"

          >
            Hire me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
