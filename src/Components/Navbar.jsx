'use client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-screen bg-gray-800 py-3 text-lg text-white font-semibold flex justify-between items-center px-5'>
      <div>Logo</div>

      <div className='flex justify-center items-center gap-4'>
        <Link href='/'>
          <div className='hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300'>
            Features
          </div>
        </Link>
        <Link href='/'>
          <div className='hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300'>
            Pricing
          </div>
        </Link>
        <Link href='/'>
          <div className='hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300'>
            About us
          </div>
        </Link>
        <Link href='/'>
          <div className='hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300'>
            Contact
          </div>
        </Link>
        <Link href='/'>
          <div className='hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300'>
            Blog
          </div>
        </Link>
      </div>

      <div className='flex justify-between items-center gap-4'>
        <button className='bg-primary px-6 py-2 text-white'>Sign in</button>
        <button className='px-6 py-2 border-[2px] border-primary text-primary'>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;