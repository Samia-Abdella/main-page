import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Search = () => {
  return (
    <>
      {/* <div>Search</div> */}

      <form className="flex flex-row items-center ">
        <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3">
          <input
            className="bg-gray-100 outline-none text-sm flex-1 transition duration-500 ease-in-out "
            type="password"
            placeholder="Search cities"
          />
          <BiSearchAlt className="text-green-400 text-lg mt-2 mb-2 " />
        </div>
        <button
          class="border-2 border-green-400 text-green-400 rounded-full w-2 flex items-center justify-center text-center md:px-8 text-sm py-2 font-semibold hover:bg-green-400 hover:text-white ml-3 mb-3 hover:mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
