import React, { Children } from 'react';
import { motion } from 'framer-motion';
const skills = [
{
  name: 'SEO',
  gradient: 'from-violet-600 to-blue-500'
},
{
  name: 'PPC Advertising',
  gradient: 'from-magenta-brand to-pink-400'
},
{
  name: 'Social Media',
  gradient: 'from-orange-brand to-amber-400'
},
{
  name: 'Content Strategy',
  gradient: 'from-emerald-500 to-teal-400'
},
{
  name: 'Email Marketing',
  gradient: 'from-blue-500 to-cyan-400'
},
{
  name: 'Analytics',
  gradient: 'from-purple-600 to-magenta-brand'
},
{
  name: 'Brand Strategy',
  gradient: 'from-rose-500 to-orange-400'
},
{
  name: 'Conversion Optimization',
  gradient: 'from-indigo-500 to-violet-400'
},
{
  name: 'Influencer Marketing',
  gradient: 'from-pink-500 to-rose-400'
},
{
  name: 'Video Marketing',
  gradient: 'from-amber-500 to-yellow-400'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="mb-16">

          <span className="text-sm font-bold uppercase tracking-widest gradient-text">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Turning Clicks Into <span className="gradient-text">Customers</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio with gradient accent bar */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex gap-6">

            {/* Gradient accent sidebar */}
            <div className="hidden sm:block w-1.5 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-brand via-magenta-brand to-orange-brand" />

            <div className="space-y-5">
              <p className="text-lg text-text-muted leading-relaxed">
                I'm Alex Rivera, a digital marketing strategist who's spent the
                last 8+ years obsessing over what makes people click, share, and
                buy. I've had the privilege of working with Fortune 500 brands
                and bootstrapped startups alike.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                My approach is data-driven but creatively fearless. I believe
                the best marketing doesn't feel like marketing — it feels like
                culture. Whether it's a viral TikTok campaign or a meticulously
                optimized Google Ads funnel, I bring the same energy: relentless
                focus on measurable results.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                When I'm not deep in analytics dashboards, you'll find me
                speaking at marketing conferences, mentoring emerging marketers,
                or testing the latest platform features before they go
                mainstream.
              </p>

              {/* Quick highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/60 border border-white/40">
                  <div className="text-3xl font-black gradient-text">8+</div>
                  <div className="text-sm text-text-muted font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/60 border border-white/40">
                  <div className="text-3xl font-black gradient-text">50+</div>
                  <div className="text-sm text-text-muted font-medium">
                    Brands Scaled
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Skill Tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}>

            <h3 className="text-xl font-bold text-text-primary mb-6">
              My Toolkit
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) =>
              <motion.span
                key={skill.name}
                variants={itemVariants}
                className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${skill.gradient} shadow-lg shadow-black/10`}>

                  {skill.name}
                </motion.span>
              )}
            </div>

            {/* Tools */}
            <h3 className="text-xl font-bold text-text-primary mt-10 mb-6">
              Tools I Love
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              className="flex flex-wrap gap-3">

              {[
              'Google Ads',
              'Meta Ads',
              'HubSpot',
              'Semrush',
              'Google Analytics',
              'Figma',
              'Notion',
              'Zapier'].
              map((tool) =>
              <motion.span
                key={tool}
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-text-primary bg-white/70 border border-white/40 backdrop-blur-sm">

                  {tool}
                </motion.span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}