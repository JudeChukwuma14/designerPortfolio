"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "ABOUT", id: "about" },
    { name: "TESTIMONIAL", id: "testimonial" },
    { name: "CONTACT", id: "contact" },
  ];
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScroll = (id) => {
    setIsOpen(false);
    if (router.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
      }
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
          }
        }, 500);
      });
    }
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <>
    <nav
      ref={menuRef}
      className="bg-[#68412B] shadow-md py-2  xl:container mx-auto font-georgia xl:text-xl"
    >
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/")}
          className="ml-6 text-xl font-bold text-gray-800"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="md:w-[80px] "
            priority
          />
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex md:space-x-1 lg:space-x-4 xl:space-x-10 lg:mr-8 xl:ml-20 2xl:space-x-[80px] text-[#ffffff]">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleScroll(item.id)}
                className="block py-2 px-4 transition hover:text-[#FFFFFF] text-[12px] lg:text-[14px] xl:text-[20px] font-cinzel cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
          
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden space-x-4 md:flex">
          <button
            onClick={() => handleNavigation("/services/Services")}
            className="text-[#333333] bg-[#9D7F62] py-3 px-6 transition hover:scale-105 text-[12px] lg:text-[16px] xl:text-[22px] font-georgia"
          >
            Walk With Us
          </button>
          {status !== "loading" && session && (
            <button
              onClick={() => signOut()}
              className="px-6 py-3 text-white transition bg-red-500 hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col bg-[#FFF6F1] text-[#333333] shadow-md px-4 py-4 space-y-2">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleScroll(item.id)}
                className="block py-2 px-4 transition hover:text-[#0A2A31] text-[14px]"
              >
                {item.name}
              </button>
            </li>
          ))}
         
          <div className="pt-2">
            
            {session && (
              <button
                onClick={() => signOut()}
                className="w-full py-3 mt-2 text-white transition bg-red-500 hover:scale-105"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </nav>

    <div className="md:hidden">
    <button
              onClick={() => handleNavigation("/services/Services")}
              className="w-full text-[#333333] bg-[#9D7F62] py-3 transition hover:scale-105 font-georgia"
            >
              Walk With Us
            </button>
    </div>
    </>
  );
};

export default Navbar;
