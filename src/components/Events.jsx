import { motion } from "framer-motion";

export default function Events() {
  return (
    <motion.section
      id="events"
      className="-mt-12 relative z-40 bg-black py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
          Events
        </h2>
        <p className="text-lg text-gray-300">
          Explore competitions, talks, and workshops at INQUA 25.
        </p>
      </div>
    </motion.section>
  );
}
