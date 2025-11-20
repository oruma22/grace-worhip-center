import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Give', path: '/give' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-grace-dark/90 backdrop-blur-xl border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10">
             <div className="absolute inset-0 bg-grace-gold/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
             <Anchor className="relative z-10 h-6 w-6 text-grace-gold transform group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wider font-serif leading-none">
              GRACE
            </span>
            <span className="text-xs text-grace-gold tracking-[0.2em] font-medium">
              WORSHIP CENTER
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group py-2"
            >
              <span className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.path ? 'text-grace-gold' : 'text-gray-300 group-hover:text-white'
              }`}>
                {link.name}
              </span>
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-grace-gold transform origin-left transition-transform duration-300 ${
                 location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}></span>
            </Link>
          ))}
          
          <Link 
            to="/give"
            className="px-6 py-2 bg-gradient-to-r from-grace-gold to-yellow-300 text-grace-dark font-bold uppercase text-xs tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow duration-300"
          >
            Give Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-white p-2 hover:text-grace-gold transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-serif text-white hover:text-grace-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;