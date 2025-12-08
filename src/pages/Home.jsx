import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const socials = [
  { icon: faDiscord, label: "DISCORD", href: "https://discord.com/invite/ybndev" },
  { icon: faGithub, label: "GITHUB", href: "https://github.com/eazymods" },
  { icon: faYoutube, label: "YOUTUBE", href: "https://youtube.com/@YBNDevelopment" },
  { icon: faShoppingCart, label: "STORE", href: "https://dev.paidservers.com/" },
];

const stats = [
  { value: "50+", label: "SCRIPTS" },
  { value: "100+", label: "CLIENTS" },
  { value: "3+", label: "YEARS" },
];

const Home = () => {
  return (
    <div className="h-screen bg-eazy-black overflow-hidden">
      {/* Hero Section */}
      <section className="h-full flex items-center relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Accent line */}
        <div className="absolute left-0 top-0 w-1 h-full bg-accent-primary"></div>

        {/* Character Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 bottom-0 hidden lg:block z-20 pointer-events-none"
        >
          <img 
            src="/trevor.png" 
            alt="Character" 
            className="h-[85vh] w-auto object-contain object-bottom"
          />
        </motion.div>
        
        <div className="content-wide relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Spacer for character image */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="status-dot"></div>
                <span className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
                  Available for work
                </span>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.85] tracking-tight text-eazy-white">
                  DAMN
                  <span className="text-accent-primary">EAZY</span>
                </h1>
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="accent-line"></div>
                <span className="font-mono text-sm tracking-[0.15em] text-eazy-grey uppercase">
                  FiveM Developer
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-eazy-grey text-lg max-w-xl leading-relaxed mb-8"
              >
                Building custom scripts, frameworks, and immersive systems for FiveM roleplay servers.
              </motion.p>

              {/* Spacer */}
              <div className="h-6"></div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="btn-eazy group text-sm"
                  >
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className="text-base group-hover:text-accent-primary transition-colors" 
                    />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Spacer */}
              <div className="h-6"></div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a 
                  href="https://discord.com/invite/ybndev"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="font-mono text-sm tracking-[0.15em] text-accent-primary uppercase">
                    View My Work
                  </span>
                  <div className="w-12 h-12 border border-accent-primary flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="text-accent-primary group-hover:text-eazy-black transition-colors" 
                    />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Stats Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-0"
              >
                {stats.map((stat, i) => (
                  <div 
                    key={stat.label}
                    className="p-6 hover:bg-eazy-card transition-colors"
                  >
                    <div className="num-display mb-2 text-2xl">{stat.value}</div>
                    <div className="font-mono text-xs tracking-[0.2em] text-eazy-grey">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative - ASCII art corner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-8 right-8 hidden xl:block ascii-text text-right"
        >
          <pre>{`
    ╔══════════════╗
    ║  FIVEM DEV   ║
    ║  ══════════  ║
    ║  LUA | JS    ║
    ║  REACT | SQL ║
    ╚══════════════╝
          `}</pre>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
