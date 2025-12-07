import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const categories = ["ALL", "SCRIPTS", "FRAMEWORKS", "UI/HUD", "VEHICLES"];

const portfolioItems = [
  {
    id: 1,
    title: "Advanced Garage System",
    category: "SCRIPTS",
    description: "Complete vehicle garage with impound and previews",
    tags: ["Lua", "ESX", "QBCore"],
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Custom HUD Framework",
    category: "UI/HUD",
    description: "Minimalist, performance-optimized HUD",
    tags: ["NUI", "React"],
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Drug Production",
    category: "SCRIPTS",
    description: "Full manufacturing and distribution system",
    tags: ["Lua", "Agnostic"],
    year: "2023",
  },
  {
    id: 4,
    title: "MDT/CAD System",
    category: "FRAMEWORKS",
    description: "Police MDT with records and dispatch",
    tags: ["React", "Node.js"],
    featured: true,
    year: "2024",
  },
  {
    id: 5,
    title: "Vehicle Pack",
    category: "VEHICLES",
    description: "High-quality conversions with custom handling",
    tags: ["Vehicles"],
    year: "2023",
  },
  {
    id: 6,
    title: "Heist Framework",
    category: "FRAMEWORKS",
    description: "Modular heist system with custom stages",
    tags: ["Lua", "Advanced"],
    year: "2024",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = activeCategory === "ALL" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-eazy-black">
      {/* Accent line */}
      <div className="fixed left-0 top-0 w-1 h-full bg-accent-primary z-50"></div>

      {/* Hero Header */}
      <section className="min-h-[20vh] flex items-end pb-20 pt-40">
        <div className="content-wide w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-eazy-white tracking-tight leading-[0.85] mb-8">
              PORT<span className="text-accent-primary">FOLIO</span>
            </h1>
            <p className="text-eazy-grey text-xl leading-relaxed">
              Custom scripts and resources powering roleplay servers worldwide.
            </p>
          </motion.div>
      <div className="h-2"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="content-wide">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-sm tracking-[0.1em] transition-all duration-200 pb-2 ${
                    activeCategory === cat 
                      ? 'text-accent-primary border-b-2 border-accent-primary' 
                      : 'text-eazy-grey hover:text-eazy-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="font-mono text-sm text-eazy-grey">
              {filteredItems.length} PROJECTS
            </span>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="content-wide">
        <div className="h-px bg-eazy-border"></div>
      </div>

      {/* Projects */}
      <section className="py-8">
        <div className="content-wide">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.a
                key={item.id}
                href="#"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="block group"
              >
                <div className="py-12 border-b border-eazy-border hover:border-accent-primary transition-colors">
                  <div className="grid grid-cols-12 gap-8 items-start">
                    
                    {/* Number */}
                    <div className="col-span-1 hidden md:block">
                      <span className="font-mono text-sm text-eazy-grey">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-12 md:col-span-8">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-display text-3xl md:text-4xl text-eazy-white group-hover:text-accent-primary transition-colors">
                          {item.title}
                        </h3>
                        {item.featured && (
                          <span className="px-3 py-1 bg-accent-primary text-eazy-black font-mono text-[10px] tracking-widest shrink-0">
                            FEATURED
                          </span>
                        )}
                      </div>
                      
                      <p className="text-eazy-grey text-lg mb-6 max-w-2xl">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {item.tags.map((tag, j) => (
                          <span key={j} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Year & Arrow */}
                    <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-8">
                      <span className="font-mono text-sm text-eazy-grey">
                        {item.year}
                      </span>
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="text-xl text-eazy-grey group-hover:text-accent-primary group-hover:translate-x-2 transition-all" 
                      />
                    </div>
                    
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12"></div>

      {/* GitHub CTA */}
      <section className="py-32 border-t border-eazy-border">
        <div className="content-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-6 mb-10">
                <FontAwesomeIcon icon={faGithub} className="text-4xl text-eazy-white" />
                <div className="accent-line"></div>
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl text-eazy-white mb-8 leading-[0.9]">
                MORE ON<br />
                <span className="text-accent-primary">GITHUB</span>
              </h2>
              
              <p className="text-eazy-grey text-xl mb-12 max-w-md leading-relaxed">
                Open-source projects and contributions to the FiveM community.
              </p>
              
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-6 group"
              >
                <span className="font-mono text-sm tracking-[0.15em] text-accent-primary uppercase">
                  View GitHub
                </span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="text-xl text-accent-primary group-hover:translate-x-2 transition-transform" 
                />
              </a>
            </div>

            {/* Terminal */}
            <div className="hidden lg:block">
              <div className="bg-eazy-darker border border-eazy-border">
                <div className="flex items-center gap-2 p-4 border-b border-eazy-border">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  <span className="font-mono text-xs text-eazy-grey ml-4">terminal</span>
                </div>
                <div className="p-8 font-mono text-sm leading-loose">
                  <div className="text-eazy-grey mb-6">
                    <span className="text-accent-primary">$</span> git log --oneline -5
                  </div>
                  <div className="space-y-3 text-eazy-muted">
                    <div><span className="text-accent-primary">a7f3c2d</span> feat: advanced garage system</div>
                    <div><span className="text-accent-primary">b8e4d1a</span> fix: hud performance optimization</div>
                    <div><span className="text-accent-primary">c9f5e2b</span> chore: update dependencies</div>
                    <div><span className="text-accent-primary">d0a6f3c</span> feat: mdt dispatch system</div>
                    <div><span className="text-accent-primary">e1b7a4d</span> docs: readme updates</div>
                  </div>
                  <div className="text-eazy-grey mt-6">
                    <span className="text-accent-primary">$</span> <span className="cursor-blink"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
