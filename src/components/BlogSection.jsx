// icons imported here
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// swiperJS imported here
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function BlogSection() {
  return (
    <section class="blog-section">
      <h2>Client Reviews</h2>
      <p>What Our Clients Say About Us</p>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1, // Use 1 slide for screens 820px and below
          },
          769: {
            slidesPerView: 3, // Use 1 slide for screens 820px and below
          },
          800: {
            slidesPerView: 1, // Use 1 slide for screens 820px and below
          },
          801: {
            slidesPerView: 3, // Use 1 slide for screens 820px and below
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="star">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="avatar">
              <img src={require("../assets/img/client-3.jpg")} alt="Anna" />
            </div>
            <h3 className="author">Sophia Carter , Data Scientist</h3>

            <p className="quote">
              <i>
                <FaQuoteLeft />
              </i>
              &ensp;Murshida's web development skills are unparalleled! She
              created a sleek, responsive website for my data analytics
              portfolio that perfectly aligns with my professional image. Her
              attention to detail and ability to translate complex ideas into
              intuitive designs is remarkable. Highly recommend her! &ensp;
              <i>
                <FaQuoteRight />
              </i>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="star">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="avatar">
              <img src={require("../assets/img/client-4.jpg")} alt="Anna" />
            </div>
            <h3 className="author">Emily Rodriguez, Graphic Designer</h3>

            <p className="quote">
              <i>
                <FaQuoteLeft />
              </i>
              &ensp;Working with Murshida has been a pleasure. Her ability to
              integrate my creative designs seamlessly into functional websites
              shows her exceptional coding and collaboration skills. She truly
              brings visions to life with her expertise in web development.
              &ensp;
              <i>
                <FaQuoteRight />
              </i>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="star">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="avatar">
              <img src={require("../assets/img/client-5.jpg")} alt="Anna" />
            </div>
            <h3 className="author">James Harris, Software Engineer</h3>

            <p className="quote">
              <i>
                <FaQuoteLeft />
              </i>
              &ensp;Murshida's problem-solving skills are impressive. We worked
              together on a project that required custom web functionalities,
              and she nailed it with clean, efficient code. She's a reliable
              team player who ensures high-quality results every time.&ensp;
              <i>
                <FaQuoteRight />
              </i>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="star">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="avatar">
              <img src={require("../assets/img/client-6.jpg")} alt="Anna" />
            </div>
            <h3 className="author">Liam Patel, Marketing Manager</h3>

            <p className="quote">
              <i>
                <FaQuoteLeft />
              </i>
              &ensp;Murshida is a gem in the world of web development! She
              revamped our company website, optimizing it for both performance
              and user experience. Since the update, we've seen a significant
              boost in traffic and engagement. Her work speaks for itself!
              &ensp;
              <i>
                <FaQuoteRight />
              </i>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="stars">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="star">
                    <FaStar />
                  </span>
                ))}
            </div>
            <div className="avatar">
              <img src={require("../assets/img/client-7.jpg")} alt="Anna" />
            </div>
            <h3 className="author">Ethan Wright, CEO & Co-Founder</h3>

            <p className="quote">
              <i>
                <FaQuoteLeft />
              </i>
              &ensp;I needed a professional website to showcase my architectural
              projects, and Murshida delivered beyond my expectations. The site
              is visually stunning and easy to navigate, reflecting the essence
              of my work perfectly. I couldn’t be happier with the outcome!
              &ensp;
              <i>
                <FaQuoteRight />
              </i>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
