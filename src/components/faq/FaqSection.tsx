// FaqSection.tsx
import React, { useState } from "react";
import "./FaqSection.css"; // Import your CSS for styling (you can create this file)
import group7333 from "../../assets/Group 7333.png";
import group7234 from "../../assets/Group 7234.png";
import group7339 from "../../assets/Group 7339.svg";
import frameSvg from "../../assets/Frame.svg";
import { motion as m } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <m.div 
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 0.8 ,}}
      whileInView={{ opacity: 1, y: 0, }}
      viewport={{once:true}}
      className="faqWrapper">
        <div className="innerSEC">
          <div className="innerLtSec">
            <div className="innerRtSec">
              <img className="faqImgquestio" src={group7234} alt="" />
            </div>
            <img className="faqImg" src={group7333} alt="" />
            <img className="faqImgquestionn" src={group7339} alt="" />
          </div>
          <div className="faq-section">
            {faqItems.map((item, index) => (
              <div className="faq-item transition-all" key={index}>
                <div
                  className={`faq-question transition-all ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                </div>
                {/* {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )} */}

                <div
                  className={`transition-all overflow-hidden flex faq-answer h-[100px] 
                    ${activeIndex !== index && " !h-[0px] !m-0  "}`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
            <img className="faq-sectionImg" src={frameSvg} alt="" />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default FaqSection;
