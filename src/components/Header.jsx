// Icon imported here
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="/">
            Murshida <span>Khatun</span>
          </a>
        </div>
        <nav className="header-left">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/murshida2023/">
                <FaLinkedinIn aria-label="LinkedIn" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/talentdev285">
                <FaGithub aria-label="GitHub" /> GitHub
              </a>
            </li>
          </ul>
          <button className="button-87">Contact</button>
        </nav>
      </header>
    </div>
  );
}
