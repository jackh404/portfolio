import { FaLinkedin, FaDev, FaGithub } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content grid grid-flow-col">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <ul className="flex flex-row gap-4">
        <li>
          <Link href="https://github.com/jackh404" target="_blank">
            <FaGithub className="w-8 h-8 text-base-content hover:scale-110 transition-transform" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/jack-henza/" target="_blank">
            <FaLinkedin className="w-8 h-8 text-base-content hover:scale-110 transition-transform" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
