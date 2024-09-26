import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiIndianPalace } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-8 my-8 font-Gaegu text-lg font-bold">
      {/* Italian */}
      <div className="flex flex-col items-center">
        <NavLink
          to={"/cuisine/Italian"}
          className={({ isActive }) =>
            `p-3 sm:p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ${
              isActive ? "bg-purple-900" : "bg-black-100"
            }`
          }
        >
          <FaPizzaSlice className="text-white text-2xl sm:text-3xl" />
        </NavLink>
        <h4 className="mt-2 text-lg font-semibold text-gray-700">Italian</h4>
      </div>

      {/* American */}
      <div className="flex flex-col items-center">
        <NavLink
          to={"/cuisine/American"}
          className={({ isActive }) =>
            `p-3 sm:p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ${
              isActive ? "bg-purple-900" : "bg-black-100"
            }`
          }
        >
          <FaHamburger className="text-white text-2xl sm:text-3xl" />
        </NavLink>
        <h4 className="mt-2 text-lg font-semibold text-gray-700">American</h4>
      </div>

      {/* Thai */}
      <div className="flex flex-col items-center">
        <NavLink
          to={"/cuisine/Thai"}
          className={({ isActive }) =>
            `p-3 sm:p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ${
              isActive ? "bg-purple-900" : "bg-black-100"
            }`
          }
        >
          <GiNoodles className="text-white text-2xl sm:text-3xl" />
        </NavLink>
        <h4 className="mt-2 text-lg font-semibold text-gray-700">Thai</h4>
      </div>

      {/* Japanese */}
      <div className="flex flex-col items-center">
        <NavLink
          to={"/cuisine/Japanese"}
          className={({ isActive }) =>
            `p-3 sm:p-4 rounded-full shadow-md hover:scale-110 transition-transform duration-200 ${
              isActive ? "bg-purple-900" : "bg-black-100"
            }`
          }
        >
          <GiChopsticks className="text-white text-2xl sm:text-3xl" />
        </NavLink>
        <h4 className="mt-2 text-lg font-semibold text-gray-700">Japanese</h4>
      </div>
    </div>
  );
};

export default Category;
