import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [ip, setIp] = useState("...");
  const [typedText, setTypedText] = useState("");
  const [showContinue, setShowContinue] = useState(false);

  const message = `see how easy that was?\ndon't worry, i'm not harmful.`;

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setIp(data.ip);
      } catch {
        setIp("xxx.xxx.xxx.xxx");
      }
    };
    fetchIP();
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => setStage(4), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage >= 4) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.length) {
          setTypedText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowContinue(true), 400);
        }
      }, 35);
      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <div 
      className="fixed inset-0 bg-eazy-black flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={showContinue ? () => navigate("/home") : undefined}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-accent-primary"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-xl mx-6"
      >
        {stage >= 1 && (
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#ff5f57]"></div>
              <div className="terminal-dot bg-[#febc2e]"></div>
              <div className="terminal-dot bg-[#28c840]"></div>
              <span className="ml-4 text-eazy-grey text-xs font-mono">terminal — bash</span>
            </div>

            <div className="p-6 min-h-[220px] font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent-primary">$</span>
                <span className="text-eazy-off-white">./identify.sh</span>
              </div>

              {stage >= 2 && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-eazy-grey mb-3 flex items-center gap-2"
                >
                  <span className="text-yellow-400">[*]</span>
                  <span>accessing network...</span>
                </motion.p>
              )}

              {stage >= 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-5 flex items-center gap-2"
                >
                  <span className="text-accent-primary">[+]</span>
                  <span className="text-eazy-grey">your ip: </span>
                  <span className="text-accent-primary font-semibold">{ip}</span>
                </motion.div>
              )}

              {stage >= 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 border border-eazy-border bg-eazy-card"
                >
                  <pre className="text-eazy-off-white text-base whitespace-pre-wrap leading-relaxed">
                    {typedText}
                    {!showContinue && <span className="cursor-blink"></span>}
                  </pre>
                </motion.div>
              )}

            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="h-8"></div>

        {/* Continue button - outside terminal */}
        {showContinue && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 border border-accent-primary bg-accent-primary/10 text-accent-primary text-sm font-mono tracking-wider uppercase">
              <span className="w-2 h-2 bg-accent-primary animate-pulse"></span>
              CLICK ANYWHERE TO CONTINUE
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom branding */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6"
      >
        <span className="font-display text-lg tracking-tight">
          <span className="text-accent-primary">DAMN</span>
          <span className="text-eazy-white">EAZY</span>
          <span className="text-eazy-grey">.DEV</span>
        </span>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
