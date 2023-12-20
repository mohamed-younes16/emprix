import "./footer.css";
import { useState } from "react";
import rec197 from "../../assets/Rectangle 197.png";
import vec1 from "../../assets/Vector (1).png";
import vec2 from "../../assets/Vector (2).png";
import vec3 from "../../assets/Vector (3).png";
import vec4 from "../../assets/Vector (4).png";
import PrivacyPolicy from "../privacyPolicy/privacyPolicy";
import TermsAndConditions from "../privacyPolicy/termsCondition";

const footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTermsConditionOpen, setIsTermsConditionOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openTermsConditionPopup = () => {
    setIsTermsConditionOpen(true);
  };

  const closeTermsConditionPopup = () => {
    setIsTermsConditionOpen(false);
  };

  return (
    <>
      <div className="footerWrappr  mt-28">
        <div className="topRow">
          <img className="imgFoot" src={rec197} alt="" />
          <p className="pFooter">
            We create custom plans for established online shops on social media.
            <br></br> Our team of experts helps improve your brand's online
            experience. <br></br>Let us enhance your business with special
            strategies made just for you.
          </p>
          <div className="socialGrp flex ">
            <img
              src={vec1}
              alt=""
              className=" transition-all hover:scale-110 cursor-pointer"
            />
            <img
              src={vec2}
              alt=""
              className=" transition-all hover:scale-110 cursor-pointer"
            />
            <img
              src={vec3}
              alt=""
              className=" transition-all hover:scale-110 cursor-pointer"
            />
            <img
              src={vec4}
              alt=""
              className=" transition-all hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
        <div className="btmRow  text-white flex justify-center gap-5 p-3 !bg-black">
          <div className="">
            <p>
              © 2023 &nbsp; <span className="spanfot"> Emprix Marketing</span>{" "}
              &nbsp; All Rights Reserved
            </p>
          </div>
          <div className="innerRtt space-x-3 !text-white">
            <ul>
              <li>
                <a
                  className="terms-and-condition-button !text-white"
                  onClick={openTermsConditionPopup}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="privacy-policy-button !text-white"
                  onClick={openPopup}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <PrivacyPolicy isOpen={isPopupOpen} onClose={closePopup} />
        <TermsAndConditions
          isOpen={isTermsConditionOpen}
          onClose={closeTermsConditionPopup}
        ></TermsAndConditions>
      </div>
    </>
  );
};
export default footer;
