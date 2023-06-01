"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "flowbite-react";
import CustomMediaQuery from "../app/Queries/CustomMediaQuery";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  const routing = useRouter();

  const hamburgerMenu = CustomMediaQuery("(max-width: 1179px)");
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
        <nav
          style={{
            backgroundColor: color,
            color: textColor,
            transition: "background-color 0.3s",
          }}
          className={`fixed top-0 w-screen text-lg text-white flex px-10 py-2 justify-center items-center z-40 shadow-sm   `}
        >
          <div className=" flex justify-between w-full max-w-[1500px]">
            <Link className="min-w-[200px]" href="/">
              <img src="/porche.png" className="max-w-[35px]" />
            </Link>

            <div className="flex justify-center items-center gap-4 ">
              <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                <Dropdown
                  label="Features"
                  inline={true}
                  placement="bottom"
                  className="w-[200px]"
                >
                  <Link href="/features#1">
                    <Dropdown.Item>Feature</Dropdown.Item>
                  </Link>
                  <Link href="/features#2">
                    <Dropdown.Item>Feature</Dropdown.Item>
                  </Link>
                  <Link href="/features#3">
                    <Dropdown.Item>Feature</Dropdown.Item>
                  </Link>
                </Dropdown>
              </div>
              <Link
                href="/pricing"
                className={
                  router === "/pricing" ? "bg-gray-700 rounded-md" : ""
                }
              >
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                  Pricing
                </div>
              </Link>
              <Link
                href="/about-us"
                className={
                  router === "/about-us" ? "bg-gray-700 rounded-md" : ""
                }
              >
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                  About us
                </div>
              </Link>
              <Link
                href="/contact"
                className={
                  router === "/contact" ? "bg-gray-700 rounded-md" : ""
                }
              >
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                  Contact
                </div>
              </Link>
              <Link
                href="/blog"
                className={router === "/blog" ? "bg-gray-700 rounded-md" : ""}
              >
                <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                  Blog
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4 min-w-[200px] opacity-90">
              <button className="hover:bg-gray-700 px-6 py-2 text-white rounded-md min-w-[100px] transition duration-300">
                Sign in
              </button>
              <button className="px-6 py-2  hover:bg-gray-700 text-white rounded-md min-w-[100px] transition duration-300">
                Sign up
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="fixed top-0 w-screen bg-gray-900  text-lg text-white  flex px-5 py-4  justify-between items-center z-40"
          style={{
            backgroundColor: color,
            color: textColor,
            transition: "background-color 0.3s",
          }}
        >
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
                  className="fixed left-0 top-0 bottom-0 height[100%] bg-lavender p-2 w-screen transition-300 shadow-md  bg-gray-800 "
                >
                  {/* CLOSE ICON */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                      <CloseRounded />
                    </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="flex flex-col gap-10 ml-5 text-2xl  text-white font-semibold max-w-screen justify-center items-center">
                    <Link href="/pricing">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Pricing
                      </div>
                    </Link>
                    <hr className="my-2 border-white " />
                    <Link href="/about-us">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        About us
                      </div>
                    </Link>
                    <hr className="my-2 border-gray-700" />
                    <Link href="/contact">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Contact
                      </div>
                    </Link>
                    <hr className="my-2 border-gray-700" />
                    <Link href="/blog">
                      <div className="hover:bg-gray-700 rounded-md py-2 px-4 transition duration-300">
                        Blog
                      </div>
                    </Link>
                    <hr className="my-2 border-gray-700" />
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
                            <Link
                              href="/feature"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/feature"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/feature"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/feature"
                              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Feature
                            </Link>
                          </li>
                        </ul>
                      </Dropdown>
                    </div>
                    <div className="flex items-center gap-4 min-w-[200px] opacity-90 xxs:flex-col xs:flex-row">
                      <button className="bg-primary px-6 py-2 text-white rounded-md min-w-[100px] ">
                        Sign in
                      </button>
                      <button className="px-6 py-2  bg-gray-700 text-white rounded-md min-w-[100px]">
                        Sign up
                      </button>
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