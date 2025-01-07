import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/TrableLogo.png";
import { Button } from "../../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

import { logout } from "@/services/AuthApiService";
import { FaHeart, FaSignOutAlt, FaUser } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useAuthContext();

  const handleLogout = async () => {
    const data = await logout();
    if (data?.success) {
      toast.success(data?.message);
      sessionStorage.clear();
      localStorage.clear();
      setUser(null);
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Travel
              <span className="text-yellow-500 font-bold text-3xl">24</span>
            </span>
          </Link>

          {/* User and Mobile Menu Button */}

          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
            {/* User Dropdown */}
            {user ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.image}
                      alt="user"
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-44 mr-3 flex flex-col gap-y-2 p-0 mt-4">
                  <Link
                    to="/profile"
                    className="flex gap-3 items-center hover:bg-[#E0E0ED] hover:text-white p-2 cursor-pointer"
                  >
                    <FaUser />
                    <p>Profile</p>
                  </Link>
                  <Link
                    to="/my-booking"
                    className="flex gap-3 items-center hover:bg-blue-400 hover:text-white p-2 cursor-pointer"
                  >
                    <IoBookmarks />
                    <p>My Booking</p>
                  </Link>
                  <Link
                    to="/my-fevoruite"
                    className="flex gap-3 items-center hover:bg-blue-400 hover:text-white p-2 cursor-pointer"
                  >
                    <FaHeart />
                    <p>Saved</p>
                  </Link>
                  <div
                    onClick={handleLogout}
                    className="flex gap-3 items-center hover:bg-blue-400 hover:text-white p-2 cursor-pointer"
                  >
                    <FaSignOutAlt />
                    <p>Sign Out</p>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link to="/login">
                <Button className="bg-blue-500 hover:bg-blue-900 transition-all duration-200">
                  Signin
                </Button>
              </Link>
            )}

            
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`items-center justify-between ${
              isMobileMenuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
