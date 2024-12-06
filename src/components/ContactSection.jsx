// imported icons here
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { SiOpenstreetmap } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { BsEnvelopeCheck } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section>
      <div className="contact-section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <i>
                <SiOpenstreetmap />
              </i>
              <div>
                <h3>Location</h3>
                <p>
                  South America Lorem ipsum
                  <br />
                  St. Ste 2712345
                </p>
              </div>
            </div>
            <div className="info-item">
              <i style={{ color: "#eda50a" }}>
                <BiPhoneCall />
              </i>
              <div>
                <h3>Call Us</h3>
                <p className="highlighted">+880 1812 719970</p>
              </div>
            </div>
            <div className="info-item">
              <i>
                <BsEnvelopeCheck />
              </i>
              <div>
                <h3>Email</h3>
                <p>talentdev285@gmail.com</p>
              </div>
            </div>
            <div className=" info-item-social">
              <h3>Follow</h3>
              <p>
                Science is social follow us for company news,
                <br /> original art, & great science writing.
              </p>
              <div className="social-icons">
                <i>
                  <FaFacebookSquare />
                </i>
                <i>
                  <FaTwitterSquare />
                </i>
                <i>
                  <FaLinkedin />
                </i>
                <i>
                  <FaSquareGithub />
                </i>
              </div>
            </div>
          </div>

          {/* contact form here */}
          <form className="contact-form">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="input-group">
                <input type="text" placeholder="Your Name" />
                <i>
                  <FaRegUser />
                </i>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email address" />
                <i>
                  <MdOutlineMarkEmailRead />
                </i>
              </div>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Phone Number" />
              <i>
                <IoCallOutline />
              </i>
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="button-87">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
