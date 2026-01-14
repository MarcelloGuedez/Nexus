import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AnimatedTestimonials = ({ testimonials = [], autoplay = false, className = '' }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(handleNext, 5000);
    return () => clearInterval(id);
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className={cn('max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12', className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="relative h-72 w-full">
            <AnimatePresence>
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <motion.div
                    key={t.src + i}
                    initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1 : 0.95,
                      z: isActive ? 0 : -100,
                      rotate: isActive ? 0 : randomRotateY(),
                      zIndex: isActive ? 999 : testimonials.length + 2 - i,
                      y: isActive ? [0, -40, 0] : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={t.src}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-red-700">{testimonials[active].name}</h3>
            <p className="text-sm text-red-600 font-bold">{testimonials[active].designation}</p>
            <motion.p className="text-xl text-red-700 mt-6 font-sub">
              {testimonials[active].quote.split(' ').map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ filter: 'blur(8px)', opacity: 0, y: 6 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: 0.02 * idx }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-6 md:pt-0 items-center">
            <button onClick={handlePrev} className="h-8 w-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button onClick={handleNext} className="h-8 w-8 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${active === idx ? 'w-4 bg-red-600' : 'bg-gray-400'}`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop',
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop',
    },
    {
      quote: "This solution has significantly improved our team's productivity.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}

export default AnimatedTestimonials;
