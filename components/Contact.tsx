
import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Send, Smartphone } from 'lucide-react';
import NeonButton from './NeonButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = new URLSearchParams();
    body.append("form-name", "contact");
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value as string);
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    })
      .then((res) => {
        if (res.ok) {
          alert("Thanks for reaching out! We'll get back to you within 24 hours.");
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error("Form submission failed");
        }
        setIsSubmitting(false);
      })
      .catch(error => {
        alert("Something went wrong. Please try again later.");
        console.error(error);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-darkGray/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8">
                LET'S BUILD <br />
                <span className="text-neonBlue neon-glow-text">SOMETHING AMAZING</span> TOGETHER
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Have a project in mind? We'd love to hear about it. Our team is ready to help you navigate the future of the web.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-neonBlue/10 flex items-center justify-center group-hover:bg-neonBlue group-hover:text-black transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-gray-500">hello@solvixdev.dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-neonPurple/10 flex items-center justify-center group-hover:bg-neonPurple group-hover:text-white transition-all duration-300">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <p className="text-gray-500">+92 330 1032807</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://wa.me/message/J3I6E224T7X2G1"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
                >
                  <MessageSquare size={20} />
                  QUICK WHATSAPP CONTACT
                </a>
              </div>
            </div>

            <div className="bg-background border border-white/10 p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neonBlue/5 blur-3xl pointer-events-none"></div>
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-darkGray border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonBlue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-darkGray border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonBlue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full bg-darkGray border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neonBlue transition-all resize-none"
                  ></textarea>
                </div>
                <NeonButton
                  type="submit"
                  variant="blue"
                  className="w-full"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </NeonButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
