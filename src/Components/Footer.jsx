import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";



const Footer = () => {


  return (
    <footer className="bg-gray-900 text-white  pt-[100px]">
      
      <div className="container mx-auto px-4">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:items-start lg:gap-[100px] lg:justify-center">
        <div>
        <img src="/porche.png" className="w-[50px]" alt=""/>
      </div>
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
                <Link href="/webinars" className="hover:text-gray-300">
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
            <h2 className="text-lg font-semibold mb-4 max-w-[420px]">Subscribe</h2>
            <p className="mb-2">
              For product announcements and exclusive insights
            </p>
            <form className="flex items-center lg:w-[420px] ">
              <div className="relative flex-grow ">
                <input
                  type="email"
                  placeholder="Input your email"
                  className="py-2 pl-8 pr-4  focus:ring-2 focus:ring-gray-700 bg-gray-200  text-gray-700 w-full"
                />
                <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                  <EmailIcon className="h-5 w-5 text-gray-700" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gray-700 py-2 px-6 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-8 border-gray-700" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-6 ">
          <div>
            English
          </div>
          <p className="text-sm">
            &copy; 2023 Porsche Inc. &middot; Privacy Policy &middot; Terms of Service &middot; Sitemap
          </p>

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