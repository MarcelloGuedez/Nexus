import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="orcamento" className="relative pt-10 pb-10" style={{background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.7), rgba(11, 11, 11, 0.8))'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 text-center text-white"
          > 
            <h2 className="text-5xl md:text-6xl font-azonix mb-6 leading-tight">
              Pronto para elevar o padrão da sua marca?
            </h2>
            <p className="text-2xl font-display mb-8">Vamos planejar, criar e executar juntos.</p>

            <p className="text-xl mb-8 font-display">
              A Nexus é o seu time de marketing completo.
              <br />
              Estratégia, criação, tráfego e resultados reais — tudo em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="https://api.whatsapp.com/send?phone=5531997381193&text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#c8102e' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-bold shadow-lg transition-colors font-display tracking-wider rounded-lg"
                style={{backgroundColor: 'red'}}
              >
                <MessageCircle className="mr-2" size={20} />
                Falar com um especialista
              </motion.a>
              <motion.a
                href="#formulario-proposta" // Ajuste este link para o seu formulário
                whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold shadow-lg transition-colors font-display tracking-wider rounded-lg border border-white/20"
              >
                <FileText className="mr-2" size={20} />
                Solicitar proposta personalizada
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;