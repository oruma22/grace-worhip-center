import React from 'react';
import { Section } from '../components/ui/Section';
import { MapPin, Phone, Mail, Send, Anchor } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
                <div className="inline-block mb-4 p-3 bg-grace-gold/10 rounded-full">
                    <Anchor className="text-grace-gold h-8 w-8" />
                </div>
                <h1 className="text-5xl font-bold text-grace-dark mb-6">Get in Touch</h1>
                <p className="text-gray-600 mb-8">We are here for you. Visit us in Warri or reach out online.</p>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-grace-light rounded-lg text-grace-gold shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Church Auditorium</h3>
                            <p className="text-gray-600 leading-relaxed">
                                2/3 Frank-Aliemen Street,<br />
                                Off Okere-Ugborikoko Road,<br />
                                Warri, Nigeria.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-grace-light rounded-lg text-grace-gold shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                            <p className="text-gray-600">+234 (0) 800 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-grace-light rounded-lg text-grace-gold shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                            <p className="text-gray-600">info@gwctheark.org</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-grace-light p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-grace-dark">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-grace-gold outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-grace-gold outline-none transition-all" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-grace-gold outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-grace-gold outline-none transition-all"></textarea>
                    </div>
                    <button className="w-full bg-grace-dark text-white py-4 rounded-xl font-bold hover:bg-grace-fire transition-colors flex items-center justify-center gap-2 shadow-lg">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;