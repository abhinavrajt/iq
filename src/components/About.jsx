import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full bg-black py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          About INQUA 25
        </h2>
        <p className="text-lg text-gray-300">
          INQUA 25 is the flagship annual tech festival of our college—a celebration of innovation,
          creativity, and the limitless potential of technology.
        </p>
      </div>
    </motion.section>
  );
}
