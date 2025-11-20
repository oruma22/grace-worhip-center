import React, { useEffect, useState } from 'react';
import { Section } from '../components/ui/Section';
import { api } from '../services/dataService';
import { TeamMember } from '../types';
import { Heart, BookOpen, Users } from 'lucide-react';

const About: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    api.getTeam().then(setTeam);
  }, []);

  return (
    <div className="pt-24 min-h-screen">
       {/* Hero */}
       <div className="relative py-24 bg-grace-dark text-white text-center px-4">
         <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
         <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           We are a diverse community united by the love of Jesus, dedicated to sharing His light with the world.
         </p>
       </div>

       {/* Mission & Values */}
       <Section>
         <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl bg-grace-light hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-grace-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-grace-gold">
                    <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Love God</h3>
                <p className="text-gray-600">We believe worship is a lifestyle, not just a song. Everything starts with loving our Creator.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-grace-light hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-grace-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-grace-gold">
                    <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Love People</h3>
                <p className="text-gray-600">Community is our heartbeat. We are better together, serving one another in grace.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-grace-light hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-grace-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-grace-gold">
                    <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Serve the World</h3>
                <p className="text-gray-600">We are called to go out, impact culture, and bring hope to the hopeless.</p>
            </div>
         </div>
       </Section>

       {/* Leadership */}
       <Section dark>
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership</h2>
            <div className="h-1 w-20 bg-grace-gold mx-auto"></div>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
                <div key={member.id} className="text-center group">
                    <div className="relative mb-6 inline-block">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-grace-gold transition-colors">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-grace-gold font-medium mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto">{member.bio}</p>
                </div>
            ))}
         </div>
       </Section>
    </div>
  );
};

export default About;