import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { api } from '../services/dataService';
import { Event } from '../types';
import { MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.getEvents().then(setEvents);
  }, []);

  return (
    <div className="min-h-screen bg-grace-dark">
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-grace-blue to-grace-dark"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-white">Upcoming Events</h1>
          <p className="text-xl text-gray-300">Get involved, connect, and serve.</p>
        </div>
      </div>

      <Section dark>
        <div className="space-y-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                  {/* Date Column Mobile */}
                  <div className="md:hidden bg-grace-gold p-4 flex items-center justify-between text-grace-dark font-bold">
                      <span className="uppercase tracking-widest text-sm">{event.category}</span>
                      <span className="text-lg">{event.date}</span>
                  </div>

                  {/* Image */}
                  <div className="md:w-2/5 relative min-h-[240px] overflow-hidden">
                      <img src={event.imageUrl} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
                      {/* Desktop Date Badge */}
                      <div className="hidden md:flex absolute -left-6 top-8 bg-grace-gold text-grace-dark font-bold rounded-r-full py-2 pl-8 pr-6 items-center shadow-lg z-10">
                         <Calendar size={18} className="mr-2" /> {event.date}
                      </div>

                      <div className="md:ml-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 bg-white/10 text-grace-gold rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">{event.category}</span>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-grace-gold transition-colors">{event.title}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-grace-gold" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-grace-gold" />
                                <span>{event.location}</span>
                            </div>
                        </div>

                        <button className="group/btn flex items-center gap-2 text-white font-bold hover:text-grace-gold transition-colors uppercase text-sm tracking-widest">
                            Register Now <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Looking for something else?</p>
            <button className="border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-grace-dark transition-colors font-bold">
                View Full Church Calendar
            </button>
        </div>
      </Section>
    </div>
  );
};

export default Events;