import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <nav className="flex items-center space-x-2 p-2 mb-8 mt-4">
      <Link
        to="/"
        className="flex items-center text-xl text-gray-800 hover:text-gray-600"
      >
        <GiKnifeFork className="text-xl" />
        <h1 className="font-LobsterTwo text-xl font-bold ml-2">deliciouss</h1>
      </Link>
    </nav>
  );
};

export default Logo;
