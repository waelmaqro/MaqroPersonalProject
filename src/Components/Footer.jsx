'use client'
import React, {useState} from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";


const Footer = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white  pt-[100px]">
      
      <div className="container mx-auto px-4">
    
        <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:flex items-start lg:gap-[100px] lg:justify-center xs:justify-items-center md:justify-between ">
        <div>
        <img src="/porche.png" className="w-[50px]" alt=""/>
      </div>
          {/* Product Section */}
          <div>
            <h2 className="text-2xl  font-semibold mb-4">Product</h2>
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
            <h2 className="text-2xl  font-semibold mb-4">Resources</h2>
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
                <Link href="/webinars" className="hover:text-gray-300">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h2 className="text-2xl  font-semibold mb-4 max-w-[420px]">Subscribe</h2>
            <p className="mb-2">
              For product announcements and exclusive insights
            </p>
            <form className="flex justify-center items-center lg:w-[420px] xxs:flex-col md:flex-row">
              <div className="relative flex-grow w-full ">
                <input
                  type="email"
                  placeholder="Input your email"
                  className="py-2 pl-8 pr-4  focus:ring-2 focus:ring-gray-700 bg-gray-200  text-gray-700 xxs:w-full md:w-full xxs:text-center md:text-start"
                />
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <EmailIcon className="h-5 w-5 text-gray-700" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-700 py-2 px-6 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary xxs:w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-8 border-gray-700" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-6 gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="relative flex items-center gap-5 bg-gray-700 py-2 px-4">
            English
            {isOpen &&
            <div className="bg-gray-700 py-2 text-white text-opacity-80 absolute top-[-50px] left-0 px-4">
              Languages
            </div>}
            {isOpen ? <KeyboardArrowUp /> :  <KeyboardArrowDown/> }
          </button>
          <div className="text-sm text-center  ">
            &copy; 2023 Porsche Inc. &middot; Privacy Policy &middot; Terms of Service &middot; Sitemap
          </div>

          <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
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