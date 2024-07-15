import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white fixed top-0 w-full z-[10001] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex md:flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              onClick={() => {
                setShowMobileMenu(false);
                window.location.href = "/";
              }}
              className="flex flex-shrink-0 items-center mr-4 "
              to="/"
            >
              <img
                className="h-10 md:h-6 lg:h-10 w-auto "
                src={Logo}
                alt="Internee.pk"
              />
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-[#21282E] hover:text-[#4a4b4b] transition-all duration-300 ease-in-out"
            >
              {showMobileMenu ? (
                <IoClose className="text-[30px]" />
              ) : (
                <RxHamburgerMenu className="text-[30px]" />
              )}
            </button>
          </div>

          <div className="flex items-center hidden md:block">
            <div className="md:ml-auto">
              <ul className="flex text-[12px] lg:text-[16px] font-bold h-[50px] items-center text-[#21282E]">
               
                <li>
                  <NavLink
                    to="/internship"
                    className={`m-1 xl:m-2 px-1 lg:px-3 xl:px-4 hover:text-[#777f7f] transition-all duration-300 ease-in-out
                    ${
                      location.pathname === "/internship"
                        ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                        : ""
                    }
                    `}
                  >
                    Internship
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/company"
                    className={`m-1 xl:m-2 px-1 lg:px-3 xl:px-4 hover:text-[#777f7f] transition-all duration-300 ease-in-out
                    ${
                      location.pathname === "/company"
                        ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                        : ""
                    }
                    `}
                  >
                    Company Collaboration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={`m-1 xl:m-2 px-1 lg:px-3 xl:px-4 hover:text-[#777f7f] transition-all duration-300 ease-in-out
                    ${
                      location.pathname === "/contact"
                        ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                        : ""
                    }
                    `}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <button className="mx-2 lg-mx-4 w-24 text-md lg:w-36 py-[14px] bg-[#43a724] hover:bg-[#54c632] text-white rounded-[25px] transition-all duration-300 ease-in-out">
                    <Link to="/job">Job Portal</Link>
                  </button>
                </li>
                <li>
                  <button className="mx-2 lg:m-4 w-24 text-md lg:w-40 py-[14px] bg-white text-[#43a724] hover:text-[#86db6ccd] rounded-[25px] border-solid border-[#43a724] border-2 transition-all duration-300 ease-in-out">
                    <Link to="/login">Internee&apos;s Login</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium  hover:text-[#43a724] hover:bg-gray-50
              ${
                location.pathname === "/"
                  ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                  : ""
              }
                    `}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/internship"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-[#43a724] hover:bg-gray-50
              ${
                location.pathname === "/internship"
                  ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                  : ""
              }
                    `}
            >
              Internship
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/company"
              className={`block px-3 py-2 rounded-md text-base font-medium  hover:text-[#43a724] hover:bg-gray-50
              ${
                location.pathname === "/company"
                  ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                  : ""
              }
                    `}
            >
              Company Collaboration
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium  hover:text-[#43a724] hover:bg-gray-50
              ${
                location.pathname === "/contact"
                  ? "text-semibold text-[#43a724] underline text-[1.1rem]"
                  : ""
              }
                    `}
            >
              Contact Us
            </NavLink>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#43a724] hover:bg-gray-50"
            >
              <Link to="/home">Job Portal</Link>
            </button>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#43a724] hover:bg-gray-50"
            >
              <Link to="/login">Internee&apos;s Login</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
