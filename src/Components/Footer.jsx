'use client'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Dropdown } from 'flowbite-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white bottom-0 w-screen overflow-hidden">
      <div className="container mx-auto py-8 px-4 xxs:px-2  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">User Guides</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Webinars</a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className='max-w-screen'>
            <h2 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h2>
            <form className="flex  xxs:flex-col xxshalf:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-200 flex-grow max-w-full"
              />
              <button
                type="submit"
                className="bg-primary py-2 px-6 rounded-r-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className='flex ss:flex-row xxs: xxs:gap-2 flex-col items-center  justify-between'>
          <div className=' bg-gray-700 py-2 px-4 rounded-md'>
            <Dropdown label="English" inline={true}>
              <Dropdown.Item className='min-w-[100px] flex justify-start'>
                Other
              </Dropdown.Item>
            </Dropdown>
          </div>

        <div className="text-center">
          <p className="text-sm">
           2023 Porche Inc. · Privacy · Terms · Sitemap
          </p>
        </div>

        <div className='flex justify-center items-center gap-1'>
        <FacebookIcon/>
        <LinkedInIcon />
        <YouTubeIcon />
        </div>
        </div>


      </div>
     
    </footer>
  );
};

export default Footer;