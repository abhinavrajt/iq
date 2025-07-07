// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  const socials = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-cyan-400 text-xl font-bold mb-4 md:mb-0">
          INQUA 25
        </h2>

        <div className="flex space-x-6">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#06b6d4" }}
              className="text-gray-400 text-xl transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} INQUA 25. All rights reserved.
      </div>

      {/* Scroll To Top Button */}
      <ScrollToTop
        smooth
        component={
          <div className="flex items-center justify-center text-cyan-400 text-xl">
            <FaArrowUp />
          </div>
        }
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      />
    </footer>
  );
}
