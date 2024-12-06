import React from "react";

// react icons exported
import { FaDownload } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section>
      <div className="about-me-container">
        <h1>
          About <span>Me</span>
        </h1>
        <div className="about-content">
          <div className="personal-info">
            <h2 className="section-title">Personal Infos* </h2>
            <ul className="info-list">
              <div className="info-list-details-left">
                <li>
                  First Name: <span>Murshida</span>;
                </li>
                <li>
                  Age: <span>25 Years</span>;
                </li>
                <li>
                  Freelance: <span>Available</span>;
                </li>
                <li>
                  Phone: <span>+880 1812 719970</span>;
                </li>
                <li>
                  Skype: <span>anonna58</span>;
                </li>
              </div>
              <div className="info-list-details-right">
                <li>
                  Last Name: <span>Khatun</span>;
                </li>
                <li>
                  Nationality: <span>Bangladesh</span>;
                </li>

                <li>
                  Address: <span>Sirajganj, Bangladesh</span>;
                </li>

                <li>
                  Email: <span>talentdev285@gmail.com</span>;
                </li>

                <li>
                  Languages: <span>English & Bengali</span>;
                </li>
              </div>
            </ul>
            <a href="/" className="download-cv">
              Download CV
              <span className="cv-icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>15+</h3>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="stat-card stat-card-two">
              <h3>99+</h3>
              <p>COMPLETED PROJECTS</p>
            </div>
            <div className="stat-card stat-card-two">
              <h3>140+</h3>
              <p>HAPPY CUSTOMERS</p>
            </div>
            <div className="stat-card">
              <h3>74+</h3>
              <p>AWARDS WON</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
