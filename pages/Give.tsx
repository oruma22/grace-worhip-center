import React from 'react';
import { Section } from '../components/ui/Section';

const Give: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-grace-dark mb-6">Generosity</h1>
          <p className="text-xl text-gray-600 mb-12">
            Giving is an act of worship. Thank you for your generosity which helps us reach more people with the message of Jesus.
          </p>
          
          <div className="bg-grace-light p-8 rounded-3xl border border-gray-200 shadow-sm">
             <div className="flex flex-col gap-6 max-w-sm mx-auto">
                <button className="w-full bg-grace-gold text-grace-dark py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors">
                    Give One-Time
                </button>
                <button className="w-full bg-white border-2 border-grace-dark text-grace-dark py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
                    Set Up Recurring Giving
                </button>
             </div>
             <p className="text-xs text-gray-400 mt-6">Secure payment processing powered by Stripe.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Give;