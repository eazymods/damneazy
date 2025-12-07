import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const socials = [
  { icon: faDiscord, href: "https://discord.gg/", label: "Discord" },
  { icon: faGithub, href: "https://github.com/", label: "GitHub" },
  { icon: faYoutube, href: "https://youtube.com/", label: "YouTube" },
  { icon: faShoppingCart, href: "https://eazy.tebex.io/", label: "Tebex" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 mt-24">
      {/* Gradient divider */}
      <div className="divider-gradient"></div>
      
      <div className="content-wide py-20">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Brand */}
          <div>
            <Link to="/home" className="inline-block mb-6">
              <span className="font-display text-3xl tracking-tight">
                <span className="gradient-text">damn</span>
                <span className="text-eazy-white">eazy</span>
                <span className="text-eazy-grey">.dev</span>
              </span>
            </Link>
            <p className="text-eazy-grey text-base leading-relaxed max-w-sm">
              Building custom scripts and immersive systems for FiveM roleplay servers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-eazy-white text-lg font-medium mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-eazy-grey hover:text-accent-primary transition-colors text-base w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-eazy-white text-lg font-medium mb-6">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  title={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-gradient mt-16 mb-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-eazy-grey text-base">
            © {new Date().getFullYear()} damneazy.dev — All rights reserved
          </p>
          <p className="text-eazy-grey text-base flex items-center gap-2">
            Built with 
            <FontAwesomeIcon icon={faHeart} className="text-accent-primary" />
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
