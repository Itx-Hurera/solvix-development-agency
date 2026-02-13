
import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';
import NeonButton from './NeonButton';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-darkGray/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">TRANSPARENT PRICING</h2>
          <p className="text-gray-400">Simple plans designed to scale with your business goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-8 rounded-3xl border ${plan.recommended ? 'border-neonBlue bg-neonBlue/5' : 'border-white/10 bg-background'} transition-all hover:scale-[1.02]`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neonBlue text-black font-bold text-xs px-4 py-1 rounded-full shadow-neonBlue uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="text-4xl font-display font-bold mb-8">
                {plan.price}
                {plan.price !== 'Custom' && <span className="text-lg text-gray-500 ml-1">USD</span>}
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-neonBlue" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <NeonButton 
                variant={plan.recommended ? 'blue' : 'purple'} 
                className="w-full"
                onClick={() => window.location.href = '#contact'}
              >
                Contact Us
              </NeonButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
