import React, { useEffect, useRef, Children } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate } from
'framer-motion';
import {
  ArrowRightIcon,
  UsersIcon,
  DollarSignIcon,
  EyeIcon } from
'lucide-react';
function AnimatedCounter({
  target,
  suffix = ''



}: {target: number;suffix?: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      });
    }
  }, [isInView, target, count]);
  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}
const stats = [
{
  icon: UsersIcon,
  value: 150,
  suffix: '+',
  label: 'Clients Served',
  gradient: 'from-violet-brand to-purple-500'
},
{
  icon: DollarSignIcon,
  value: 2,
  suffix: 'M+',
  label: 'Revenue Generated',
  gradient: 'from-magenta-brand to-pink-400'
},
{
  icon: EyeIcon,
  value: 500,
  suffix: 'M+',
  label: 'Impressions',
  gradient: 'from-orange-brand to-amber-400'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
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
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 animate-blob-float"
          style={{
            background:
            'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F97316 100%)',
            filter: 'blur(80px)'
          }} />

        <div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] opacity-20 animate-blob-float-reverse"
          style={{
            background:
            'linear-gradient(225deg, #F97316 0%, #EC4899 50%, #7C3AED 100%)',
            filter: 'blur(70px)'
          }} />

        <div
          className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] opacity-20 animate-blob-float"
          style={{
            background: 'linear-gradient(45deg, #EC4899 0%, #7C3AED 100%)',
            filter: 'blur(60px)',
            animationDelay: '2s'
          }} />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">

            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-brand/10 via-magenta-brand/10 to-orange-brand/10 text-violet-brand border border-violet-brand/20">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-brand to-magenta-brand animate-pulse" />
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-text-primary mb-6">

              I Help Brands{' '}
              <span className="bg-gradient-to-r from-violet-brand via-magenta-brand to-orange-brand bg-clip-text text-transparent">
                Go Viral
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-muted leading-relaxed mb-8 max-w-lg">

              Digital marketing strategist with 8+ years of experience turning
              brands into cultural phenomena. From Fortune 500 to scrappy
              startups — I drive measurable growth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4">

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-brand via-magenta-brand to-orange-brand text-white font-bold text-lg shadow-lg shadow-violet-brand/25 overflow-hidden group"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.97
                }}>

                <span className="relative z-10 flex items-center gap-2">
                  Let's Work Together
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
              </motion.a>

              <motion.a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-bold text-text-primary text-lg hover:bg-white/80 transition-colors"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.97
                }}>

                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Glassmorphism Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotateY: -10
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative">

            <div className="animate-float-gentle">
              <div className="glass rounded-3xl p-8 shadow-2xl shadow-violet-brand/10">
                {/* Profile Area */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-brand via-magenta-brand to-orange-brand p-0.5">
                    <div className="w-full h-full rounded-[14px] bg-base flex items-center justify-center text-3xl">
                      🚀
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-text-primary">
                      Alex Rivera
                    </h2>
                    <p className="text-text-muted font-medium">
                      Digital Marketing Strategist
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) =>
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-2xl bg-white/50 border border-white/40">

                      <div
                      className={`w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>

                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-black text-text-primary">
                        <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix} />

                      </div>
                      <div className="text-xs text-text-muted font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  )}
                </div>

                {/* Gradient bar at bottom */}
                <div className="mt-6 h-1.5 rounded-full bg-gradient-to-r from-violet-brand via-magenta-brand to-orange-brand opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}