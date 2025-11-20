import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Anchor, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-gray-400 py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 text-white">
              <div className="relative flex items-center justify-center w-10 h-10">
                 <div className="absolute inset-0 bg-grace-gold/20 rounded-full blur-md"></div>
                 <Anchor className="relative z-10 h-6 w-6 text-grace-gold" />
              </div>
              <div>
                <span className="block text-xl font-bold font-serif tracking-wide">THE ARK</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-grace-gold">Grace Worship Center</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Raising a generation of believers who impact the world through the power of the Holy Spirit.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
               <MapPin size={14} className="text-grace-gold" />
               <span>2/3 Frank-Aliemen Street, Warri.</span>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com/gwctheark" target="_blank" rel="noreferrer" className="bg-gray-900 p-3 rounded-full hover:bg-grace-gold hover:text-grace-dark transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-grace-gold hover:text-grace-dark transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-900 p-3 rounded-full hover:bg-grace-gold hover:text-grace-dark transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-grace-gold transition-colors">About Us</Link></li>
              <li><Link to="/sermons" className="hover:text-grace-gold transition-colors">Sermons Archive</Link></li>
              <li><Link to="/events" className="hover:text-grace-gold transition-colors">Events Calendar</Link></li>
              <li><Link to="/give" className="hover:text-grace-gold transition-colors">Giving</Link></li>
              <li><Link to="/contact" className="hover:text-grace-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Service Times</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-gray-900 pb-2">
                  <span>Sunday Service</span> 
                  <span className="text-white font-bold">8:30 AM</span>
              </li>
              <li className="flex justify-between border-b border-gray-900 pb-2">
                  <span>Mid-Week (Wed)</span> 
                  <span className="text-white font-bold">4:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Stay Connected</h3>
            <p className="text-xs mb-4">Subscribe for updates and monthly themes.</p>
            <div className="flex">
              <input type="email" placeholder="Enter email" className="bg-gray-900 border-none text-white px-4 py-3 w-full rounded-l-lg focus:ring-1 focus:ring-grace-gold outline-none text-sm" />
              <button className="bg-grace-gold text-grace-dark px-4 py-3 rounded-r-lg hover:bg-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Grace Worship Center (The Ark). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;