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
    <header className={` backdrop-blur-md fixed header ${isHeaderVisible ? "visible" : ""}`}>
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
          <ul className={`menu !text-nowrap  transition-all ${isMobileMenuOpen ?
             "open  rounded-bl-xl " : "max-[850px]:translate-x-full "}`}>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">Services</a>
            </li>
            {/* <li><a href="#section3">Pricing</a></li> */}
            <li>
              <a href="#section4">About Us</a>
            </li>
            <li>
              <a href="#section5">Testimonials</a>
            </li>
            <li className="hideListing">
              <a href="#section6">Contact Us</a>
            </li>
          </ul>
          <a className="headBtnContact" href="">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
