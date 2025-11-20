import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { api } from '../services/dataService';
import { Sermon } from '../types';
import { Play, Search, Filter, Clock, ChevronDown, X, Calendar, User, Share2, Headphones, ArrowRight } from 'lucide-react';

const Sermons: React.FC = () => {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All Series');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  useEffect(() => {
    api.getSermons().then((data) => {
      setSermons(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (selectedSermon) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSermon]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getRelatedSermons = (current: Sermon) => {
    let related = sermons.filter(s => s.id !== current.id && s.series === current.series);
    if (related.length < 2) {
      const others = sermons.filter(s => s.id !== current.id && s.series !== current.series);
      related = [...related, ...others];
    }
    return related.slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-grace-dark selection:bg-grace-purple-light selection:text-white">
      {/* Header Background - Shift Splash Theme */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-purple-gradient opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
                    <Headphones className="text-grace-purple-light w-8 h-8" />
                </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 text-white tracking-tight uppercase">
              Shift <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Splash</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Access the audio archives. Every message is a shift in the atmosphere.
            </p>
          </motion.div>
        </div>
      </div>

      <Section dark className="pt-0 -mt-20 relative z-20">
        {/* Search & Filter Bar */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0F0518]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-2"
          >
             <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search message title..." 
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent text-white placeholder-gray-500 focus:outline-none focus:bg-white/5 transition-all"
                />
             </div>
             <div className="relative md:w-64">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                <select 
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 rounded-xl bg-[#1A0B2E] text-white border-none appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-500 hover:bg-[#240F3E] transition-colors"
                >
                    <option>All Series</option>
                    <option>Shift Splash</option>
                    <option>His Mercies</option>
                    <option>Mid-Week Service</option>
                </select>
             </div>
          </motion.div>
        </div>

        {loading ? (
           <div className="flex justify-center py-20">
             <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
           </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {sermons.map((sermon) => (
              <motion.div 
                key={sermon.id} 
                variants={cardVariants}
                onClick={() => setSelectedSermon(sermon)}
                whileHover={{ scale: 1.02 }}
                className="bg-[#0F0518] rounded-2xl overflow-hidden group border border-white/5 hover:border-purple-500/50 shadow-lg hover:shadow-[0_0_30px_-10px_rgba(147,51,234,0.3)] flex flex-col h-full cursor-pointer transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={sermon.thumbnailUrl} 
                      alt={sermon.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] via-transparent to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                            <Play fill="white" className="text-white ml-1" size={28} />
                        </div>
                    </div>

                    {/* Series Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                        {sermon.series}
                      </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 relative">
                  <div className="flex items-center gap-2 text-xs text-purple-400 font-bold uppercase tracking-wider mb-3">
                    <Calendar size={12} />
                    <span>{sermon.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                    {sermon.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm font-medium mb-4">{sermon.preacher}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">Listen Now</span>
                    <ArrowRight size={16} className="text-purple-500 transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>

      {/* Sermon Details Modal */}
      <AnimatePresence>
        {selectedSermon && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSermon(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0310] border border-purple-500/30 rounded-3xl shadow-[0_0_50px_rgba(147,51,234,0.15)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedSermon(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-purple-600 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Left Column: Visual */}
              <div className="md:w-1/2 bg-black relative group h-64 md:h-auto">
                 <img 
                   src={selectedSermon.thumbnailUrl} 
                   alt={selectedSermon.title}
                   className="w-full h-full object-cover opacity-80" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0310] to-transparent opacity-90"></div>
                 
                 <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold uppercase tracking-widest mb-4">
                      Now Playing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {selectedSermon.title}
                    </h2>
                    <p className="text-purple-300 text-lg">{selectedSermon.preacher}</p>
                 </div>
              </div>

              {/* Right Column: Actions & Details */}
              <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto bg-[#0A0310]">
                 <div className="mb-10">
                    <div className="flex gap-4 mb-8">
                       <button className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors uppercase text-sm tracking-wider flex items-center justify-center gap-2">
                         <Play fill="currentColor" size={16} /> Play Audio
                       </button>
                       <button className="p-4 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors">
                         <Share2 size={20} />
                       </button>
                    </div>

                    <div className="space-y-6 text-gray-400">
                        <div>
                            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Series</h4>
                            <p className="text-purple-400">{selectedSermon.series}</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Description</h4>
                            <p className="leading-relaxed text-sm">
                               {selectedSermon.description}
                            </p>
                        </div>
                    </div>
                 </div>

                 {/* Related List */}
                 <div className="pt-8 border-t border-white/10">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Next in Series</h3>
                    <div className="space-y-3">
                       {getRelatedSermons(selectedSermon).map(related => (
                          <div 
                            key={related.id} 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSermon(related);
                            }}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer group/related transition-colors"
                          >
                             <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover/related:bg-purple-600 group-hover/related:text-white transition-all">
                                <Play size={14} fill="currentColor" />
                             </div>
                             <div>
                                <h4 className="text-white font-bold text-sm group-hover/related:text-purple-400 transition-colors line-clamp-1">{related.title}</h4>
                                <span className="text-xs text-gray-500 block">{related.date}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sermons;