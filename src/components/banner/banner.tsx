import "./banner.css";

const banner = () => {
  return (
    <>
      <div className="outerWrap">
        <div className="bannerWrap">
          <h2>
            Proven Results: <br></br>Empowering<br></br> business Success
          </h2>
          <div className="metrixCell1">
            <h1>150+</h1>
            <p>Clients Helped</p>
          </div>
          <div className="metrixCell2">
            <h1>$50M+</h1>
            <p>Revenue Generated</p>
          </div>
          <div className="metrixCell3">
            <h1>3-5x</h1>
            <p>Average ROAS</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default banner;
