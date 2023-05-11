import React from "react";
import "./Profiles.css";

class Section extends React.Component {
  render() {
    return (
      <section className="sectionh">
          <h1 className="section-headingh">The HoneyBadgers</h1>
        <div className="box">
          <div className="card-container">
            <div className="cardh">
              <div className="card-image">
                <img src="https://honeybadgersco.com/static/media/img1.fabe6432c395e3996808.jpg" alt="Card" />
              </div>
              <h2 className="card-headingh">Nikhil Memane</h2>
              <h3 className="card-subheadingh">CEO & Founder</h3>
              <p className="card-texth">CEO and Founder of honeybadgersCo Pvt. Ltd.</p>
            </div>
          </div>

          <div className="card-container">
            <div className="cardh">
              <div className="card-image">
                <img src="https://honeybadgersco.com/static/media/img2.755b4968f855993e9311.jpg" alt="Card" />
              </div>
              <h2 className="card-headingh">Aditya Harikumar</h2>
              <h3 className="card-subheadingh">CTO & Founder</h3>
              <p className="card-texth">CTO and Co-Founder of HoneybadgersCo Pvt. Ltd.</p>
            </div>
          </div>

          <div className="card-container">
            <div className="cardh">
              <div className="card-image">
                <img src="https://honeybadgersco.com/static/media/img3.27c9c27320f08dad4201.jpg" alt="Card" />
              </div>
              <h2 className="card-headingh">Nisha H. Shakya</h2>
              <h3 className="card-subheadingh">CDO & Creative Head</h3>
              <p className="card-texth">CDO, Co-Founder and Designer of HoneybadgersCo Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
