import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [systemInfo, setSystemInfo] = useState({});
  const [scanProgress, setScanProgress] = useState(0);
  const [matrixChars, setMatrixChars] = useState([]);
  const canvasRef = useRef(null);

  // Matrix rain effect
  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1);
    
    const interval = setInterval(() => {
      const newChars = [];
      for (let i = 0; i < columns; i++) {
        if (drops[i] * 20 < window.innerHeight && Math.random() > 0.95) {
          newChars.push({
            x: i * 20,
            y: drops[i] * 20,
            char: chars[Math.floor(Math.random() * chars.length)],
            id: `${i}-${Date.now()}`
          });
          drops[i]++;
        }
        if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
      setMatrixChars(prev => [...prev.slice(-100), ...newChars]);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Gather system info (harmless, client-side only)
  useEffect(() => {
    const gatherInfo = async () => {
      const info = {};
      
      // IP Address
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        info.ip = data.ip;
      } catch {
        info.ip = "xxx.xxx.xxx.xxx";
      }

      // Browser & Platform
      const ua = navigator.userAgent;
      info.browser = ua.includes("Chrome") ? "Chrome" : 
                     ua.includes("Firefox") ? "Firefox" : 
                     ua.includes("Safari") ? "Safari" : 
                     ua.includes("Edge") ? "Edge" : "Unknown";
      
      info.platform = navigator.platform || "Unknown";
      info.language = navigator.language || "en-US";
      info.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      info.screenRes = `${window.screen.width}x${window.screen.height}`;
      info.colorDepth = `${window.screen.colorDepth}-bit`;
      info.cores = navigator.hardwareConcurrency || "?";
      info.memory = navigator.deviceMemory ? `${navigator.deviceMemory}GB` : "?";
      info.touchPoints = navigator.maxTouchPoints || 0;
      info.cookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
      info.online = navigator.onLine ? "Connected" : "Offline";
      info.doNotTrack = navigator.doNotTrack === "1" ? "Enabled" : "Disabled";
      
      // Connection info
      if (navigator.connection) {
        info.connection = navigator.connection.effectiveType?.toUpperCase() || "Unknown";
        info.downlink = navigator.connection.downlink ? `${navigator.connection.downlink} Mbps` : "?";
      }

      // Battery
      if (navigator.getBattery) {
        try {
          const battery = await navigator.getBattery();
          info.battery = `${Math.round(battery.level * 100)}%`;
          info.charging = battery.charging ? "Yes" : "No";
        } catch {
          info.battery = "N/A";
        }
      }

      // Time
      info.localTime = new Date().toLocaleTimeString();
      info.timestamp = Date.now();

      setSystemInfo(info);
    };

    gatherInfo();
  }, []);

  // Stage progression
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 800),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => setStage(4), 3000),
      setTimeout(() => setStage(5), 4500),
      setTimeout(() => setStage(6), 6000),
      setTimeout(() => setShowContinue(true), 7500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Scan progress animation
  useEffect(() => {
    if (stage >= 2 && stage < 5) {
      const interval = setInterval(() => {
        setScanProgress(prev => Math.min(prev + Math.random() * 8, 100));
      }, 100);
      return () => clearInterval(interval);
    }
    if (stage >= 5) setScanProgress(100);
  }, [stage]);

  const InfoLine = ({ label, value, delay = 0, variant = "default" }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-mono"
    >
      <span className={variant === "success" ? "text-green-400" : variant === "warning" ? "text-yellow-400" : "text-eazy-grey"}>
        {variant === "success" ? "[✓]" : variant === "warning" ? "[!]" : "[→]"}
      </span>
      <span className="text-eazy-grey">{label}:</span>
      <span className="text-accent-primary break-all">{value}</span>
    </motion.div>
  );

  return (
    <div 
      className="fixed inset-0 bg-eazy-black flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={showContinue ? () => navigate("/home") : undefined}
    >
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {matrixChars.map(char => (
          <motion.span
            key={char.id}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute text-accent-primary font-mono text-xs"
            style={{ left: char.x, top: char.y }}
          >
            {char.char}
          </motion.span>
        ))}
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Accent lines */}
      <div className="absolute left-0 top-0 w-1 h-full bg-accent-primary"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-accent-primary opacity-30"></div>

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 10,
              opacity: 0.5 
            }}
            animate={{ 
              y: -10,
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl mx-4 md:mx-6 flex gap-6">
        {/* Main Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 max-h-[80vh] md:max-h-none"
        >
          {stage >= 1 && (
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot bg-[#ff5f57]"></div>
                <div className="terminal-dot bg-[#febc2e]"></div>
                <div className="terminal-dot bg-[#28c840]"></div>
                <span className="ml-2 md:ml-4 text-eazy-grey text-[10px] md:text-xs font-mono truncate">root@damneazy:~</span>
                <span className="ml-auto text-eazy-grey text-[10px] md:text-xs font-mono opacity-50 hidden sm:inline">PID: {Math.floor(Math.random() * 9999)}</span>
              </div>

              <div className="p-3 md:p-5 min-h-[280px] md:min-h-[320px] font-mono text-[10px] md:text-xs space-y-2 overflow-y-auto custom-scrollbar">
                {/* Command */}
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  <span className="text-accent-primary">$</span>
                  <span className="text-eazy-off-white">./recon.sh --target visitor</span>
                </div>

                {stage >= 2 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-eazy-grey mt-2 md:mt-3 text-[10px] md:text-xs"
                    >
                      <span className="text-yellow-400">[*]</span> Initializing scan...
                    </motion.div>
                    
                    {/* Progress bar */}
                    <div className="flex items-center gap-2 md:gap-3 my-2 md:my-3">
                      <div className="flex-1 h-1.5 md:h-2 bg-eazy-card border border-eazy-border">
                        <motion.div 
                          className="h-full bg-accent-primary"
                          style={{ width: `${scanProgress}%` }}
                        />
                      </div>
                      <span className="text-accent-primary text-[10px] md:text-xs w-10 md:w-12">{Math.floor(scanProgress)}%</span>
                    </div>
                  </>
                )}

                {stage >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1 mt-2"
                  >
                    <div className="text-green-400 text-[10px] md:text-xs">[+] Target acquired</div>
                    <InfoLine label="IP" value={systemInfo.ip || "scanning..."} variant="success" delay={0.1} />
                    <InfoLine label="Browser" value={systemInfo.browser} delay={0.2} />
                  </motion.div>
                )}

                {stage >= 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1 mt-2 md:mt-3"
                  >
                    <div className="text-yellow-400 text-[10px] md:text-xs">[*] System fingerprint...</div>
                    <InfoLine label="Screen" value={systemInfo.screenRes} delay={0.1} />
                    <InfoLine label="Cores" value={systemInfo.cores} delay={0.15} />
                    <InfoLine label="TZ" value={systemInfo.timezone} delay={0.2} />
                  </motion.div>
                )}

                {stage >= 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1 mt-2 md:mt-3"
                  >
                    <div className="text-cyan-400 text-[10px] md:text-xs">[~] Network...</div>
                    <InfoLine label="Status" value={systemInfo.online} variant="success" delay={0.1} />
                    <InfoLine label="Type" value={systemInfo.connection || "Unknown"} delay={0.15} />
                    {systemInfo.battery && (
                      <InfoLine label="Battery" value={systemInfo.battery} variant="warning" delay={0.2} />
                    )}
                  </motion.div>
                )}

                {stage >= 6 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 md:mt-4 p-3 md:p-4 border border-accent-primary bg-accent-primary/5"
                  >
                    <div className="text-accent-primary text-xs md:text-sm font-semibold mb-2">
                      ═══ SCAN COMPLETE ═══
                    </div>
                    <div className="text-eazy-off-white text-xs md:text-sm leading-relaxed">
                      See how easy that was? Don't worry — I'm not harmful.
                      <br />
                      <span className="text-eazy-grey text-[10px] md:text-xs">Client-side only. Nothing logged.</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Side Panel - System Stats */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20, width: 0 }}
              animate={{ opacity: 1, x: 0, width: 280 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden xl:block"
            >
              <div className="terminal h-full max-h-[420px] flex flex-col">
                <div className="terminal-header flex-shrink-0">
                  <div className="terminal-dot bg-[#ff5f57]"></div>
                  <div className="terminal-dot bg-[#febc2e]"></div>
                  <div className="terminal-dot bg-[#28c840]"></div>
                  <span className="ml-3 text-eazy-grey text-xs font-mono">sys_info.log</span>
                </div>
                <div className="p-4 space-y-3 text-xs font-mono overflow-y-auto flex-1 custom-scrollbar">
                  {/* IP Address */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className="text-green-400">●</span> IP Address
                    </div>
                    <div className="text-accent-primary pl-4 break-all">{systemInfo.ip || "..."}</div>
                  </motion.div>

                  <div className="border-t border-eazy-border my-2"></div>
                  
                  {/* Browser */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className="text-blue-400">●</span> Browser
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.browser || "..."}</div>
                  </motion.div>

                  <div className="border-t border-eazy-border my-2"></div>

                  {/* Screen & Hardware */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className="text-purple-400">●</span> Resolution
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.screenRes || "..."}</div>
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                      <span className="text-orange-400">●</span> CPU Cores
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.cores || "..."}</div>
                  </motion.div>

                  <div className="border-t border-eazy-border my-2"></div>

                  {/* Location & Time */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className="text-cyan-400">●</span> Timezone
                    </div>
                    <div className="text-eazy-off-white pl-4 text-[11px]">{systemInfo.timezone || "..."}</div>
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                      <span className="text-cyan-400">●</span> Language
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.language || "..."}</div>
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                      <span className="text-cyan-400">●</span> Local Time
                    </div>
                    <div className="text-accent-primary pl-4">{systemInfo.localTime || "..."}</div>
                  </motion.div>

                  <div className="border-t border-eazy-border my-2"></div>

                  {/* Network */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className={systemInfo.online === "Connected" ? "text-green-400" : "text-red-400"}>●</span> Network
                    </div>
                    <div className={`pl-4 ${systemInfo.online === "Connected" ? "text-green-400" : "text-red-400"}`}>
                      {systemInfo.online || "..."}
                    </div>
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                      <span className="text-yellow-400">●</span> Connection
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.connection || "N/A"}</div>
                  </motion.div>

                  <div className="border-t border-eazy-border my-2"></div>

                  {/* Battery */}
                  {systemInfo.battery && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-1"
                    >
                      <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                        <span className="text-yellow-400">●</span> Battery
                      </div>
                      <div className="text-yellow-400 pl-4">{systemInfo.battery}</div>
                      <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                        <span className={systemInfo.charging === "Yes" ? "text-green-400" : "text-eazy-grey"}>●</span> Charging
                      </div>
                      <div className={`pl-4 ${systemInfo.charging === "Yes" ? "text-green-400" : "text-eazy-off-white"}`}>
                        {systemInfo.charging}
                      </div>
                      <div className="border-t border-eazy-border my-2"></div>
                    </motion.div>
                  )}

                  {/* Privacy & Input */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-1"
                  >
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2">
                      <span className={systemInfo.cookiesEnabled === "Yes" ? "text-green-400" : "text-red-400"}>●</span> Cookies
                    </div>
                    <div className={`pl-4 ${systemInfo.cookiesEnabled === "Yes" ? "text-green-400" : "text-red-400"}`}>
                      {systemInfo.cookiesEnabled || "..."}
                    </div>
                    <div className="text-eazy-grey uppercase tracking-wider text-[10px] flex items-center gap-2 mt-2">
                      <span className="text-pink-400">●</span> Touch Points
                    </div>
                    <div className="text-eazy-off-white pl-4">{systemInfo.touchPoints ?? "..."}</div>
                  </motion.div>

                  {/* Footer */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-3 mt-3 border-t border-eazy-border"
                  >
                    <div className="text-center text-[9px] text-eazy-grey">
                      <span className="text-green-400">✓</span> CLIENT-SIDE ONLY
                    </div>
                    <div className="text-center text-[9px] text-eazy-grey mt-1">
                      NO DATA LOGGED
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Continue button */}
      <AnimatePresence>
        {showContinue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:w-auto"
          >
            <span className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 border border-accent-primary bg-accent-primary/10 text-accent-primary text-xs md:text-sm font-mono tracking-wider uppercase hover:bg-accent-primary hover:text-eazy-black transition-all cursor-pointer w-full md:w-auto">
              <motion.span 
                className="w-2 h-2 bg-accent-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="hidden sm:inline">CLICK ANYWHERE TO CONTINUE</span>
              <span className="sm:hidden">TAP TO CONTINUE</span>
              <motion.span 
                className="w-2 h-2 bg-accent-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 md:bottom-6 left-4 md:left-6"
      >
        <span className="font-display text-base md:text-lg tracking-tight">
          <span className="text-accent-primary">DAMN</span>
          <span className="text-eazy-white">EAZY</span>
          <span className="text-eazy-grey">.DEV</span>
        </span>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4 font-mono text-[8px] md:text-[10px] text-eazy-grey opacity-50">
        v2.0.0
      </div>
    </div>
  );
};

export default SplashScreen;
