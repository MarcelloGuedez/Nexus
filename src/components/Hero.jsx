import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import aeLogo from './Icons/ae.png';
import aiLogo from './Icons/Ai.png';
import meLogo from './Icons/Me.png';
import psLogo from './Icons/ps.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-8">
      <div className="container mx-auto px-4 text-center" style={{color: 'white'}}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-azonix leading-tight mb-2"
        >
          Transforme sua presença digital <br />
          em <span style={{color: '#ff0000'}}>resultados reais.</span>
        </motion.h1>

        <motion.div
          className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src={aeLogo} alt="Adobe After Effects Logo" className="h-5 sm:h-6 md:h-7 transition-all duration-300 bg-red-600 p-1 rounded-md" />
          <img src={aiLogo} alt="Adobe Illustrator Logo" className="h-5 sm:h-6 md:h-7 transition-all duration-300 bg-red-600 p-1 rounded-md" />
          <img src={meLogo} alt="Adobe Media Encoder Logo" className="h-5 sm:h-6 md:h-7 transition-all duration-300 bg-red-600 p-1 rounded-md" />
          <img src={psLogo} alt="Adobe Photoshop Logo" className="h-5 sm:h-6 md:h-7 transition-all duration-300 bg-red-600 p-1 rounded-md" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-display mb-6 max-w-3xl mx-auto"
        >
          Estratégia, Execução e Performance — Tudo o que sua marca precisa, em um só lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 0, 0, 0.7)", backgroundColor: '#c8102e' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-2 text-sm sm:px-7 sm:py-3 sm:text-base text-white font-bold shadow-lg transition-all duration-300 font-display tracking-wider rounded-md"
            style={{backgroundColor: '#ff0000', boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.5)'}}
          >
            <MessageCircle className="mr-2" size={20} />
            Solicite seu orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;