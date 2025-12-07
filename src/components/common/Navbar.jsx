import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "navbar-scrolled" : "bg-transparent"
    }`}>
      <div className="content-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="nav-logo-icon">
              <span className="nav-logo-letter">E</span>
            </div>
            <span className="hidden sm:block text-eazy-white font-display text-lg tracking-tight">
              EAZY<span className="text-accent-primary">.</span>DEV
            </span>
          </Link>

          {/* Discord CTA */}
          <a 
            href="https://discord.com/invite/ybndev" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta group"
          >
            <FontAwesomeIcon icon={faDiscord} className="text-sm" />
            <span>DISCORD</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
