import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, ArrowUpRightIcon } from 'lucide-react';
interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorEmoji: string;
  gradient: string;
  emoji: string;
}
const posts: BlogPost[] = [
{
  title: 'The Death of Organic Reach (And What to Do About It)',
  excerpt:
  "Organic reach is declining across every platform. Here's my framework for staying visible without blowing your ad budget.",
  category: 'Social Media',
  readTime: '7 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-violet-brand to-purple-500',
  emoji: '📉'
},
{
  title: 'How I Scaled a DTC Brand to $1M/mo with Meta Ads',
  excerpt:
  'A step-by-step breakdown of the exact funnel, creative strategy, and optimization playbook that drove 7-figure monthly revenue.',
  category: 'Paid Ads',
  readTime: '12 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-magenta-brand to-pink-400',
  emoji: '💰'
},
{
  title: 'SEO in 2025: AI Overviews, Zero-Click, and What Actually Works',
  excerpt:
  "Google's AI Overviews changed the game. Here's how to adapt your SEO strategy for the new search landscape.",
  category: 'SEO',
  readTime: '9 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-emerald-500 to-teal-400',
  emoji: '🤖'
},
{
  title: 'The Email Sequence That Converts at 22% (Template Inside)',
  excerpt:
  "Most welcome sequences are boring. Here's the 5-email framework I use to turn subscribers into customers at 3x the industry average.",
  category: 'Email',
  readTime: '6 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-orange-brand to-amber-400',
  emoji: '✉️'
},
{
  title: 'Why Your Brand Voice Is Costing You Customers',
  excerpt:
  "If your brand sounds like everyone else, you're invisible. Here's how to develop a voice that actually resonates and converts.",
  category: 'Branding',
  readTime: '5 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-rose-500 to-orange-400',
  emoji: '🎤'
},
{
  title: 'The Analytics Dashboard Every Marketer Needs',
  excerpt:
  "Stop drowning in data. I'll show you the 7 metrics that actually matter and how to build a dashboard that drives decisions.",
  category: 'Analytics',
  readTime: '8 min read',
  author: 'Sajjad Hossen',
  authorEmoji: '🚀',
  gradient: 'from-blue-500 to-cyan-400',
  emoji: '📊'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30
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
export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 relative">
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
          className="text-center mb-16">

          <span className="text-sm font-bold uppercase tracking-widest gradient-text">
            Blog
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mt-3">
            Marketing <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Actionable strategies, case studies, and hot takes from the trenches
            of digital marketing.
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

          {posts.map((post) =>
          <motion.article
            key={post.title}
            variants={cardVariants}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3
              }
            }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-violet-brand/[0.04] hover:shadow-xl hover:shadow-violet-brand/10 transition-shadow duration-300 cursor-pointer border border-gray-100">

              {/* Image placeholder */}
              <div
              className={`h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>

                <span className="text-5xl">{post.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                {/* Category badge */}
                <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${post.gradient} mb-3`}>

                  {post.category}
                </span>

                <h3 className="text-lg font-extrabold text-text-primary leading-snug mb-2 group-hover:gradient-text transition-all">
                  {post.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{post.authorEmoji}</span>
                    <span className="text-sm font-medium text-text-primary">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <ArrowUpRightIcon className="w-4 h-4 text-text-muted group-hover:text-violet-brand transition-colors" />
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </motion.div>
      </div>
    </section>);

}