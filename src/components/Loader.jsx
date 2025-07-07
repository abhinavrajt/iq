// src/components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative w-32 h-32">
        {/* Pulsing Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Rotating Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-500 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
        {/* Robot */}
        <motion.img
          src="/assets/robot.png"
          alt="Loading Robot"
          className="absolute inset-0 w-24 h-24 m-auto"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
}
