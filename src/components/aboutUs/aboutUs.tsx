import "./aboutus.css";

import group7223 from "../../assets/Group 7223.png";
import group7316 from "../../assets/Group 7316.svg";
import group7322 from "../../assets/Group 7322.png";
import group7325 from "../../assets/Group 7325.png";
import group7323 from "../../assets/Group 7323.png";
import group7324 from "../../assets/Group 7324.png";
import group7326 from "../../assets/Group 7326.svg";
import german from "../../assets/GermanCar.svg";

const aboutUs = () => {
  return (
    <>
      <div className="pWrapTopSec">
        {/* <div className="pentagon-1"></div> */}
        <div className="rowTopAbout" id="section4">
          <div className="colLt">
            <img className="colLtImg" src={group7316} alt="" />
          </div>
          <div className="colRT">
            <img src={group7223} alt="" />
            <img className="colLtImgMobile" src={group7316} alt="" />
            <p>
              At <span className="emprix-marketing">Emprix Marketing</span>,
              we're really good at boosting online stores using unique plans for
              Facebook. Our skilled team mixes captivating stories with data to
              make sure your brand connects with the right people. We've helped
              many established online stores grow on Facebook. We don't just
              show ads; we create stories. Start a personalized marketing
              journey with us, made just for your brand. Come with us and make
              your online business even better.
            </p>
          </div>
        </div>
      </div>
      <div className="team-of-professionals-main-div">
        <div className="team-of-professionals-align-div flex-wrap">
          <div className="header-para-div">
            <div className="txtWrap">
              <h2>We have a team of professionals</h2>
            </div>
            <p>
              We create custom plans for big online shops on social media. Our
              team of experts helps improve your brand's online experience. Let
              us enhance your business with special strategies made just for
              you.
            </p>
          </div>
          <img src={group7326} className=" p-6 rounded-2xl mt-6" alt="" />
          <img src={german} className=" p-6 rounded-2xl m-4" alt="" />
          <div className="points-div">
            <div className="point-1 point">
              <img src={group7322} alt=""></img>
              <div className="point-header-para">
                <h4>Digital Strategist</h4>
                <p>
                  Using what we know to help your brand stay ahead on Facebook.
                </p>
              </div>
            </div>
            <div className="point-2 point">
              <img src={group7325} alt=""></img>
              <div className="point-header-para">
                <h4>Creative Thinkers</h4>
                <p>
                  Combining eye-catching pictures with interesting stories about
                  the brand.
                </p>
              </div>
            </div>
            <div className="point-3 point">
              <img src={group7323} alt=""></img>
              <div className="point-header-para">
                <h4>Social Media Mavericks</h4>
                <p>Specializing in maximizing Facebook engagement and reach.</p>
              </div>
            </div>
            <div className="point-4 point">
              <img src={group7324} alt=""></img>
              <div className="point-header-para">
                <h4>Results-Driven Analysts</h4>
                <p>Making sure each ad leads to real growth for your brand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default aboutUs;
