import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const bottomOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 opacity-50">
        <video
          src="/assets/bg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Logo - Web */}
      <div className="hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-20 text-center">
        <img
          src="/assets/logo.png"
          alt="INQUA Logo"
          className="w-[70vw] max-w-[1200px] mx-auto"
        />
      </div>

      {/* Logo - Mobile */}
      <div className="sm:hidden fixed top-[12%] left-1/2 -translate-x-1/2 z-20 text-center">
        <img
          src="/assets/logo.png"
          alt="INQUA Logo"
          className="w-[80vw] max-w-[320px] mx-auto"
        />
      </div>

      {/* Device - Web */}
      <motion.div
        style={{ scale, opacity: bottomOpacity }}
        className="hidden sm:flex fixed inset-0 justify-center z-30"
      >
        <div className="mt-16 md:mt-28">
          <img
            src="/assets/device.png"
            alt="Device"
            className="w-[60vw] max-w-[700px] h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Device - Mobile */}
      <motion.div
        style={{ scale, opacity: bottomOpacity }}
        className="sm:hidden fixed inset-x-0 bottom-[-60px] z-30 flex justify-center"
      >
        <img
          src="/assets/device.png"
          alt="Device"
          className="w-[80vw] max-w-[400px] h-auto object-contain mb-2"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-black z-30 pointer-events-none"
      />

      {/* Center Text */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none"
      >
        <h2 className="text-3xl sm:text-6xl font-extrabold text-white text-center px-4">
          Plug In. Power Up. Dive In.
        </h2>
      </motion.div>

      {/* Date + Button - Web */}
      <motion.div
        style={{ opacity: bottomOpacity }}
        className="hidden sm:flex fixed bottom-8 left-0 w-full justify-between items-end px-8 z-50 pointer-events-auto"
      >
        {/* Shifted Date (to the right) */}
        <div className="ml-20 text-white font-bold leading-tight">
          <div className="text-3xl">September</div>
          <div className="text-2xl tracking-widest">01, 02, 03</div>
        </div>

        {/* Shifted Button (to the left) */}
        <a
          href="#"
          className="mr-20 border border-white text-white px-8 py-3 rounded-full text-xl font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
        >
          Buy Tickets
        </a>
      </motion.div>

      {/* Date + Button - Mobile */}
      <motion.div
        style={{ opacity: bottomOpacity }}
        className="sm:hidden fixed bottom-[500px] w-full z-[60] flex flex-col items-center space-y-4"
      >
        <div className="text-white font-semibold text-center leading-tight drop-shadow-sm">
          <div className="text-2xl">September</div>
          <div className="text-xl tracking-widest">01, 02, 03</div>
        </div>
        <a
          href="#"
          className="
            px-6 py-2 rounded-full text-base font-semibold
            border border-cyan-400
            text-white
            bg-white/10 backdrop-blur-sm
            transition-all duration-300 ease-in-out
            hover:bg-cyan-500 hover:text-black
            hover:shadow-md
          "
        >
          Buy Tickets
        </a>
      </motion.div>
    </section>
  );
}
