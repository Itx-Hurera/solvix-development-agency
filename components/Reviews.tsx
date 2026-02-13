
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">CLIENT REVIEWS</h2>
          <div className="w-24 h-1 bg-neonPurple mx-auto shadow-neonPurple"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="p-8 bg-darkGray border border-white/5 rounded-3xl relative group hover:border-neonPurple/30 transition-all">
              <Quote className="absolute top-6 right-6 text-neonPurple/20 group-hover:text-neonPurple/40 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neonBlue text-neonBlue" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neonPurple/20 rounded-full flex items-center justify-center font-bold text-neonPurple">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-gray-500 tracking-wider uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
