import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import nexusLogo from './Icons/Logo símbolo nexus .PNG';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t py-10" style={{borderColor: 'rgba(255, 0, 0, 0.3)'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            whileHover={{ scale: 1.05 }} className="flex items-center mb-4" 
          >
            <img src={nexusLogo} alt="Nexus Logo" className="h-10 rounded-full bg-red-600 p-1" />
          </motion.div>

          <p className="text-gray-400 text-center font-display tracking-wider">
            Agência online em Belo Horizonte – MG
          </p>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://wa.me/5531997381193"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, color: "red" }}
              className="p-2 text-white/70 transition-colors"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a
              href="https://instagram.com/nexus_mktd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, color: "red" }}
              className="p-2 text-white/70 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="mailto:nexus.mktd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2, color: "red" }}
              className="p-2 text-white/70 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          <p className="text-sm text-gray-500">
            E-mail: nexus.mktd@gmail.com | Telefone: +55 31 99738-1193
          </p>

          <div className="w-24 h-px my-4" style={{backgroundColor: 'rgba(255, 0, 0, 0.3)'}} />

          <p className="text-xs text-gray-600 text-center">
            © 2025 NEXUS - Agência de Design & Marketing.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;