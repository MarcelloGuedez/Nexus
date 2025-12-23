import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, Menu, X } from "lucide-react";
import nexusLogo from './Icons/Logo símbolo nexus .PNG';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SOBRE", href: "#sobre-nexus" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "BENEFÍCIOS", href: "#beneficios" },
    { name: "PORTFÓLIO", href: "#portfolio" },
    { name: "DEPOIMENTOS", href: "#depoimentos" },
    { name: "CONTATO", href: "#orcamento" }
  ];

  const NavLinks = ({isMobile}) => (
    navItems.map((item) => (
      <React.Fragment key={item.name}>
        <motion.a
          href={item.href} 
          whileHover={{ color: "rgb(255, 0, 0)", scale: 1.05 }}
          onClick={() => isMobile && setMobileMenuOpen(false)}
          className={`py-2 font-medium uppercase tracking-wider transition-colors ${isMobile ? "px-4 w-full text-center text-white text-lg" : "px-3 text-white/80 hover:text-white text-sm"}`}
        >
          {item.name}
        </motion.a>
        {!isMobile && (
          <div className="w-px h-4" style={{backgroundColor: 'rgba(255, 0, 0, 0.5)'}} />
        )}
      </React.Fragment>
    ))
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg shadow-red-500/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.a href="#home" whileHover={{ scale: 1.05 }} className="flex items-center">
              <img src={nexusLogo} alt="Nexus Logo" className="h-10 rounded-full bg-red-600 p-1" />
            </motion.a>

            <nav className="hidden md:flex items-center space-x-1 font-display">
              <NavLinks isMobile={false} />
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              <motion.a href="https://api.whatsapp.com/send?phone=5531997381193&text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista." target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-2 bg-zinc-900 text-white transition-colors rounded-md">
                <MessageCircle size={20} />
              </motion.a>
              <motion.a href="mailto:nexus.mktd@gmail.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-2 bg-zinc-900 text-white transition-colors rounded-md">
                <Mail size={20} />
              </motion.a>
              <motion.a href="https.instagram.com/nexus_mktd/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-2 bg-zinc-900 text-white transition-colors rounded-md">
                <Instagram size={20} />
              </motion.a>
            </div>
            
            <div className="md:hidden">
                <button onClick={toggleMobileMenu}>
                    <Menu size={28} />
                </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
        >
          <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-white/80 hover:text-white">
            <X size={32} />
          </button>
          
          <motion.a href="#home" onClick={() => setMobileMenuOpen(false)} className="mb-12">
            <img src={nexusLogo} alt="Nexus Logo" className="h-12 rounded-full bg-red-600 p-1" />
          </motion.a>

          <nav className="flex flex-col items-center space-y-6 font-display text-lg text-center">
            <NavLinks isMobile={true} />
          </nav>

          <div className="mt-12 pt-6 border-t border-red-500/30 flex items-center space-x-4">
            <motion.a href="https://api.whatsapp.com/send?phone=5531997381193&text=Ol%C3%A1%21+Gostaria+de+falar+com+um+especialista." target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-3 bg-zinc-900 text-white transition-colors rounded-md">
              <MessageCircle size={22} />
            </motion.a>
            <motion.a href="mailto:nexus.mktd@gmail.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-3 bg-zinc-900 text-white transition-colors rounded-md">
              <Mail size={22} />
            </motion.a>
            <motion.a href="https://www.instagram.com/nexus_mktd/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, backgroundColor: 'rgb(255, 0, 0)', color: '#fff' }} className="p-3 bg-zinc-900 text-white transition-colors rounded-md">
              <Instagram size={22} />
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;