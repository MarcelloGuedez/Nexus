import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Video, Pen, FileText, MessageSquare, ArrowRight, Briefcase, Camera, Edit, BarChart2, Globe, Target, Film, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  // Adiciona toggle para mobile
  const handleCardClick = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      className={`relative bg-zinc-900/50 p-6 cursor-pointer group overflow-hidden border rounded-md shadow-xl select-none`}
      style={{borderColor: 'red', boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'}}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-red-600 to-red-500 z-0"
          />
        )}
      </AnimatePresence>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[220px] text-center">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="icon-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center"
              >
                <service.icon size={48} className="mb-4 text-white mx-auto" />
                <h3 className="text-white font-bold text-lg font-displaytracking-wider">
                  {service.title}
                </h3>
              </motion.div>
            ) : (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col items-center justify-center p-4"
              >
                  <h3 className="text-white font-bold text-lg font-displaytracking-wider mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm font-display">{service.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const serviceBlocks = [
    {
      category: "Planejamento e Estratégia",
      services: [
        { icon: Briefcase, title: "Estratégia de Perfil", description: "Análise e desenvolvimento de estratégias para otimizar seu perfil." },
        { icon: Users, title: "Gerenciamento de Perfil", description: "Gestão completa e profissional das suas redes sociais." },
        { icon: BarChart2, title: "Tráfego Pago", description: "Campanhas de anúncios para alcançar o público certo." },
      ]
    },
    {
      category: "Criação e Audiovisual",
      services: [
        { icon: Camera, title: "Captação de Conteúdo", description: "Produção de fotos e vídeos para suas campanhas." },
        { icon: Users, title: "Ensaio Fotográfico", description: "Sessões de fotos profissionais para sua marca." },
        { icon: Film, title: "Cobertura Audiovisual", description: "Registro completo de eventos e projetos." },
        { icon: Edit, title: "Edição de Vídeos e Fotos", description: "Pós-produção para um acabamento impecável." },
      ]
    },
    {
      category: "Design e Posicionamento",
      services: [
        { icon: Pen, title: "Identidade Visual", description: "Criação de uma marca única e memorável." },
        { icon: FileText, title: "Design Gráfico", description: "Desenvolvimento de materiais visuais impactantes." },
        { icon: Target, title: "Criativos para Tráfego", description: "Anúncios visuais otimizados para conversão." },
      ]
    },
    {
      category: "Performance e Expansão",
      services: [
        { icon: Globe, title: "Criação de Sites", description: "Desenvolvimento de sites modernos e responsivos." },
        { icon: MessageSquare, title: "Google Meu Negócio", description: "Otimização do seu perfil para buscas locais." },
        { icon: Film, title: "Nexus Filmes", description: "Produção de vídeos para eventos sociais." },
        { icon: Smartphone, title: "Storymaker Real Time", description: "Criação de stories em tempo real para eventos." },
      ]
    }
  ];

  return (
    <section id="servicos" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-5xl md:text-6xl font-azonix mb-4 leading-tight text-white">
            Tudo o que sua marca precisa para crescer, <br /> em <span className="text-white">um só lugar.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-display tracking-wide">
            Estratégia, criação, tráfego e audiovisual conectados em resultados reais.
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceBlocks.map((block, blockIndex) => (
            <div key={block.category}>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: blockIndex * 0.2 }}
                className="text-3xl font-display text-center mb-8 text-white"
              >
                {block.category}
              </motion.h3>
              <div className={`grid grid-cols-2 ${block.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 max-w-7xl mx-auto`}>
                {block.services.map((service, serviceIndex) => (
                  <div
                    key={service.title}
                    className={block.services.length % 2 !== 0 && serviceIndex === block.services.length - 1 ? 'col-span-2 lg:col-span-1' : ''}
                  >
                    <ServiceCard service={service} index={serviceIndex} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.05, backgroundColor: '#c8102e' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 text-white font-bold rounded-md shadow-lg transition-colors font-displaytracking-wider"
            style={{backgroundColor: 'red', boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.5)'}}
          >
            <MessageSquare className="mr-2" size={20} />
            Solicite uma proposta personalizada
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;