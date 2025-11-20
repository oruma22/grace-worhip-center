import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Play, MapPin, Clock, Heart } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { api } from '../services/dataService';
import { Sermon, Event } from '../types';

const Home: React.FC = () => {
  const [latestSermon, setLatestSermon] = useState<Sermon | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    api.getSermons().then(data => setLatestSermon(data[0]));
    api.getEvents().then(data => setUpcomingEvents(data.slice(0, 2)));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full overflow-x-hidden bg-grace-dark font-sans">
      {/* Hero Section - Matching "Sunday Service" Poster Style */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-60">
          {/* Fire/Orange Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-grace-fire-dark to-black mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-grace-fire to-transparent opacity-40"></div>
          <img 
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop" 
            alt="Worship Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50 grayscale"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
             <h3 className="text-white/90 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
               Join us this
             </h3>
             
             {/* Big Typographic Title */}
             <div className="relative leading-none mb-8">
               <h1 className="text-[15vw] md:text-[180px] font-black text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
                 SUNDAY
               </h1>
               <h1 className="text-[12vw] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter leading-[0.85] text-stroke-gold">
                 SERVICE
               </h1>
             </div>

             {/* Ministering Info */}
             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-left bg-black/30 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-full bg-grace-gold flex items-center justify-center">
                      <Play fill="black" className="ml-1" />
                   </div>
                   <div>
                      <span className="block text-grace-gold text-xs font-bold uppercase tracking-widest">Ministering</span>
                      <span className="block text-xl md:text-3xl font-bold text-white font-serif">BISHOP JOHN ORUMA</span>
                   </div>
                </div>
                
                <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-white/20"></div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                   <div>
                      <span className="flex items-center gap-2 text-grace-gold text-xs font-bold uppercase tracking-widest mb-1">
                        <Calendar size={12} /> Date
                      </span>
                      <span className="text-white font-bold text-lg">THIS SUNDAY</span>
                   </div>
                   <div>
                      <span className="flex items-center gap-2 text-grace-gold text-xs font-bold uppercase tracking-widest mb-1">
                        <Clock size={12} /> Time
                      </span>
                      <span className="text-white font-bold text-lg">8:30 AM</span>
                   </div>
                </div>
             </div>
             
             <div className="mt-12 flex gap-4">
                <Link to="/sermons" className="bg-grace-fire hover:bg-white hover:text-grace-fire-dark text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(232,93,4,0.5)]">
                  Watch Live
                </Link>
                <Link to="/about" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all">
                  Plan Visit
                </Link>
             </div>
          </motion.div>
        </div>
      </div>

      {/* November Theme Section - Matching "His Mercies" Poster */}
      <section className="relative py-24 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0505] to-black z-0"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               {/* Text Content */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="inline-block bg-white text-black px-4 py-1 rounded font-bold uppercase tracking-widest text-sm mb-6">
                    November 2025
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black text-grace-gold mb-2 font-serif uppercase leading-none">
                    Our Month of
                  </h2>
                  <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8 uppercase leading-none shadow-lg">
                    HIS MERCIES
                  </h2>
                  <p className="text-xl text-gray-300 italic font-serif mb-8 border-l-4 border-grace-gold pl-6">
                    "May grace speak for you and favor go before you. The Lord will make you the head and not the tail."
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-gray-400">
                    <Heart className="text-red-500 fill-current" /> 12 Likes
                    <span className="mx-2">•</span>
                    11 Comments
                  </div>
               </motion.div>

               {/* Image Composition */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
               >
                  <div className="absolute -inset-4 bg-grace-fire rounded-full blur-[100px] opacity-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1974&auto=format&fit=crop" 
                    alt="Bishop John Oruma" 
                    className="relative rounded-3xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                     <h4 className="text-white font-bold uppercase text-sm">Bishop John Oruma</h4>
                     <p className="text-grace-gold text-xs uppercase tracking-widest">Presiding Bishop</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Mid-Week Service Section - Deep Blue/Purple Theme */}
      <Section dark className="bg-gradient-to-br from-grace-purple to-black relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-grace-purple-light rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
         
         <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <span className="text-white/60 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">
                    Join us this Wednesday
                  </span>
                  <h2 className="text-6xl md:text-8xl font-black text-white mb-2 uppercase leading-[0.8]">
                    Mid-Week
                  </h2>
                  <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 uppercase leading-[0.8]">
                    Service
                  </h2>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                     <span className="px-4 py-2 bg-white/10 rounded-lg text-white font-bold uppercase text-sm">Worship</span>
                     <span className="px-4 py-2 bg-grace-gold text-black rounded-lg font-bold uppercase text-sm">Prayer</span>
                     <span className="px-4 py-2 bg-white/10 rounded-lg text-white font-bold uppercase text-sm">The Word</span>
                  </div>
                  
                  <div className="flex items-start gap-6 text-gray-300 mb-8">
                     <div>
                        <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Time</span>
                        <span className="text-2xl font-bold text-white">4:30 PM</span>
                     </div>
                     <div className="w-[1px] bg-white/20 h-12"></div>
                     <div>
                        <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Location</span>
                        <span className="text-lg font-bold text-white leading-tight">
                          Church Auditorium<br/>
                          <span className="text-sm font-normal opacity-70">2/3 Frank-Aliemen Street, Warri</span>
                        </span>
                     </div>
                  </div>
               </motion.div>
            </div>
            
            <div className="md:col-span-5 relative">
                <div className="border-2 border-white/20 p-2 rounded-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=2070&auto=format&fit=crop" 
                      className="rounded-xl shadow-2xl w-full" 
                      alt="Midweek Service" 
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-grace-gold text-black p-6 rounded-xl font-bold shadow-xl hidden md:block">
                   <span className="block text-3xl font-serif">5th</span>
                   <span className="block text-sm uppercase tracking-widest">Nov. 2025</span>
                </div>
            </div>
         </div>
      </Section>

      {/* Location Banner */}
      <div className="bg-white text-grace-dark py-16 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
               <h3 className="text-3xl font-serif font-bold mb-2">Visit The Ark</h3>
               <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="text-grace-fire" />
                  <p>2/3 Frank-Aliemen Street, Off Okere-Ugborikoko Road, Warri.</p>
               </div>
            </div>
            <Link to="/contact" className="bg-grace-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-grace-fire transition-colors">
               Get Directions
            </Link>
         </div>
      </div>

    </div>
  );
};

export default Home;