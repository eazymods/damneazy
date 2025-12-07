import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "Lua", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MySQL", level: 85 },
];

const timeline = [
  { year: "2024", title: "Lead Developer", desc: "Multiple high-profile RP servers" },
  { year: "2023", title: "Script Release", desc: "First public pack with 500+ downloads" },
  { year: "2022", title: "Full-Stack", desc: "Expanded into React & Node.js" },
  { year: "2021", title: "Started FiveM", desc: "Began learning Lua development" },
];

const socials = [
  { icon: faDiscord, href: "https://discord.gg/", label: "Discord" },
  { icon: faGithub, href: "https://github.com/", label: "GitHub" },
  { icon: faYoutube, href: "https://youtube.com/", label: "YouTube" },
  { icon: faShoppingCart, href: "https://eazy.tebex.io/", label: "Tebex" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="orb orb-cyan w-[600px] h-[600px] top-40 -right-60 opacity-40" />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-40 -left-40 opacity-30" />

      {/* Header */}
      <section className="py-20 relative z-10">
        <div className="content-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="font-display text-6xl md:text-7xl text-eazy-white tracking-tight mb-8">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-10"></div>
              <p className="text-eazy-grey text-xl leading-relaxed mb-5">
                I'm <span className="text-eazy-white font-medium">Eazy</span>, a FiveM developer focused on 
                creating high-quality scripts and immersive roleplay experiences.
              </p>
              <p className="text-eazy-grey text-xl leading-relaxed mb-12">
                Specializing in custom development, server optimization, and building 
                complete gameplay systems from scratch.
              </p>
              
              {/* Socials */}
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon w-14 h-14"
                    title={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="relative aspect-square">
                {/* Glowing rings */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-accent-primary/30 animate-pulse"></div>
                <div className="absolute inset-5 rounded-[28px] border-2 border-accent-secondary/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Inner card */}
                <div className="absolute inset-10 glass rounded-[24px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mb-5 shadow-lg shadow-accent-primary/30">
                      <span className="font-display text-6xl text-eazy-black">E</span>
                    </div>
                    <p className="text-base text-eazy-grey font-medium">Developer</p>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent-primary/50"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-accent-secondary/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-28 relative z-10">
        <div className="content-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-[40px]"
          >
            <h2 className="font-display text-4xl md:text-5xl text-eazy-white mb-14">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-4">
                    <span className="text-eazy-white text-lg font-medium">{skill.name}</span>
                    <span className="text-accent-primary font-mono text-base">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="skill-bar-fill"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 relative z-10">
        <div className="content-wide">
          <h2 className="font-display text-4xl md:text-5xl text-eazy-white mb-16">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="max-w-2xl">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10 pb-16 last:pb-0"
              >
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[7px] top-5 bottom-0 w-[3px] bg-gradient-to-b from-accent-primary to-accent-secondary/30 rounded-full"></div>
                )}
                
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/50"></div>
                
                {/* Content */}
                <div className="glass-subtle p-7 rounded-2xl ml-4">
                  <span className="text-accent-primary text-base font-mono">{item.year}</span>
                  <h3 className="font-display text-2xl text-eazy-white mt-2">{item.title}</h3>
                  <p className="text-eazy-grey text-base mt-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10">
        <div className="content-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-24 rounded-[40px]"
          >
            <h2 className="font-display text-5xl md:text-6xl text-eazy-white mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-eazy-grey text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how I can help bring your vision to life.
            </p>
            <a 
              href="https://discord.gg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-eazy btn-eazy-filled text-xl px-10 py-5"
            >
              <FontAwesomeIcon icon={faDiscord} className="text-2xl" />
              <span>Join Discord</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
