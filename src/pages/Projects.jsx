import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowUpRightFromSquare, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const servers = [
  {
    id: 1,
    name: "Los Santos Roleplay",
    description: "Premium serious RP with custom economy and systems",
    role: "Lead Developer",
    players: "200+",
    active: true,
  },
  {
    id: 2,
    name: "Underground Racing",
    description: "Street racing with custom vehicles and handling",
    role: "Script Developer",
    players: "150+",
    active: true,
  },
  {
    id: 3,
    name: "Vice City RP",
    description: "Miami-themed with custom drug and gang systems",
    role: "Full-Stack",
    players: "180+",
    active: true,
  },
  {
    id: 4,
    name: "Midnight Club",
    description: "Elite car culture with detailed customs",
    role: "Developer",
    players: "100+",
    active: false,
  },
];

const stats = [
  { value: "10+", label: "Roles" },
  { value: "15+", label: "Servers" },
  { value: "4", label: "Active" },
  { value: "100+", label: "Clients" },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="orb orb-purple w-[600px] h-[600px] -top-40 -left-40 opacity-40" />
      <div className="orb orb-cyan w-[500px] h-[500px] bottom-32 -right-40 opacity-30" />

      {/* Header */}
      <section className="py-20 relative z-10">
        <div className="content-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-6xl md:text-7xl text-eazy-white tracking-tight mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-eazy-grey text-xl max-w-lg">
              Servers and communities I've worked with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 relative z-10">
        <div className="content-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-10 rounded-[32px]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <span className="font-display text-4xl md:text-5xl gradient-text">{stat.value}</span>
                  <p className="text-eazy-grey text-base mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servers */}
      <section className="py-16 relative z-10">
        <div className="content-wide space-y-5">
          {servers.map((server, i) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-eazy p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-display text-2xl text-eazy-white group-hover:gradient-text transition-all">
                    {server.name}
                  </h3>
                  <span className={`flex items-center gap-2 text-sm ${server.active ? 'text-green-400' : 'text-yellow-400'}`}>
                    <FontAwesomeIcon icon={faCircle} className="text-[8px]" />
                    {server.active ? 'Active' : 'Maintenance'}
                  </span>
                </div>
                <p className="text-eazy-grey text-base leading-relaxed">{server.description}</p>
              </div>
              
              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="text-accent-primary text-base font-medium">{server.role}</p>
                  <p className="text-eazy-grey text-sm flex items-center gap-2 justify-end mt-1">
                    <FontAwesomeIcon icon={faUsers} className="text-xs" />
                    {server.players} players
                  </p>
                </div>
                <button className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent-primary hover:bg-accent-primary/10 transition-all group-hover:scale-110">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base text-eazy-grey group-hover:text-accent-primary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10">
        <div className="content-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-16 md:p-20 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl text-eazy-white mb-6">
                Want your server <span className="gradient-text">here?</span>
              </h2>
              <p className="text-eazy-grey text-xl mb-10 leading-relaxed">
                Looking for custom scripts or ongoing development support for your FiveM server.
              </p>
              <a
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-eazy-filled btn-eazy text-base px-8 py-4"
              >
                <FontAwesomeIcon icon={faDiscord} className="text-lg" />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
