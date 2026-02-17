import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate } from
'framer-motion';
import {
  ExternalLinkIcon,
  TrendingUpIcon,
  EyeIcon,
  PercentIcon } from
'lucide-react';
interface Project {
  title: string;
  client: string;
  category: string;
  gradient: string;
  emoji: string;
  metrics: {
    impressions: string;
    engagement: string;
    roi: string;
  };
  rawMetrics: {
    impressions: number;
    engagement: number;
    roi: number;
  };
}
const categories = ['All', 'Social Media', 'SEO', 'Paid Ads', 'Branding'];
const projects: Project[] = [
{
  title: 'Viral TikTok Campaign',
  client: 'FreshBite Foods',
  category: 'Social Media',
  gradient: 'from-violet-brand via-purple-500 to-blue-500',
  emoji: '🎬',
  metrics: {
    impressions: '45M',
    engagement: '8.2%',
    roi: '340%'
  },
  rawMetrics: {
    impressions: 45,
    engagement: 8,
    roi: 340
  }
},
{
  title: 'E-commerce SEO Overhaul',
  client: 'LuxeWear Fashion',
  category: 'SEO',
  gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
  emoji: '🔍',
  metrics: {
    impressions: '12M',
    engagement: '4.5%',
    roi: '520%'
  },
  rawMetrics: {
    impressions: 12,
    engagement: 4,
    roi: 520
  }
},
{
  title: 'Google Ads Scaling',
  client: 'TechStart SaaS',
  category: 'Paid Ads',
  gradient: 'from-magenta-brand via-pink-400 to-rose-400',
  emoji: '🎯',
  metrics: {
    impressions: '28M',
    engagement: '3.8%',
    roi: '680%'
  },
  rawMetrics: {
    impressions: 28,
    engagement: 3,
    roi: 680
  }
},
{
  title: 'Brand Identity Refresh',
  client: 'GreenLeaf Wellness',
  category: 'Branding',
  gradient: 'from-orange-brand via-amber-400 to-yellow-400',
  emoji: '🎨',
  metrics: {
    impressions: '8M',
    engagement: '6.1%',
    roi: '290%'
  },
  rawMetrics: {
    impressions: 8,
    engagement: 6,
    roi: 290
  }
},
{
  title: 'Instagram Growth Strategy',
  client: 'UrbanFit Gym',
  category: 'Social Media',
  gradient: 'from-pink-500 via-rose-400 to-red-400',
  emoji: '📸',
  metrics: {
    impressions: '32M',
    engagement: '7.4%',
    roi: '410%'
  },
  rawMetrics: {
    impressions: 32,
    engagement: 7,
    roi: 410
  }
},
{
  title: 'Meta Ads Funnel',
  client: 'CloudSync Pro',
  category: 'Paid Ads',
  gradient: 'from-indigo-500 via-violet-400 to-purple-400',
  emoji: '⚡',
  metrics: {
    impressions: '18M',
    engagement: '5.2%',
    roi: '750%'
  },
  rawMetrics: {
    impressions: 18,
    engagement: 5,
    roi: 750
  }
}];

function MetricCounter({ value, suffix }: {value: number;suffix: string;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (!hasAnimated) return;
    const controls = animate(count, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    });
    return controls.stop;
  }, [hasAnimated, value, count]);
  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);
  return (
    <span
      ref={(el) => {
        ;(ref as React.MutableRefObject<HTMLSpanElement | null>).current = el;
        if (el && !hasAnimated) setHasAnimated(true);
      }}>

      0{suffix}
    </span>);

}
function ProjectCard({ project }: {project: Project;}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0,
        scale: 0.9
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="cursor-pointer">

      {/* Gradient border wrapper */}
      <div
        className={`bg-gradient-to-br ${project.gradient} p-[2px] rounded-2xl`}>

        <div className="bg-base rounded-[14px] overflow-hidden">
          {/* Thumbnail area */}
          <div
            className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>

            <span className="text-5xl">{project.emoji}</span>

            {/* Hover overlay */}
            <AnimatePresence>
              {isHovered &&
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">

                  <div className="grid grid-cols-3 gap-4 px-4 text-center">
                    <div>
                      <EyeIcon className="w-4 h-4 text-white/70 mx-auto mb-1" />
                      <div className="text-lg font-black text-white">
                        <MetricCounter
                        value={project.rawMetrics.impressions}
                        suffix="M" />

                      </div>
                      <div className="text-xs text-white/60">Impressions</div>
                    </div>
                    <div>
                      <TrendingUpIcon className="w-4 h-4 text-white/70 mx-auto mb-1" />
                      <div className="text-lg font-black text-white">
                        <MetricCounter
                        value={project.rawMetrics.engagement}
                        suffix="%" />

                      </div>
                      <div className="text-xs text-white/60">Engagement</div>
                    </div>
                    <div>
                      <PercentIcon className="w-4 h-4 text-white/70 mx-auto mb-1" />
                      <div className="text-lg font-black text-white">
                        <MetricCounter
                        value={project.rawMetrics.roi}
                        suffix="%" />

                      </div>
                      <div className="text-xs text-white/60">ROI</div>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Card content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${project.gradient}`}>

                {project.category}
              </span>
              <ExternalLinkIcon className="w-4 h-4 text-text-muted" />
            </div>
            <h3 className="text-lg font-extrabold text-text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-1">{project.client}</p>
          </div>
        </div>
      </div>
    </motion.div>);

}
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1
  });
  const filteredProjects =
  activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.category === activeFilter);
  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 sm:py-32 relative">

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
          className="text-center mb-12">

          <span className="text-sm font-bold uppercase tracking-widest gradient-text">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Results That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Real campaigns, real metrics, real growth. Hover over any project to
            see the numbers.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-text-muted glass hover:text-text-primary'}`}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.97
                }}>

                {isActive &&
                <motion.div
                  layoutId="portfolio-filter"
                  className="absolute inset-0 bg-gradient-to-r from-violet-brand via-magenta-brand to-orange-brand rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30
                  }} />

                }
                <span className="relative z-10">{cat}</span>
              </motion.button>);

          })}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <ProjectCard key={project.title} project={project} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}