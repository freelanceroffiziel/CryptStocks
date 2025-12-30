import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { TiArrowSortedUp } from "react-icons/ti";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [regisOpen, setRegisOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header id="" className="">
      <nav id="" className="">
        <div
          id="destop"
          className="fixed top-0 left-0 z-50 w-full hidden shadow-md lg:flex flex-row justify-between items-center px-20 py-3 text-[20px] bg-black text-gray-200 font-sans"
        >
          <Link to={""}>
            <span className="text-[30px] font-extrabold ">
              Crypt<span className="font-bold text-orange-600">Stocks</span>
            </span>
          </Link>

          <ul className="flex flex-row items-center justify-between gap-10 px-3 py-2 tracking-wider text-black bg-white rounded-full ring-2 ring-gray-200 ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                    : "px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                    : "px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Feeds"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                    : "px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                }
              >
                Feeds
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Plans"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                    : "px-3 py-1  rounded-full text-[18px] md:text-[30px] lg:text-[18px] shadow-md"
                }
              >
                Plans
              </NavLink>
            </li>
          </ul>

          <div 
            // role="dialog"
            // onClick={(e) e.stopPropagation()}
           id="regis" className="relative">
            <button
              className="flex flex-row items-center justify-center "
              onClick={() => setRegisOpen(!regisOpen)}
            >
              Account
              <TiArrowSortedUp
                className={`transition-transform duration-200 text-[20px] ${
                  regisOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {regisOpen && (
              <div 
                 onClick={() => setRegisOpen(false)}
               className="absolute right-0 z-50 flex flex-col gap-2 px-4 py-2 mt-2 text-black bg-white rounded-md shadow-lg">
                <Link
                  to={'/Login'}
                  className="font-medium transition duration-200 hover:text-orange-600 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to={'/Register'}
                  className="font-medium transition duration-200 hover:text-orange-600 hover:underline"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* mediavIEW */}
        <div
          id="media"
          className="fixed shadow-md left-0 top-0 z-50 w-full lg:hidden flex flex-row justify-between items-center px-6 py-4 md:py-6 text-[20px] bg-black text-gray-300 font-sans"
        >
          <Link to={""}>
            <span className="text-[30px] md:text-[35px] font-extrabold ">
              Crypt<span className="font-bold text-orange-600">Stocks</span>
            </span>
          </Link>

          {/* Hamburger */}
          <div className="text-[40px] ">
            {hamburgerOpen ? (
              <RiCloseLine
                onClick={() => setHamburgerOpen(false)}
                className="transition transform hover:scale-105"
              />
            ) : (
              <RiMenuLine
                onClick={() => setHamburgerOpen(true)}
                className="transition transform hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* hamburger logic sec */}
        {hamburgerOpen && (
          <section className="relative ">
            <ul className="fixed top-0 z-40 left-0 pt-28 bg-black  w-full h-[80vh] text-gray-100 flex flex-col items-center gap-4">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                      : "px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/About"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                      : "px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Feeds"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                      : "px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                  }
                >
                  Feeds
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Plans"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-gray-100 px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                      : "px-3 py-1  rounded-full text-[25px] md:text-[30px] lg:text-[18px] shadow-md"
                  }
                >
                  Plans
                </NavLink>
              </li>

              {/* regisBelow */}
              <div id="regis" className="relative">
                <button
                  className="flex flex-row items-center justify-center text-[30px] md:text-[30px] lg:text-[18px]  "
                  onClick={() => setRegisOpen(!regisOpen)}
                >
                  Account
                  <TiArrowSortedUp
                    className={`transition-transform duration-200 text-[20px] ${
                      regisOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {regisOpen && (
                  <div className="absolute z-50 flex flex-col gap-2 px-6 py-4 mt-2 text-black -translate-x-1/2 bg-white rounded-md shadow-lg left-1/2">
                    <Link
                      to="/login"
                      className="font-semibold text-center transition duration-200 hover:text-orange-600 hover:underline"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="font-semibold text-center transition duration-200 hover:text-orange-600 hover:underline"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </section>
        )}
      </nav>
    </header>
  );
};

export default Header;
