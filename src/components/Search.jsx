import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="mx-4 sm:mx-8 md:mx-20 flex items-center bg-gradient-to-r from-gray-800 to-black p-2 sm:p-3 px-4 sm:px-5 rounded-2xl"
    >
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent text-white outline-none flex-1 placeholder-gray-400"
      />
    </form>
  );
};

export default Search;
