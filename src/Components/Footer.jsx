"use client";
import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import { Dropdown } from "flowbite-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-screen overflow-hidden z-[20] py-4">
      <div className="container mx-auto  xxs:px-2  sm:px-6 md:px-6  max-w-[1500px]">
        <div className="lg:grid xxs:flex xxshalf:flex-row xxshalf:justify-between xxs:justify-center xxs:items-center xxshalf:items-start xxs:flex-col  flex-wrap  xxs:text-center lg:text-start lg:items-start  lg:grid-cols-5 gap-2">
          <img src="/porche.png" className="w-[50px] h-[70px]" />
          {/* Product Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  User Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="w-full felx">
            <h2 className="text-lg font-semibold">
              Subscribe to our newsletter
            </h2>
            <a href="#" className="hover:text-gray-300 ">
              For product announcements and exclusive insights
            </a>
            <form className="flex  xxs:flex-col lg:flex-row xxs:justify-center lg:justify-start items-center  my-1 ">
              <div className="relative ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 pl-8 rounded-l-md  focus:ring-2 focus:ring-gray-700 bg-gray-200 flex-grow xxs:w-fit xxs:rounded-r-md lg:rounded-r-none xxs:text-center lg:text-start  text-gray-700 xxs:max-w-[220px] lg:w-[160px]"
                />
                <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                  <EmailIcon className="h-5 w-5 text-gray-700" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-700 py-2 px-6 rounded-r-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary xxs:rounded-l-md lg:rounded-l-none  xxs:w-full flex items-center justify-center xxs:max-w-[220px] lg:w-[80px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex ss:flex-row xxs: xxs:gap-2 flex-col items-center  justify-between overflow-hidden">
          <div className=" bg-gray-700 py-2 px-4 rounded-md relative">
            <Dropdown label="English" inline={true} placement="top" >
              <Dropdown.Item className="min-w-[100px] flex justify-start absolute top-[-50px]">
                Other
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="text-center">
            <p className="text-sm">
              2023 Porche Inc. · Privacy · Terms · Sitemap
            </p>
          </div>

          <div className="flex justify-center items-center gap-1">
            <FacebookIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;