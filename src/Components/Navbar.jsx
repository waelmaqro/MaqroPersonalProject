"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Dropdown, HamburgerMenu } from "flowbite-react";
import useMediaQuery from "./UseMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const hamburgerMenu = useMediaQuery("(max-width: 1179px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");


  const variants = {
    visible: { x: "0%" },
    hidden: { x: "-100%" },
    exit: { x: "-100%" },
    exitActive: { x: 0 },
  };
  
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 90) {
        setColor("#111827");
        setTextColor("#f3f4f6");
      } else {
        setColor("transparent");
        setTextColor("#f3f4f6");
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      {!hamburgerMenu ? (
        <nav  style={{ backgroundColor: color, color: textColor, transition: "background-color 0.3s" }} className={`fixed top-0 w-screen text-lg text-white flex px-10 py-4 justify-between items-center z-40 shadow-sm  `}>
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
            <button className="bg-primary px-6 py-2 text-white rounded-sm">
              Sign in
            </button>
            <button className="px-6 py-2 border-[2px] border-primary text-primary rounded-sm  ">
              Sign up
            </button>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 w-screen bg-gray-900  text-lg text-white  flex px-5 py-4  justify-between items-center z-40" style={{ backgroundColor: color, color: textColor, transition: "background-color 0.3s" }}>
          <button
            className="rounded-full ml-5 mt-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {" "}
            <MenuRounded />{" "}
          </button>
          {isMenuToggled && (
            <AnimatePresence>
              {/* MOBILE MENU POPUP */}
              {isMenuToggled && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  exit="exit"
                  className="fixed left-0 top-0 bottom-0 height[100%] bg-lavender p-2 w-[300px] transition-300 shadow-md  bg-gray-800 "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col gap-10 ml-5 text-2xl  text-primary font-semibold max-w-screen">
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
                    <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                      <Dropdown
                        label="Features"
                        inline={true}
                        className="w-full max-w-[250px]"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </a>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
