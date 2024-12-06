import React from "react";
// Icon imported here
import { PiScreencastBold } from "react-icons/pi";
import { FaRocketchat } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section>
      <div class="hero-container">
        <div className="hero-image">
          <img src={require("../assets/img/girl.png")} alt="HeroProfile" />
        </div>
        <div class="hero-text">
          <span class="tagline">Welcome to my Portfolio</span>
          <h1>
            Hi! I'm Murshida K. <br /> Front-End Web Developer
          </h1>
          <p>
            I'm a font-end web developer and I work remotely from Bangladesh for
            clients in worldwide.
          </p>

          <a href="/" class="connect-link">
            Let's Connect
            <FaRegArrowAltCircleRight />
          </a>

          <div class="services">
            <div class="service">
              <i class="icon">
                <PiScreencastBold />
              </i>

              <span>Stream</span>
              <small>in 4k</small>
            </div>
            <div class="service">
              <i class="icon">
                <FaRocketchat />
              </i>
              <span>Chat</span>
              <small>in 500kbps+</small>
            </div>
            <div class="service">
              <i class="icon">
                <FaShareFromSquare />
              </i>
              <span>Share</span>
              <small>10GB files</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
