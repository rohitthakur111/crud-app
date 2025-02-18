import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Logo</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Add Product
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
