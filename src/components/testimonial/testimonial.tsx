import "./testimonial.css";

import group7328 from "../../assets/Group 7328.png";
// import group7227 from '../../assets/Group 7227.png'
import group7227 from "../../assets/testimonials.svg";
import group7254 from "../../assets/Group 7254.png";
import group7329 from "../../assets/Group 7329.png";
import group7330 from "../../assets/Group 7330.png";
import group7331 from "../../assets/Group 7331.png";
import group7332 from "../../assets/Group 7332.png";
import group7338 from "../../assets/Group7338.svg";

const testimonial = () => {
  return (
    <>
      <div className="wrapOuter">
        <div className="wrapOne">
          {/* <div className="pentagon-1"></div>
                    <div className="pentagon-2"></div> */}
          <div className="testWrapperr" id="section5">
            <div className="innerLti">
              <img className="imgTest" src={group7338} alt="" />
              <img className="imgTest" src={group7328} alt="testimonials" />
            </div>
            <div className="innerRti">
              <img
                className="testimonial-image imageTest"
                src={group7227}
                alt="proof"
              />
              {/* <img className='imgTest' src={group7227} alt="proof" /> */}
            </div>
          </div>
          <div className="outWrap">
            <div className="blogwrap">
              {/* <div className="pentagon-3"></div> */}
              <img className="imgTest" src={group7254} alt="" />
              <div className="imgWrapperTest">
                <div className="innerLti">
                  <img className="imgTest" src={group7329} alt="" />
                  <img className="imgTest" src={group7332} alt="" />
                </div>
                <div className="innerRti">
                  <img className="imgTest" src={group7330} alt="" />
                  <img className="imgTest" src={group7331} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default testimonial;
