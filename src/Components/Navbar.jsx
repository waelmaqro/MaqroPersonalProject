"use client";
import React from "react";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen bg-gray-800  text-lg text-white  flex px-5 py-4  justify-between items-center">
      <div className="min-w-[200px]">Logo</div>

      <div className="flex justify-center items-center gap-4 ">
        <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
          <Dropdown label="Features" inline={true} className="w-[200px]">
            <Dropdown.Item>Feature</Dropdown.Item>
            <Dropdown.Item>Feature</Dropdown.Item>
            <Dropdown.Item>Feature</Dropdown.Item>
          </Dropdown>
        </div>
        <Link href="/">
          <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
            Pricing
          </div>
        </Link>
        <Link href="/">
          <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
            About us
          </div>
        </Link>
        <Link href="/">
          <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
            Contact
          </div>
        </Link>
        <Link href="/">
          <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
            Blog
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4 min-w-[200px]">
        <button className="bg-primary px-6 py-2 text-white rounded-md">Sign in</button>
        <button className="px-6 py-2 border-[2px] border-primary text-primary rounded-md">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
