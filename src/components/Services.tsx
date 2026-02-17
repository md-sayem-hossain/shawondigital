import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Share2Icon,
  SearchIcon,
  TargetIcon,
  MailIcon,
  PaletteIcon,
  BarChart3Icon } from
'lucide-react';
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: string[];
  gradient: string;
}
const services: Service[] = [
{
  icon: Share2Icon,
  title: 'Social Media Marketing',
  description:
  'Build an engaged community and turn followers into brand advocates across every platform.',
  bullets: [
  'Content calendars & strategy',
  'Community management',
  'Influencer partnerships'],

  gradient: 'from-violet-brand to-purple-500'
},
{
  icon: SearchIcon,
  title: 'SEO & Content Strategy',
  description:
  'Dominate search results with content that ranks, resonates, and converts.',
  bullets: [
  'Technical SEO audits',
  'Keyword strategy',
  'Long-form content creation'],

  gradient: 'from-blue-500 to-cyan-400'
},
{
  icon: TargetIcon,
  title: 'Paid Advertising',
  description:
  'Maximize ROAS with precision-targeted campaigns across Google, Meta, and beyond.',
  bullets: [
  'Google & Meta Ads',
  'Retargeting funnels',
  'A/B testing & optimization'],

  gradient: 'from-magenta-brand to-pink-400'
},
{
  icon: MailIcon,
  title: 'Email Marketing',
  description:
  'Nurture leads and drive repeat revenue with automated email sequences that convert.',
  bullets: [
  'Drip campaigns',
  'Segmentation & personalization',
  'Deliverability optimization'],

  gradient: 'from-orange-brand to-amber-400'
},
{
  icon: PaletteIcon,
  title: 'Brand Strategy',
  description:
  'Craft a brand identity that cuts through noise and creates lasting emotional connections.',
  bullets: [
  'Brand positioning',
  'Visual identity systems',
  'Messaging frameworks'],

  gradient: 'from-rose-500 to-orange-400'
},
{
  icon: BarChart3Icon,
  title: 'Analytics & Reporting',
  description:
  'Transform data into actionable insights with custom dashboards and clear reporting.',
  bullets: [
  'Custom dashboards',
  'Attribution modeling',
  'Monthly performance reviews'],

  gradient: 'from-emerald-500 to-teal-400'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
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
export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-brand/[0.02] to-transparent pointer-events-none" />

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
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            End-to-end digital marketing solutions tailored to your brand's
            unique goals and audience.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) =>
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3
              }
            }}
            className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-7 shadow-lg shadow-violet-brand/[0.04] hover:shadow-xl hover:shadow-violet-brand/10 transition-shadow duration-300">

              {/* Icon */}
              <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>

                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-extrabold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.bullets.map((bullet) =>
              <li
                key={bullet}
                className="flex items-center gap-2 text-sm text-text-muted">

                    <span
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />

                    {bullet}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}