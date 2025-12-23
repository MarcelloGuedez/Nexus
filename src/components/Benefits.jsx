import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, Target, TrendingUp, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: Target, title: "Estratégia antes de tudo", description: "Um engenheiro não constrói sem projeto, e no marketing não é diferente." },
    { icon: TrendingUp, title: "Tráfego pago qualificado", description: "Leads prontos para comprar, não volume que pesa o comercial." },
    { icon: Users, title: "Parceria real", description: "Trabalhamos com você, não apenas para você." },
    { icon: CheckCircle, title: "Atendimento humano e direto", description: "Suporte personalizado e ágil para suas demandas." },
    { icon: Star, title: "Resultados mensuráveis", description: "Foco em métricas que realmente importam para o seu negócio." },
    { icon: Zap, title: "Conteúdo com propósito", description: "Criamos conteúdo que conecta, engaja e converte." }
  ];

  return (
    <section id="beneficios" className="relative py-20  bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <h2 className="text-5xl md:text-6xl font-azonix mb-4 text-black">
              Por que escolher a <span className="text-black">Nexus?</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-display tracking-wide">
              Nosso maior compromisso é expandir seus resultados com estratégia e propósito.
            </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              className="text-center p-8 bg-purple- rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
            >
                <benefit.icon size={40} className="mx-auto mb-4 text-black" />
                <h3 className="font-bold text-xl font-display tracking-wider mb-2" style={{color: 'red'}}>{benefit.title}</h3>
                <p className="text-gray-600 text-sm font-display">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;