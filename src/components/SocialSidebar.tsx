import "./SocialSidebar.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a
        href="https://github.com/Harshita1375"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/harshita-tiwary-523739252/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.fiverr.com/harshi_09_75"
        target="_blank"
        rel="noreferrer"
      >
        <SiFiverr />
      </a>

      <a
        href="https://wa.me/919113770945"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialSidebar;