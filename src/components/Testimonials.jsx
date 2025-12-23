"use client";
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1888&auto=format&fit=crop', 
    quote: "Transformaram nossa presença digital.",
    name: 'Clínica de estética',
    role: 'CEO',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop', 
    quote: "O tráfego pago finalmente trouxe clientes prontos para fechar.",
    name: 'Loja de semijoias',
    role: 'Gerente de Vendas',
    rating: 5,
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop',
    quote: "Profissionalismo e parceria do início ao fim.",
    name: 'Profissional autônoma',
    role: "Consultora",
    rating: 5,
  },
];

const StarRating = ({ rating, className }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const TestimonialSlider = ({ testimonials: testimonialsData, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, [testimonialsData.length]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  }, [testimonialsData.length]);

  const currentTestimonial = testimonialsData[currentIndex];

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 30 },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 260, damping: 30 },
    }),
  };

  return (
    <div className={`relative w-full max-w-2xl mx-auto overflow-hidden ${className}`}>
      <div className="relative min-h-[350px] md:min-h-[280px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute w-full h-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-4">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-4 md:mb-0 md:mr-[-4rem] z-10">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="relative w-full bg-white text-black rounded-2xl shadow-xl pt-8 md:pt-4 pl-4 md:pl-24 pr-4 pb-4">
                 <Quote className="absolute top-4 left-4 h-8 w-8 text-gray-200" aria-hidden="true" />
                <blockquote className="text-sm md:text-base mb-4 leading-relaxed text-gray-700 font-display pl-10 md:pl-0">
                  {currentTestimonial.quote}
                </blockquote>
                <StarRating rating={currentTestimonial.rating} className="mb-4" />
                <div className="flex items-center justify-between">
                  <div className="pr-12">
                    <p className="font-bold text-lg text-black font-display">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-500 font-display">{currentTestimonial.role}</p>
                  </div>
                   <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevious}
                      className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-4 bg-red-600' : 'bg-gray-400'}`}
            style={{backgroundColor: currentIndex === index ? 'red' : '#D1D5DB'}}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-20" style={{ backgroundColor: '#F9F5EF' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-azonix mb-4 text-black">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-display">
            Resultados reais. Histórias verdadeiras.
          </p>
        </motion.div>
        <TestimonialSlider testimonials={testimonials} />
        <div className="text-center mt-16">
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 0, 0, 0.4)", backgroundColor: '#c8102e' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-white font-bold rounded-md shadow-lg transition-colors font-display tracking-wider"
            style={{ backgroundColor: 'red', boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.3)' }}
          >
            Quero ser o próximo case de sucesso
          </motion.a>
        </div>
      </div>
    </section>
  );
}