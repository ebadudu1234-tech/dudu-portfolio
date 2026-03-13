import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen = ({ onBootComplete }: BootScreenProps) => {
  const [phase, setPhase] = useState<"logo" | "loading" | "done">("logo");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Phase 1: Show logo
    const logoTimer = setTimeout(() => setPhase("loading"), 800);
    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setPhase("done");
            setTimeout(onBootComplete, 400);
          }, 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [phase, onBootComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-foreground"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Retro Mac icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="text-[48px] select-none">🖥️</div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            className="text-[12px] font-retro text-primary-foreground mb-4 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {phase === "logo" ? "Starting up..." : "Loading Desktop..."}
          </motion.p>

          {/* Progress bar */}
          {phase === "loading" && (
            <motion.div
              className="w-[200px] h-[8px] retro-inset bg-secondary overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div
                className="h-full bg-accent transition-all duration-100"
                style={{ width: `${Math.min(progress, 100)}%`, background: "hsl(var(--highlight))" }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
