import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}