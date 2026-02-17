import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  emoji: string;
  gradient: string;
}
const testimonials: Testimonial[] = [
{
  quote:
  "Sajjad completely transformed our social media presence. We went from 5K to 200K followers in 6 months, and more importantly, our sales tripled. Best investment we've ever made.",
  name: 'Sarah Chen',
  role: 'CMO',
  company: 'FreshBite Foods',
  rating: 5,
  emoji: '👩‍💼',
  gradient: 'from-violet-brand to-purple-500'
},
{
  quote:
  'The SEO strategy Sajjad built for us was a game-changer. We now rank #1 for 40+ high-intent keywords and our organic traffic is up 380%. Truly exceptional work.',
  name: 'Marcus Johnson',
  role: 'Founder & CEO',
  company: 'TechStart SaaS',
  rating: 5,
  emoji: '👨‍💻',
  gradient: 'from-magenta-brand to-pink-400'
},
{
  quote:
  'Working with Sajjad on our paid ads was incredible. Our ROAS went from 2x to 7.5x in just three months. The level of detail and optimization is unmatched.',
  name: 'Elena Rodriguez',
  role: 'VP of Marketing',
  company: 'LuxeWear Fashion',
  rating: 5,
  emoji: '👩‍🎨',
  gradient: 'from-orange-brand to-amber-400'
},
{
  quote:
  "Sajjad doesn't just run campaigns — they build growth engines. Our brand awareness increased 400% and we've become the go-to name in our niche. Highly recommend.",
  name: 'David Park',
  role: 'Co-Founder',
  company: 'GreenLeaf Wellness',
  rating: 5,
  emoji: '🧑‍🔬',
  gradient: 'from-emerald-500 to-teal-400'
}];

function GradientStars({
  rating,
  gradient



}: {rating: number;gradient: string;}) {
  return (
    <div className="flex gap-1">
      {Array.from({
        length: 5
      }).map((_, i) =>
      <div
        key={i}
        className={`${i < rating ? `bg-gradient-to-r ${gradient}` : 'bg-gray-200'} rounded-sm p-0.5`}>

          <StarIcon
          className={`w-4 h-4 ${i < rating ? 'text-white fill-white' : 'text-gray-300'}`} />

        </div>
      )}
    </div>);

}
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-brand/[0.03] via-magenta-brand/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-16">

          <span className="text-sm font-bold uppercase tracking-widest gradient-text">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Loved by <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Don't just take my word for it — hear from the brands I've helped
            grow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {testimonials.map((t) =>
          <motion.div
            key={t.name}
            variants={cardVariants}
            className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-7 shadow-lg shadow-violet-brand/[0.04] relative">

              {/* Gradient quote mark */}
              <span
              className={`absolute top-5 right-6 text-6xl font-serif leading-none bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent opacity-30 select-none`}>

                ❝
              </span>

              <GradientStars rating={t.rating} gradient={t.gradient} />

              <p className="text-text-muted leading-relaxed mt-4 mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar with gradient border */}
                <div
                className={`bg-gradient-to-br ${t.gradient} p-[2px] rounded-full`}>

                  <div className="w-12 h-12 rounded-full bg-base flex items-center justify-center text-xl">
                    {t.emoji}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-text-primary">{t.name}</div>
                  <div className="text-sm text-text-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}