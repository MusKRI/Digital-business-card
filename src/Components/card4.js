import React from "react";
import Image from "../Images/about.jpg";

function Card() {
  return (
    <div className="card__4">
      <img src={Image} alt="profile" className="card__profile" />
      <div className="c4__myself flex">
        <h2 className="c4__Name">Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <p>
          <a href="##">laurasmith.website</a>
        </p>
        <div className="c4__buttons">
          <a href="##" className="white__button">
            <i class="bx bxl-gmail"></i> <span>Email</span>
          </a>
        </div>

        <div className="about">
          <div className="about__section">
            <h2>About</h2>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="interest__section">
            <h2>Interest</h2>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
      </div>

      <div className="footer flex">
        <div className="footer-icons">
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-github"></i>
        </div>
      </div>
    </div>
  );
}

function C4() {
  return (
    <div className="card light-theme">
      <Card />
    </div>
  );
}

export default C4;
