import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">Your Logo</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`${
                    pathname == "/"
                      ? "text-blue-300"
                      : "hover:text-blue-300 transition"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/add-product"
                  className={`${
                    pathname == "/add-product"
                      ? "text-blue-300"
                      : "hover:text-blue-300 transition"
                  }`}
                >
                  Add Product
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
