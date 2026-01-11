import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-nexus" className="relative py-20 overflow-hidden" style={{backgroundColor: '#F4F4F4'}}>
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-full min-h-[450px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Equipe Nexus trabalhando em um projeto de marketing digital"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          > 
            <h2 className="text-4xl md:text-5xl font-azonix text-center md:text-left text-black">
              Mais do que uma agência, <br /> o seu <span className="text-black">time de marketing.</span>
            </h2>
            <p className="text-xl md:text-2xl font-display text-center md:text-left" style={{color: 'red'}}>Criação que impacta. Estratégia que converte.</p>
            <p className="text-gray-600 leading-relaxed text-justify font-display">
              Unimos a força do audiovisual com estratégias de performance para impulsionar marcas de verdade. Não entregamos apenas posts, mas uma solução completa: posicionamento, tráfego pago, design e produção de conteúdo de alto nível.
            </p>

            <div className="text-center md:text-left">
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.05, backgroundColor: '#c8102e' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-white font-bold rounded-md shadow-lg transition-colors font-display tracking-wider"
                style={{backgroundColor: 'red', boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.4)'}}
              >
                Conheça nossas soluções
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;