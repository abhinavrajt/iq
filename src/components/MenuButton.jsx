// src/components/MenuButton.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white hover:scale-110 transition"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Animated Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur z-40 flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link
              to="hero"
              smooth
              duration={600}
              offset={-80}
              onClick={closeMenu}
              className="text-3xl text-blue-400 font-bold cursor-pointer hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth
              duration={600}
              offset={-80}
              onClick={closeMenu}
              className="text-3xl text-blue-400 font-bold cursor-pointer hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="events"
              smooth
              duration={600}
              offset={-80}
              onClick={closeMenu}
              className="text-3xl text-blue-400 font-bold cursor-pointer hover:text-white transition"
            >
              Events
            </Link>
            <Link
              to="sponsors"
              smooth
              duration={600}
              offset={-80}
              onClick={closeMenu}
              className="text-3xl text-blue-400 font-bold cursor-pointer hover:text-white transition"
            >
              Sponsors
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
