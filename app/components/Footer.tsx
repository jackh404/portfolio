import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content grid grid-flow-col">
      <p>Copyright &copy; 2024</p>
      <ul className="flex flex-row gap-4">
        <li>
          <a href="https://github.com/jackh404" target="_blank">
            <FaGithub className="w-8 h-8 text-base-content hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jack-henza/" target="_blank">
            <FaLinkedin className="w-8 h-8 text-base-content hover:scale-110 transition-transform" />
          </a>
        </li>
        <li>
          <a href="https://dev.to/jackh404" target="_blank">
            <FaDev className="w-8 h-8 text-base-content hover:scale-110 transition-transform" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
