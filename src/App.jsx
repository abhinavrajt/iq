// src/App.jsx
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import MenuButton from "./components/MenuButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          <MenuButton />
          <main>
            <section id="hero" className="relative z-10">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="events">
              <Events />
            </section>
            <section id="sponsors">
              <Sponsors />
            </section>
            <ScrollToTop />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
