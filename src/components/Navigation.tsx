import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ZapIcon } from 'lucide-react';
const navLinks = [
{
  label: 'Home',
  href: '#hero'
},
{
  label: 'About',
  href: '#about'
},
{
  label: 'Services',
  href: '#services'
},
{
  label: 'Portfolio',
  href: '#portfolio'
},
{
  label: 'Testimonials',
  href: '#testimonials'
},
{
  label: 'Blog',
  href: '#blog'
},
{
  label: 'Contact',
  href: '#contact'
}];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg shadow-violet-brand/5' : 'bg-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#hero');
            }}
            className="flex items-center gap-2 group"
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}>

            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-brand via-magenta-brand to-orange-brand flex items-center justify-center">
              <ZapIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-text-primary tracking-tight">
              Alex<span className="gradient-text">Rivera</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.97
                  }}>

                  {isActive &&
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-gradient-to-r from-violet-brand/10 via-magenta-brand/10 to-orange-brand/10 rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30
                    }} />

                  }
                  <span
                    className={`relative z-10 ${isActive ? 'gradient-text font-bold' : 'text-text-muted hover:text-text-primary'}`}>

                    {link.label}
                  </span>
                  {isActive &&
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-violet-brand to-magenta-brand rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30
                    }} />

                  }
                </motion.a>);

            })}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden p-2 rounded-xl glass"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{
              scale: 0.9
            }}
            aria-label="Toggle menu">

            {mobileOpen ?
            <XIcon className="w-5 h-5 text-text-primary" /> :

            <MenuIcon className="w-5 h-5 text-text-primary" />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/30 overflow-hidden">

            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: i * 0.05
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-gradient-to-r from-violet-brand/10 to-magenta-brand/10 gradient-text font-bold' : 'text-text-muted hover:text-text-primary hover:bg-gray-50'}`}>

                    {link.label}
                  </motion.a>);

            })}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}