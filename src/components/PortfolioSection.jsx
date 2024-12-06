// image imported here
import BellezaLatina from "../assets/img/BellezaLatina.jpeg";
import Ignite from "../assets/img/ignite.jpeg";
import FestoonHouse from "../assets/img/festoon house.jpeg";
import WagonWheel from "../assets/img/Wagon Wheel Financial.png";
import BuildSign from "../assets/img/build and sign.jpeg";
import CattitudeAdjustment from "../assets/img/cattitude adjustment.png";

// icon imported here
import { RiTailwindCssFill } from "react-icons/ri";
import { SiWordpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "WP Website: Belleza Latina",
      url: "https://bellezalatina.life/en/home-en/",
      image: BellezaLatina,
      icons: <SiWordpress />,
    },
    {
      id: 2,
      title: "Ignite",
      url: "https://www.ignite.no/",
      image: Ignite,
      icons: <RiTailwindCssFill />,
    },
    {
      id: 3,
      title: "Ecommerce Website: Festoon House",
      url: "https://festoonhouse.com.au/",
      image: FestoonHouse,
      icons: <TbBrandJavascript />,
    },
    {
      id: 4,
      title: "Wagon Wheel Financial - Accounting & Financial",
      url: "https://wagonwheelfinancial.com/",
      image: WagonWheel,
      icons: <FaReact />,
    },
    {
      id: 5,
      title: "Buil A Sign - Retail",
      url: "https://www.buildasign.com/",
      image: BuildSign,
      icons: <RiNextjsLine />,
    },
    {
      id: 6,
      title: "Cattitude Adjustment - Animal & Pet Website",
      url: "https://www.cattitude-adjustment.com/",
      image: CattitudeAdjustment,
      icons: <RiNextjsLine />,
    },
  ];

  return (
    <section class="website-section">
      <div className="website-top-details">
        <h1>My Experience</h1>
        <p>
          I'm a Front-end web developer and I work remotely from Bangladesh
          <br />
          for clients in the worldwide.
        </p>
      </div>

      {/* cards appears here */}
      <div className="website-item-container">
        {projects.map((item) => (
          <div class="website-item" key={item.id}>
            <div>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
            </div>

            <div className="portfolio-content">
              <div class="website-info">
                <h2>{item.title}</h2>
                <a href="https://www.dummy.com/">{item.url}</a>
              </div>
              <div className="portfolio-icon">{item.icons}</div>
            </div>
          </div>
        ))}
      </div>

      <button class="button-87 portfoliobtn">
        Let's Connect
        <li>
          <FaRegArrowAltCircleRight />
        </li>
      </button>
    </section>
  );
}
