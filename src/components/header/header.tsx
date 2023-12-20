// Header.tsx
import React, { useState, useEffect } from "react";
import "./header.css";
import IMAGErt from "../../assets/Rectangle196.png";
import IMAGElt from "../../assets/Rectangle199.png";

const Header: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHeaderVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` backdrop-blur-md fixed header ${
        isHeaderVisible ? "visible" : ""
      }`}
    >
      <nav className="nav  ">
        <div className="logo min-w-[200px] ">
          <img className="imgBbar" src={IMAGElt} alt="" />
          <img className="imgBbarLt" src={IMAGErt} alt="" />
        </div>
        <div
          className={`hamburger z-50 ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="aderNavWrap">
          <ul
            className={`menu !text-nowrap !gap-0 transition-all ${
              isMobileMenuOpen
                ? "open  rounded-bl-xl overflow-hidden max-[850px]:shadow-2xl max-[850px]:shadow-black"
                : "max-[850px]:translate-x-full "
            }`}
          >
            <li className="group relative overflow-hidden">
              <a href="#section1">Home</a>
              <div
                className="absolute h-1 -bottom-0 w-full transition-all  
               -left-full group-hover:left-0 bg-cyan-600 "
              />
            </li>
            <li className="group relative overflow-hidden">
              <a href="#section1">Services</a>
              <div
                className="absolute h-1 -bottom-0 w-full transition-all  
               -left-full group-hover:left-0 bg-cyan-600 "
              />
            </li>
            <li className="group relative overflow-hidden">
              <a href="#section1">Testimonials</a>
              <div
                className="absolute h-1 -bottom-0 w-full transition-all  
               -left-full group-hover:left-0 bg-cyan-600 "
              />
            </li>
        

            <li className="group relative overflow-hidden">
              <a href="#section1">About Us</a>
              <div
                className="absolute h-1 -bottom-0 w-full transition-all  
               -left-full group-hover:left-0 bg-cyan-600 "
              />
            </li>

            {/* <li><a href="#section3">Pricing</a></li> */}
            
          </ul>
          <a className="headBtnContact hover:scale-105 active:scale-95 transition-all" href="#section6">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
