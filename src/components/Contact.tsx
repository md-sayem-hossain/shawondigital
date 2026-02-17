import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SendIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  HeartIcon,
  ZapIcon } from
'lucide-react';
const socialLinks = [
{
  icon: TwitterIcon,
  label: 'Twitter / X',
  gradient: 'from-violet-brand to-blue-500'
},
{
  icon: LinkedinIcon,
  label: 'LinkedIn',
  gradient: 'from-blue-600 to-cyan-500'
},
{
  icon: InstagramIcon,
  label: 'Instagram',
  gradient: 'from-magenta-brand to-orange-brand'
},
{
  icon: YoutubeIcon,
  label: 'YouTube',
  gradient: 'from-red-500 to-rose-400'
}];

const budgetOptions = [
'Select a budget range',
'$1,000 - $5,000',
'$5,000 - $15,000',
'$15,000 - $50,000',
'$50,000+',
'Not sure yet'];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const inputClass = (field: string) =>
  `w-full px-5 py-3.5 rounded-xl bg-white border-2 transition-all duration-300 outline-none text-text-primary placeholder:text-text-muted/50 ${focusedField === field ? 'border-transparent ring-2 ring-violet-brand/50 shadow-lg shadow-violet-brand/10' : 'border-gray-200 hover:border-gray-300'}`;
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-brand/[0.04] via-transparent to-transparent pointer-events-none" />

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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Let's Create <span className="gradient-text">Magic</span>
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Let's chat about your
            goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
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
            className="lg:col-span-3">

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg shadow-violet-brand/[0.04] space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-text-primary mb-2">

                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('name')} />

                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-text-primary mb-2">

                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('email')} />

                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold text-text-primary mb-2">

                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('company')} />

                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-bold text-text-primary mb-2">

                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('budget')}>

                    {budgetOptions.map((opt) =>
                    <option
                      key={opt}
                      value={opt === budgetOptions[0] ? '' : opt}>

                        {opt}
                      </option>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-text-primary mb-2">

                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClass('message')} resize-none`} />

              </div>

              <motion.button
                type="submit"
                className="relative w-full py-4 rounded-xl bg-gradient-to-r from-violet-brand via-magenta-brand to-orange-brand text-white font-bold text-lg shadow-lg shadow-violet-brand/25 overflow-hidden group"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}>

                <span className="relative z-10 flex items-center justify-center gap-2">
                  <SendIcon className="w-5 h-5" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </motion.button>
            </form>
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="lg:col-span-2 space-y-8">

            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-7 shadow-lg shadow-violet-brand/[0.04]">
              <h3 className="text-xl font-extrabold text-text-primary mb-5">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-brand to-purple-500 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Email</div>
                    <div className="font-semibold text-text-primary">
                      hello@sajjadhossen.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-magenta-brand to-pink-400 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Location</div>
                    <div className="font-semibold text-text-primary">
                      Los Angeles, CA (Remote-friendly)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-brand to-amber-400 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">Office Hours</div>
                    <div className="font-semibold text-text-primary">
                      Mon–Fri, 9AM–6PM PST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-7 shadow-lg shadow-violet-brand/[0.04]">
              <h3 className="text-xl font-extrabold text-text-primary mb-5">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) =>
                <motion.a
                  key={social.label}
                  href="#"
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/80 transition-colors"
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.97
                  }}>

                    <div
                    className={`w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-gradient-to-br group-hover:${social.gradient} flex items-center justify-center transition-all duration-300`}>

                      <social.icon className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-text-muted group-hover:text-text-primary transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-violet-brand via-magenta-brand to-orange-brand rounded-2xl p-7 text-white">
              <h3 className="text-xl font-extrabold mb-2">Ready to grow?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Book a free 30-minute strategy call and let's map out your
                growth plan.
              </p>
              <motion.button
                className="w-full py-3 rounded-xl bg-white text-text-primary font-bold text-sm hover:bg-white/90 transition-colors"
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.97
                }}>

                Book a Free Call →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="mt-24 pt-8 border-t border-gray-200">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-brand via-magenta-brand to-orange-brand flex items-center justify-center">
                <ZapIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-text-primary">
                Sajjad<span className="gradient-text">Hossen</span>
              </span>
            </div>
            <p className="text-sm text-text-muted flex items-center gap-1">
              © 2026 Sajjad Hossen. Made with{' '}
              <HeartIcon className="w-3.5 h-3.5 text-magenta-brand fill-magenta-brand" />{' '}
              and lots of coffee.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>);

}