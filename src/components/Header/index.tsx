"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import ExportedImage from "next-image-export-optimizer";
import logo from "./images/logo.png";
import { useClickAway } from "@uidotdev/usehooks";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const ref = useClickAway<HTMLElement>(() => {
    setNavbarOpen(false);
  });

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();

  const [spin, setSpin] = useState(false);
  const onLogoClick = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };

  return (
    <>
      <header
        className={`left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-black !bg-opacity-80 backdrop-blur-sm transition"
            : "absolute bg-black"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="max-w-full px-4 xl:mr-6">
              <Link
                href="/"
                onClick={onLogoClick}
                className={`block w-full ${sticky ? "py-5 lg:py-2" : "py-4"} `}
              >
                <ExportedImage
                  src={logo}
                  alt="logo"
                  width={60}
                  priority
                  className={
                    spin ? "animate-[spin_1s_linear_1]" : "animate-pulse"
                  }
                  placeholder="empty"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div className="w-full">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  ref={ref}
                  className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-black px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:w-full lg:space-x-6">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className="group relative last:!ml-auto last:text-primary"
                      >
                        <Link
                          href={menuItem.path}
                          onClick={navbarToggleHandler}
                          className={`flex py-2 text-lg font-bold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            usePathName === menuItem.path
                              ? "underline decoration-primary decoration-2 underline-offset-8"
                              : ""
                          }`}
                        >
                          {` ${menuItem.title} `}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
