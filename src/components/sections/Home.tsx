import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number, y: number, size: number, color: string, rotation: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const randomSize = Math.random() * 6 + 4; // Smaller cursor trail size
      const randomColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
      const randomRotation = Math.random() * 360;

      setTrail((prevTrail) => [
        ...prevTrail,
        { x: e.clientX, y: e.clientY, size: randomSize, color: randomColor, rotation: randomRotation }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const trailTimeout = setTimeout(() => {
      setTrail((prevTrail) => prevTrail.slice(1));
    }, 16);

    return () => clearTimeout(trailTimeout);
  }, [trail]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary via-accent to-highlight"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hi, I'm{' '}
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                'Narayan Parab',
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={0}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white mb-12"
        >
          Front-End Developer | Full-Stack Developer | Tech Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown
              size={30}
              className="mx-auto text-white animate-bounce"
            />
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-highlight rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-primary transform pointer-events-none transition-all"
        style={{
          left: `${cursorPos.x - 4}px`,
          top: `${cursorPos.y - 4}px`,
          transition: 'transform 0.1s ease, left 0.05s, top 0.05s',
        }}
      />
      {trail.map((dot, index) => (
        <div
          key={index}
          className="absolute pointer-events-none transition-all"
          style={{
            left: `${dot.x - dot.size / 2}px`,
            top: `${dot.y - dot.size / 2}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            borderRadius: '50%',
            opacity: 1 - index / 8,
            transform: `rotate(${dot.rotation}deg)`,
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out',
          }}
        />
      ))}
    </section>
  );
};

export default Home;
